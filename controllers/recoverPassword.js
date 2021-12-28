// registerUser controller
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const { User } = require('../db.js');
const bcrypt = require('bcrypt');
const generateId = require('./generateId.js');

// de-hash the password

module.exports = async function(body) {
	// Salt for hashing the password
	const saltRounds = 10;
	
	const CLIENT_ID = '746802922433-pamg2uksnqje0tm7p902d5oisa8210pl.apps.googleusercontent.com';
	const CLIENT_SECRET = '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';
	const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
	const REFRESH_TOKEN = '1//04LAoVaDp7chgCgYIARAAGAQSNwF-L9IrG1xhIweOJY4LIdbcYJQt7g8QbnFEws08aYlM32vgaExVxJut-295eEb_hqJWgIywlWc';
	const {
		email,
	} = body;
	
	// First we need to check if the mail is already registered.
	let foundUser = await User.findOne({
		where: { email: email }
	});
	
	if (!foundUser) throw new Error('The email does not exist.');
	
	// We set a new Admin Password for the User
	let newPassAdmin = generateId(foundUser.passAdmin);
	await User.update(
		{ passAdmin: bcrypt.hashSync(newPassAdmin,saltRounds) },
		{
			where: {
				email: email,
			},
		}
	);
	
	// Begin Nodemailer setup with gmail and google apis
	const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
	oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN});
	
	async function sendMail() {
		const accessToken = await oAuth2Client.getAccessToken();
		const transport = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				type: 'OAuth2',
				user: 'restobaresapp@gmail.com',
				clientId: CLIENT_ID,
				clientSecret: CLIENT_SECRET,
				refreshToken: REFRESH_TOKEN,
				accessToken: accessToken
			}
		});
		// Send the EMAIL
		const mailOptions = {
			from: '🛎️DingBell <restobaresapp@gmail.com>',
			to: email,
			subject: 'Recuperación de Contraseñas',
			text: `
				Recibiste este correo porque has olvidado tu contraseña.
				Hemos generado una nueva contraseña la cual es recomendable que cambies 
				luego de conectarte.
				Nueva Contraseña de Administrador: [ ${newPassAdmin} ]
			`,
			html: `
				<h1>Recibiste este correo porque has olvidado tu contraseña.</h1>
				<p>
					Hemos generado una nueva contraseña la cual es recomendable que cambies 
					luego de conectarte. <br>
					Nueva Contraseña de Administrador: <h5>${newPassAdmin}</h5> <br>
				</p>
			`
		};
		const result = await transport.sendMail(mailOptions);
		return result;
	}
	
	sendMail()
		.then((result) => result);
	
	return { msg: 'The password has been sent to your email account. Please check your spam box.' }
};


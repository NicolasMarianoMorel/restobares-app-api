// registerUser controller
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const { User } = require('../db.js');
const bcrypt = require('bcrypt');
const generateId = require('./generateId.js');
const { PASS_USER } = process.env;

// de-hash the password

module.exports = async function(body) {
	// Salt for hashing the password
	const saltRounds = 10;
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
	// const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
	// oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN});
	
	async function sendMail() {
		const accessToken = await oAuth2Client.getAccessToken();
		const transport = nodemailer.createTransport({
			// service: 'gmail',
			host: "smtp.gmail.com",
            port: 465,
            secure:true,
			auth: {
				// type: 'OAuth2',
				user: 'restobaresapp@gmail.com',
				pass: PASS_USER,
				// clientId: CLIENT_ID,
				// clientSecret: CLIENT_SECRET,
				// refreshToken: REFRESH_TOKEN,
				// accessToken: accessToken
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
	
	await sendMail();
	
	return { msg: 'The password has been sent to your email account. Please check your spam box.' }
};


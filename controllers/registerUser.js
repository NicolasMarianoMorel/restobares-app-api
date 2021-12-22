// registerUser controller
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const { User } = require('../db.js');
const generateId = require('./generateId.js');
const { pendingUsers } = require('../cache.js');


module.exports = async function(body) {
	const CLIENT_ID = '746802922433-pamg2uksnqje0tm7p902d5oisa8210pl.apps.googleusercontent.com';
	const CLIENT_SECRET = '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';
	const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
	const REFRESH_TOKEN = '1//04LAoVaDp7chgCgYIARAAGAQSNwF-L9IrG1xhIweOJY4LIdbcYJQt7g8QbnFEws08aYlM32vgaExVxJut-295eEb_hqJWgIywlWc';
	
	// Body data
	const {
		email,
		passAdmin,
		passStaff,
		title,
		logo,
		payment_mp,
		tables,
	} = body;
	
	// First we need to check if the mail is already registered.
	let foundUser = await User.findOne({
		where: { email: email }
	});
	
	if (foundUser) throw new Error('The email is already used.');
	
	// Then, we generate the token for the link.
	let userToken = generateId(email);

	// Check if the token is already stored in cache.
	if (pendingUsers[userToken]) throw new Error('There is a pending confirmation for this user.');
	
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
			subject: 'Confirmación de tu cuenta',
			text: `Para finalizar la confirmación de tu cuenta, hacé click en este link: https://restobares-app-api.herokuapp.com/confirmation/${userToken}`,
			html: `
				<h1>Bienvenido a DingBell! 🛎️</h1>
				<p>
					Sólo queda un paso para aprovechar los beneficios de DingBell...<br>
					hacé click en este 
					<a href="https://restobares-app-api.herokuapp.com/confirmation/${userToken}">LINK</a> 
					para continuar con tu registro.
				</p>
			`
		};
		const result = await transport.sendMail(mailOptions);
		return result;
	}
	
	sendMail()
		.then((result) => result);
	
	// Once the mail is delivered, we can store the user data in the cache.
	pendingUsers[userToken] = {
		id: userToken,
		email,
		passAdmin,
		passStaff,
		title,
		logo,
		payment_mp,
		tables: tables || 1,
	}
	// Not the fanciest solution...
	setTimeout( () => {
		pendingUsers[userToken] = null;
		console.log(`TIMEOUT: The confirmation token for '${email}' has expired.`);
	} , 3600000)
	
	return { msg: 'The confirmation mail has been sent. Please check your spam box too.' }
	//return {};
};


// registerUser controller
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

module.exports = async function(body) {
	const {
		email,
		passAdmin,
		passStaff,
		title,
		logo,
		payment_mp,
	} = body;
	let result = { 
		msg: 'Se ha enviado el email de confirmación.',
		status: 200,
	} 
	// Validate the user data
	// Store temporally the user, to wait for confirmation.
	return result;
};


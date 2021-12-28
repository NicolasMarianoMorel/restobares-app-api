const { User } = require('../db');
// const jwt = require('jsonwebtoken');
const { loggedUsers } = require("../cache.js");

//login controller

module.exports = async function logout(logoutCode) {
	// First search if the user exists
	//const user = await User.findOne({
	//	where: { email },
	//	attributes: ['id', 'title', 'passAdmin', 'passStaff' ],
	//});
	//if (!user) throw new Error('Unregistered Email.');
	//// If it exists, we check the password
	//let role = '';
	//switch (password) {
	//	case user.passAdmin: role = 'admin'; break;
	//	case user.passStaff: role = 'staff'; break;
	//	default: role = '';
	//}
	//if (!role) throw new Error('Invalid Password.');
	//// If is a valid password, we sign the token.
	//const token = jwt.sign({email,password,role},'elñerroviveennuestroscorazones');
	//// We store that token in the cache
	////
	//loggedUsers[`${email}-${role}`] = {
	//	role,
	//	token,
	//};
	
	const user = loggedUsers[logoutCode];
	if (!user) throw new Error('The this user never logged in.');
	loggedUsers[logoutCode] = null;
	return { msg: `You have logged out succesfully.` };
};

const { User } = require('../db');
const jwt = require('jsonwebtoken');
const { loggedUsers } = require("../cache.js");
const {JWT_SECRET} = process.env;
//login controller

module.exports = async function login(email, password) {
	// First search if the user exists
	const user = await User.findOne({
		where: { email },
		attributes: ['id', 'title', 'passAdmin', 'passStaff' ],
	});
	if (!user) throw new Error('Unregistered Email.');
	// If it exists, we check the password
	let role = '';
	switch (password) {
		case user.passAdmin: role = 'admin'; break;
		case user.passStaff: role = 'staff'; break;
		default: role = '';
	}
	if (!role) throw new Error('Invalid Password.');
	// If is a valid password, we sign the token.
	const token = jwt.sign({email,password,role},JWT_SECRET);
	// We store that token in the cache
	//
	loggedUsers[`${email}-${role}`] = {
		role,
		token,
	};
	
	return {
		msg: `Welcome back, ${user.title}! You logged in as ${role}.`, 
		token,
		id: user.id,
		logoutCode: `${email}-${role}`,
	};
};

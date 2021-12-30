const { User } = require('../db');
const jwt = require('jsonwebtoken');
const { loggedUsers } = require("../cache.js");
const bcrypt = require('bcrypt');
const {JWT_SECRET} = process.env;
//login controller

module.exports = async function login(email, password) {
	// Salt for hashing the password
	// const saltRounds = 10;
	// First search if the user exists
	const user = await User.findOne({
		where: { email },
		attributes: ['id', 'title', 'passAdmin', 'passStaff' ],
	});
	if (!user) throw new Error('Unregistered Email.');
	
	// If it exists, we check the hashed password
	let isAdmin = bcrypt.compareSync(password,user.passAdmin);
	let isStaff = bcrypt.compareSync(password,user.passStaff);
	let role = '';
	
	// We check the role
	if (isAdmin) role = 'admin';
	else if (isStaff) role = 'staff';
	else role = '';
	
	if (!role) throw new Error('Invalid Password.');
	
	// If is a valid password, we sign the token.
	const token = jwt.sign({email,password,role},JWT_SECRET);
	// We store that token in the cache
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

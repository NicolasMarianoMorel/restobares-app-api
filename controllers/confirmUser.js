const { User } = require("../db");
const { pendingUsers } = require("../cache.js");

//confirmUser controller
 
module.exports = async function confirmUser(token) {
	let user = pendingUsers[token];
	if (user) {
		await User.create(pendingUsers[token]);
		return {msg: 'Your account has been confirmed successfully.'};
	} else throw new Error('This token is invalid or has expired.');
};

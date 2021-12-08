// Import the controllers functions
const getUsers = require('./getUsers.js');
// ...

// Import the DB models
const { User } = require('../db.js');
// ...

module.exports = {
	getUsers,
	// ...
}

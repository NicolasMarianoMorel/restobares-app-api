// Import the controllers functions
const registerUser = require('./registerUser.js');
const validateToken = require('./validateToken.js');
const getOrders = require('./getOrders.js');
const postOrder = require('./postOrder.js');
// ...

module.exports = {
	registerUser,
	validateToken,
	getOrders,
	postOrder,
	// ...
}

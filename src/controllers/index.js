// Import the controllers functions
const registerUser = require('./registerUser.js');
const validateToken = require('./validateToken.js');
const getOrders = require('./getOrders.js');
const getCategories = require("./getCategories");
const getLabels = require("./getLabels");
const getUser = require("./getUser");
const getDiscounts = require("./getDiscounts");
const postOrder = require('./postOrder.js');
// ...

module.exports = {
	registerUser,
	validateToken,
	getOrders,
	postOrder,
  getCategories,
  getLabels,
  getUser,
  getDiscounts,
	// ...
}

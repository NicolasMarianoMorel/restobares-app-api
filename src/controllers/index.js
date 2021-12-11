// Import the controllers functions
const registerUser = require("./registerUser.js");
const validateToken = require("./validateToken.js");
const getCategories = require("./getCategories");
const getLabels = require("./getLabels");
const getUser = require("./getUser");
const getDiscounts = require("./getDiscounts");
const getOrders = require('./getOrders.js');
const postOrder = require('./postOrder.js');
const getMenu = require("./getMenu.js")
// ...

module.exports = {
  registerUser,
  validateToken,
  getCategories,
  getLabels,
  getUser,
  getDiscounts,
  getOrders,
	postOrder,
  getMenu,
  // ...
};


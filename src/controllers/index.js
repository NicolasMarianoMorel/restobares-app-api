// Import the controllers functions
<<<<<<< HEAD
const registerUser = require('./registerUser.js');
const validateToken = require('./validateToken.js');
const getOrders = require('./getOrders.js');
=======

const registerUser = require("./registerUser.js");
const validateToken = require("./validateToken.js");
>>>>>>> c2a8c749cf709ef739b9fee31c9041e468f10ab8
const getCategories = require("./getCategories");
const getLabels = require("./getLabels");
const getUser = require("./getUser");
const getDiscounts = require("./getDiscounts");
<<<<<<< HEAD
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
=======
const getOrders = require('./getOrders.js');
const postOrder = require('./postOrder.js');
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
  // ...
};

>>>>>>> c2a8c749cf709ef739b9fee31c9041e468f10ab8

// Import the controllers functions
const registerUser = require("./registerUser.js");
const validateToken = require("./validateToken.js");
const getCategories = require("./getCategories");
const getLabels = require("./getLabels");
const getUser = require("./getUser");
const getDiscounts = require("./getDiscounts");
const getOrders = require("./getOrders.js");
const postOrder = require("./postOrder.js");
const getMenu = require("./getMenu.js");
const postMenu = require("./postMenu.js");
const putProduct = require("./putProduct.js");
const tableStates = require("./tableStates.js");
const getOrdersStaff = require("./getOrdersStaff.js");
const deleteOrdered = require("./deleteOrdered");
const postFeedbacks = require("./postFeedbacks");
const getFeedbacks = require("./getFeedbacks");
const getSoldOrder = require("./getSoldOrder");
const sendPayment = require("./sendPayment.js");
const generateId = require("./generateId.js");
const getAccount = require("./getAccount.js");
const putAccount = require("./putAccount.js");
const getSoldOrderPrice = require("./getSoldOrderPrice.js");
const confirmUser = require("./confirmUser.js");
const mercadoPago = require("./mercadoPago");
const login = require("./login.js");
const uploadImage = require("./uploadImage");
const recoverPassword = require("./recoverPassword.js");
const logout = require("./logout.js");
const filledTable = require("./filledTable.js")

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
  postMenu,
  putProduct,
  tableStates,
  getOrdersStaff,
  deleteOrdered,
  postFeedbacks,
  getFeedbacks,
  getSoldOrder,
  sendPayment,
  generateId,
  getAccount,
  putAccount,
  getSoldOrderPrice,
  confirmUser,
  mercadoPago,
  login,
  uploadImage,
  recoverPassword,
  logout,
  filledTable
  // ...
};

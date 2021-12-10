const { User } = require("../db");

//categories controller

module.exports = async function () {
  try {
    const users = User.findAll();
  } catch (err) {
    console.log(err);
  }
};

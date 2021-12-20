const { User } = require("../db");

//getAccount controller

module.exports = async function (idResto) {
  const user = await User.findOne({
    where: {
      id: idResto,
    }
  });
  return user;
};

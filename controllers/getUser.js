const { User } = require("../db");

//categories controller

module.exports = async function (idResto) {
  const users = await User.findAll({
    where: {
      id: idResto,
    },
    attributes: ["id", "title", "logo"],
  });
  return users;
};

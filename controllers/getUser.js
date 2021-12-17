const { User } = require("../db");

//categories controller

module.exports = async function (idResto) {
  try {
    const users = await User.findAll({
      where: {
        id: idResto,
      },
      attributes: ["id", "title", "logo"],
    });
    return users;
  } catch (err) {
    console.log(err);
  }
};

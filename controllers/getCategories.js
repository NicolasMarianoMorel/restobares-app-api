const { Category } = require("../db");

//categories controller

module.exports = async function () {
  try {
    const categories = await Category.findAll();
    if (categories.length === 0) {
      const categories = Category.bulkCreate([
        { name: "starter" },
        { name: "main course" },
        { name: "dessert" },
        { name: "drink" },
      ]);
      return categories
    } else {
      return categories;
    }
  } catch (err) {
    console.log(err);
  }
};

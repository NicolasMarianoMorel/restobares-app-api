const { Label } = require("../db");

//categories controller

module.exports = async function () {
  try {
    const labels = await Label.findAll({
      order: [["name", "ASC" ]]
    });
    if (labels.length === 0) {
      const labels = Label.bulkCreate([
        { name: "Light" },
        { name: "Bakery" },
        { name: "Cafeteria" },
        { name: "Lomo" },
        { name: "Hamburger" },
        { name: "Spicy" },
        { name: "No Alcohol" },
        { name: "Beers" },
        { name: "Cocktails" },
        { name: "Wines & Sparkling wines" },
        { name: "Champagnes" },
        { name: "Smoothies" },
        { name: "Sodas" },
        { name: "Ice Creams" },
        { name: "Chicken" },
        { name: "Fish" },
        { name: "Bovine" },
        { name: "Pork" },
        { name: "Seafood" },
        { name: "Vegetarian" },
        { name: "Vegan" },
        { name: "Gluten Free" },
        { name: "Sodium Low" },
        { name: "Crafted" },
      ]);
      return labels;
    } else {
      return labels;
    }
  } catch (err) {
    console.log(err);
  }
};

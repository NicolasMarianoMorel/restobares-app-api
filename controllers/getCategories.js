const { Category } = require("../db");

//categories controller

module.exports = async function () {
  try {
    const categories = await Category.findAll();
    if (categories.length === 0) {
      let commonLabels = ["Vegetarian", "Light", "Vegan", "Gluten Free", "Sodium Low", "Crafted"];
      const categories = Category.bulkCreate([
        { name: "Breakfasts & Snacks", labels: [...commonLabels, "Bakery", "Cafeteria"] },
        { name: "Starter", labels: [...commonLabels, "Spicy", "Chicken", "Bovine", "Fish", "Seafood", "Pork"] },
        { name: "Salads", labels: commonLabels },
        { name: "Pastas", labels: [...commonLabels, "Chicken", "Bovine", "Fish", "Seafood", "Spicy"] },
        { name: "Pizzas", labels: [...commonLabels, "Spicy", "Chicken", "Bovine", "Fish", "Seafood"] },
        { name: "Meats", labels: [...commonLabels, "Chicken", "Bovine", "Fish", "Seafood", "Spicy"] },
        { name: "Sandwiches", labels: [...commonLabels, "Chicken", "Bovine", "Fish", "Seafood", "Spicy"] },
        { name: "Traditional", labels: [...commonLabels, "Chicken", "Bovine", "Fish", "Seafood", "Spicy"] },
        { name: "For kids", labels: [...commonLabels, "Chicken", "Bovine", "Fish", "Seafood"] },
        { name: "Drinks", labels: ["No Alcohol", "Beer", "Cocktails", "Wines & Sparkling wines", "Champagnes", "Smoothies", "Sodas", "Crafted" ] },
        { name: "Desserts", labels: [...commonLabels, "Bakery", "Ice Creams"] }
      ]);
      return categories
    } else {
      return categories;
    }
  } catch (err) {
    console.log(err);
  }
};

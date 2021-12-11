const { Discount } = require("../db");

//categories controller

module.exports = async function () {
  try {
    const discounts = await Discount.findAll();
    if (discounts.length === 0) {
      const discounts = await Discount.bulkCreate([
        { percentage: 50, factor: 2, max_discounts: 3 },
        { percentage: 50, factor: 3, max_discounts: 4 },
        { percentage: 75, factor: 1, max_discounts: 4 },
      ]);
      return discounts;
    } else {
      return discounts;
    }
  } catch (err) {
    console.log(err);
  }
};

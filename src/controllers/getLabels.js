const { Label } = require("../db");

//categories controller

module.exports = async function () {
  try {
    const labels = await Label.findAll();
    if (labels.length === 0) {
      const labels = Label.bulkCreate([
        { name: "ice cream" },
        { name: "dinner" },
        { name: "drink with alcohol" },
        { name: "soft drink" },
        { name: "pasta" },
        { name: "fish and shellfish" },
        { name: "woks" },
        { name: "empanadas" },
        { name: "lomitos" },
        { name: "chicken" },
        { name: "meat" },
        { name: "fried" },
      ]);
      return labels;
    } else {
      return labels;
    }
  } catch (err) {
    console.log(err);
  }
};

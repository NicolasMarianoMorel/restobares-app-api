var express = require("express");
var router = express.Router();

// Obtenemos la lógica correspondiente desde controllers/index.js
const { getCategories } = require("../controllers");


router.get("/", async (req, res) => {
  let result = await getCategories();
  res.json(result);
});

module.exports = router;

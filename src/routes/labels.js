var express = require("express");
var router = express.Router();

// Obtenemos la lógica correspondiente desde controllers/index.js
const { getLabels } = require("../controllers");

router.get("/", async (req, res) => {
  let result = await getLabels();
  res.json(result);
});

module.exports = router;

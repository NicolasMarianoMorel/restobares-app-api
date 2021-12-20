var express = require("express");
var router = express.Router();

// Obtenemos la lógica correspondiente desde controllers/index.js
const { getLabels } = require("../controllers");

router.get("/", async (req, res) => {
  try {
  	let result = await getLabels();
  	res.json(result);
  } catch(err) {
		console.error(err.stack);
		res.status(400).json({ msg: 'There was an error', error: err.message});
  }
});

module.exports = router;

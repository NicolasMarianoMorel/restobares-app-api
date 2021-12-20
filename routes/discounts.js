var express = require('express');
var router = express.Router();

// Obtenemos la lógica correspondiente desde controllers/index.js
const { getDiscounts } = require("../controllers");

// - - GET /register
// Ejecuta la ruta /register
// ruta relativa!
router.get('/',async (req,res) => {
	try {
		let result = await getDiscounts();
		res.json(result); 
  } catch(err) {
		console.error(err.stack);
		res.status(400).json({ msg: 'There was an error', error: err.message});
  }
});

module.exports = router;

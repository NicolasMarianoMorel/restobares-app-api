var express = require('express');
var router = express.Router();

// Obtenemos la lógica correspondiente desde controllers/index.js
const { getDiscounts } = require("../controllers");

// - - GET /register
// Ejecuta la ruta /register
// ruta relativa!
router.get('/',async (req,res) => {
	let result = await getDiscounts();
	res.json(result); 
});

module.exports = router;

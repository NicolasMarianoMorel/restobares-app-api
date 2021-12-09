var express = require('express');
var router = express.Router();

// Obtenemos la lógica correspondiente desde controllers/index.js
const { registerUser } = require('../controllers');

// - - GET /register
// Ejecuta la ruta /register
// ruta relativa!
router.post('/',async (req,res) => {
	let result = await registerUser(req.body);
	res.status(result.status).json(result);
});

module.exports = router;


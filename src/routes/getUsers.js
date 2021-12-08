var express = require('express');
var router = express.Router();

// Obtenemos la lógica correspondiente desde controllers/index.js
const { getUsers } = require('../controllers');

// - - GET /users
// Ejecuta la ruta /users
// ruta relativa!
router.get('/',async (req,res) => {
	let result = await getUsers();
	res.json(result);
});

module.exports = router;


var express = require('express');
var router = express.Router();

// Obtenemos la lógica correspondiente desde controllers/index.js
// const { registerUser } = require('../controllers');

// ruta relativa!
router.get('/',async (req,res) => {
	
	const {idResto} = req;
	res.send(`este es el idResto  ${idResto}`)
});

// tambien puede ir el post, delete, etc...

module.exports = router;
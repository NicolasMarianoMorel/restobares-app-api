var express = require('express');
var router = express.Router();

// Obtenemos la lógica correspondiente desde controllers/index.js
// const { registerUser } = require('../controllers');

// ruta relativa!
router.get('/',async (req,res) => {
	//let result = await registerUser(req.body);
	//res.status(result.status).json(result);
	res.send(`esto es narnia, MESA: ${req.idTable}, RESTORAN: ${req.idResto}`)
	
});

// tambien puede ir el post, delete, etc...

module.exports = router;



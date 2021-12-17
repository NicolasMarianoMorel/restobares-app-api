var express = require('express');
var router = express.Router();

// Obtenemos la lógica correspondiente desde controllers/index.js
 const { getOrdersStaff } = require('../../../controllers');

// ruta relativa!
router.get('/', async (req,res) => {
	const { idResto } = req;
	res.status(200).json(await getOrdersStaff(idResto));
});

// tambien puede ir el post, delete, etc...

module.exports = router;



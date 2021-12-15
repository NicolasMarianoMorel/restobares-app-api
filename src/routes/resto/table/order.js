var express = require('express');
var router = express.Router();

// Obtenemos la lógica correspondiente desde controllers/index.js
const { getOrders, postOrder } = require('../../../controllers');

// ruta relativa!
router.get('/',async (req,res) => {
	const { idResto, idTable } = req;
	res.status(200).json(getOrders(idResto,idTable));
});

// tambien puede ir el post, delete, etc...
router.post('/',async (req,res) => {
	const { idResto, idTable, body } = req;
	let result = postOrder(idResto,idTable,body);
	res.status(result.status).json(result);
});

module.exports = router;



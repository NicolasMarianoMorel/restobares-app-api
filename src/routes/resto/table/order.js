var express = require('express');
var router = express.Router();

// Obtenemos la lógica correspondiente desde controllers/index.js
const { getOrders, postOrder } = require('../../../controllers');

router.get('/',async (req,res) => {
	const { idResto, idTable } = req;
	res.status(200).json(await getOrders(idResto,idTable));
});

router.post('/',async (req,res) => {
	const { idResto, idTable, body } = req;
	let result = await postOrder(idResto,idTable,body);
	res.status(result.status).json(result);
});

router.put('/', async (req,res)=>{
	const {idResto, idTable} = req;
	getOrders(idResto, idTable).state='pay_cash';
	res.send(`state changed to pay_cash`);

});
module.exports = router;



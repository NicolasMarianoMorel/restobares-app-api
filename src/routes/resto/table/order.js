var express = require('express');
var router = express.Router();
const { usersTables } = require('../../../cache.js');

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
	let tableCalling = usersTables[idResto].tables[idTable-1].calling;
	usersTables[idResto].tables[idTable-1].calling = !tableCalling;
	res.json({ msg: `The table ${idTable} is ${tableCalling ? '' : 'not '}calling the staff.` });
});
module.exports = router;



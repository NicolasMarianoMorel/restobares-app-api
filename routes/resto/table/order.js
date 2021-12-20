var express = require('express');
var router = express.Router();
const { usersTables } = require('../../../cache.js');

// Obtenemos la lógica correspondiente desde controllers/index.js
const { getOrders, postOrder } = require('../../../controllers');

router.get('/',async (req,res) => {
	const { idResto, idTable } = req;
	try {
		res.status(200).json(await getOrders(idResto,idTable));
	} catch(err) {
		console.error(err.stack);
		res.status(400).json({ msg: 'There was an error', error: err.message});
	}
});

router.post('/',async (req,res) => {
	const { idResto, idTable, body } = req;
	try {
		let result = await postOrder(idResto,idTable,body);
		res.status(result.status).json(result);
	} catch(err) {
		console.error(err.stack);
		res.status(400).json({ msg: 'There was an error', error: err.message});
	}
});

router.put('/', async (req,res)=>{
	const {idResto, idTable} = req;
	try {
		let tableCalling = usersTables[idResto].tables[idTable-1].calling;
		usersTables[idResto].tables[idTable-1].calling = !tableCalling;
		res.json({ msg: `The table ${idTable} is ${tableCalling ? '' : 'not '}calling the staff.` });
	} catch(err) {
		console.error(err.stack);
		res.status(400).json({ msg: 'There was an error', error: err.message});
	}
});
module.exports = router;



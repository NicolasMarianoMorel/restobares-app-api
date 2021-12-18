// /dev/clear
var express = require("express");
var router = express.Router();

// const { tableStates, deleteOrdered } = require("../../../controllers");
const { usersTables } = require("../../cache.js");

router.delete("/", (req, res) => {
	const { idResto, idTable } = req.body;
	if (!idResto || !idTable ) {
		return res.status(404).json({ msg: 'You must specify idResto and idTable in the body.' } );
	}
	usersTables[idResto].tables[idTable - 1] = {
		tableId: idTable,  //xD
		state: 'free', // free, eating, waiting, pay_cash, pay_online
		calling: false,
		ordered: [], // already ordered products
		totalPrice: 0,
		tip: 0,
		currentOrder: { // order waiting to be served
			time: '',
			products: [],
			comments: '',
		}
	}
	return res.status(200).json({ msg: 'The table was cleared.' });
});

//router.get("/", async (req, res) => {
//	try {
//		const { idResto } = req;
//		let tablesResto = await usersTables[idResto];
//		res.status(200).send(tablesResto);
//	} catch (err) {
//		res.status(404).send(err);
//	}
//});
//
//router.put("/", async (req, res) => {
//	try{
//		const { idResto } = req;
//		const { idTable, state, idStaff } = req.body;
//		let response = await tableStates(idTable, state, idResto, idStaff);
//		res.status(response.status).json(response);
//	} catch (err){
//		res.status(404).send(err);
//	}
//});

module.exports = router;

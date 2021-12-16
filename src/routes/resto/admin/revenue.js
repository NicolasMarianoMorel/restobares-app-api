var express = require('express');
var router = express.Router();
const {SoldOrder} = require('../../../db');
router.get('/',async (req,res) => {
	// const {idResto} = req,
	// const {filter} = req.body;
	// let revenue = await SoldOrders(idResto, filter);
	// if(!revenue.length) return res.status(404).json({error: `There isn't movement history`});
	// res.status(200).json(revenue);
});


module.exports = router;



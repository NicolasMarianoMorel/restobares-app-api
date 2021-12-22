var express = require('express');
const filter = require('jade/lib/filters');
var router = express.Router();
const {getSoldOrder, getSoldOrderPrice} = require('../../../controllers');
router.get('/',async (req,res) => {
	try{
		const {idResto} = req;
		const {filterTime, orderPrice} = req.body;
		let timeOrder = await getSoldOrder(idResto, filterTime);
		if(timeOrder.length<1) return res.status(404).json({error: `There isn't movement history`});
		if(!orderPrice) return res.status(200).json(timeOrder);
		let priceOrder = await getSoldOrderPrice(timeOrder, orderPrice);
		res.status(200).json(priceOrder);
	} catch (err){
		console.error(err.stack);
		res.status(400).json({ msg: 'There was an error', error: err.message});
	}
});

module.exports = router;



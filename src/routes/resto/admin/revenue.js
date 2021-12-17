var express = require('express');
var router = express.Router();
const {getSoldOrder} = require('../../../controllers');
router.get('/',async (req,res) => {
	try{
		const {idResto} = req;
		const {filterTime} = req.body;
		let revenue = await getSoldOrder(idResto, filterTime);
		// console.log("ADMIN",revenue);
		if(revenue.length<1) return res.status(404).json({error: `There isn't movement history`});
		res.status(200).json(revenue);
	} catch (err){
		res.status(404).send(err);
	}
});

module.exports = router;



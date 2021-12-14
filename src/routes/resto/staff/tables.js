var express = require('express');
var router = express.Router();
const {usersTables} = require('../../../cache');
router.get('/',async (req,res) => {
	try{
		const { idResto }= req;
		let tablesResto = usersTables[idResto];
		res.status(200).send(tablesResto);
	} catch (err){
		res.status(404).send(err);
	}
});

module.exports = router;



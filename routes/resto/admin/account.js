var express = require('express');
var router = express.Router();

// Obtenemos la lógica correspondiente desde controllers/index.js
const { getAccount, putAccount } = require('../../../controllers');

// ruta relativa!
router.get('/',async (req,res) => {
	try {
		let { idResto } = req;
		let result = await getAccount(idResto);
		res.json(result);
	} catch (err) {
		console.error(err.stack);
		res.status(400).json({ msg: 'There was an error', error: err.message});
	}
});

// tambien puede ir el post, delete, etc...
router.put('/',async (req,res) => {
	try {
		// recibe algo por body
		let { idResto, body } = req; 
		let result = await putAccount(idResto,body);
		res.json(result);
	} catch (err) {
		console.error(err.stack);
		res.status(400).json({ msg: 'There was an error', error: err.message});
	}
});

module.exports = router;



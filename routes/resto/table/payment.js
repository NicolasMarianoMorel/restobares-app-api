var express = require('express');
var router = express.Router();

// Obtenemos la lógica correspondiente desde controllers/index.js
const { sendPayment } = require('../../../controllers');

// ruta relativa!
router.post('/',async (req,res) => {
	try {
		const { idResto, idTable } = req;
		const { tip, state } = req.body;
		let result = await sendPayment(idResto,idTable,state,tip);
		res.json(result);
	} catch (error) {
		console.error(error.stack);
		res.status(400).json({ msg: 'There was an error', error: error.message});
	}
});

// tambien puede ir el post, delete, etc...

module.exports = router;



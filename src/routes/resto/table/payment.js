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
		res.status(400).send({ msg: error });
	}
});

// tambien puede ir el post, delete, etc...

module.exports = router;



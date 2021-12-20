var express = require('express');
var router = express.Router();

// Obtenemos la lógica correspondiente desde controllers/index.js
 const { getOrdersStaff } = require('../../../controllers');

// ruta relativa!
router.get('/', async (req,res) => {
	try {
	 const { idResto } = req;
	 res.status(200).json(await getOrdersStaff(idResto));
	} catch (err) {
		console.error(err.stack);
		res.status(400).json({ msg: 'There was an error', error: err.message});
	}
});

// tambien puede ir el post, delete, etc...

module.exports = router;



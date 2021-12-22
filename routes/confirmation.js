var express = require('express');
var router = express.Router();
const { confirmUser } = require('../controllers');

// - - GET /confirmation/:token
// ruta relativa!
router.get('/:token',async (req,res) => {
	try {
		const { token } = req.params;
		let result = await confirmUser(token);
		res.json(result);
	} catch (err) {
		console.error(err.stack);
		res.status(400).json({
			msg: 'There was an error...',
			error: err.message
		});
	}
});

module.exports = router;

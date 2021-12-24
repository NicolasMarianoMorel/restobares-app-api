var express = require('express');
var router = express.Router();

// Obtenemos la lógica correspondiente desde controllers/index.js
const { login } = require('../controllers');

// Runs the /login route
router.post('/',async (req,res) => {
	try {
		// First we get the user-email and password via body
		const { email, password } = req.body;
		// then, we do the logic in the controller.
		let result = await login(email, password);
		res.json(result);
	} catch (err) {
		console.error(err.stack);
		res.status(400).json({
			msg: 'There was an error...',
			error: err.message,
		});
	}
});

module.exports = router;

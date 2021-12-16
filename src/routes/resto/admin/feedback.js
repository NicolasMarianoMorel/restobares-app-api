var express = require('express');
var router = express.Router();

// Obtenemos la lógica correspondiente desde controllers/index.js
 const { getFeedbacks } = require('../../../controllers');

// ruta relativa!
router.get('/',async (req,res) => {
	try {
		const { idResto } = req;
		const feedback = await getFeedbacks(idResto);
		if (!feedback.length) {
		  res.status(400).json({ error: "No feedback available." });
		} else {
		  res.status(200).json(feedback);
		}
	  } catch (error) {
		res.json(error);
	  }
});

module.exports = router;


var express = require('express');
var router = express.Router();
const {tableStates} = require("../../../controllers")

// Obtenemos la lógica correspondiente desde controllers/index.js
// const { registerUser } = require('../controllers');

// ruta relativa!
router.get('/',async (req,res) => {
	//let result = await registerUser(req.body);
	//res.status(result.status).json(result);
});

router.put("/", async (req,res) => {
	const {idResto} = req;
	const {idTable, state} = req.body;
	let response = await tableStates(idTable, state, idResto);
	res.json(response);
})

// tambien puede ir el post, delete, etc...

module.exports = router;



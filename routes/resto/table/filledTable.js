var express = require('express');
var router = express.Router();

// Obtenemos la lógica correspondiente desde controllers/index.js
const { filledTable } = require("../../../controllers");

// ruta relativa!
router.post('/',async (req,res) => {
	try {
		const { idResto, idTable } = req;
		const { state } = req.body;
    if(state === 'filled'){
      let result = await filledTable(idResto,idTable,state);
      res.json(result);
    }
    else {
        throw new Error ("The body state must be 'filled'")
    }
    }
     catch (error) {
		console.error(error.stack);
		res.status(400).json({ msg: 'There was an error', error: error.message});
	}
});

// tambien puede ir el post, delete, etc...

module.exports = router;
var express = require("express");
var router = express.Router();

const { tableStates, deleteOrdered } = require("../../../controllers");
const { usersTables } = require("../../../cache");

router.get("/", async (req, res) => {
  try {
    const { idResto } = req;
    let tablesResto = await usersTables[idResto];
    res.status(200).send(tablesResto);
  } catch (err) {
		console.error(err.stack);
		res.status(400).json({ msg: 'There was an error', error: err.message});
  }
});

router.put("/", async (req, res) => {
  try{
    const { idResto } = req;
    const { idTable, state, idStaff } = req.body;
    let response = await tableStates(idTable, state, idResto, idStaff);
    res.status(response.status).json(response);
  } catch (err){
		console.error(err.stack);
		res.status(400).json({ msg: 'There was an error', error: err.message});
  }
});

// tambien puede ir el post, delete, etc...
router.delete("/", async (req, res) => {
  try {
    const { idResto, body } = req;
    const productDeleted = deleteOrdered(idResto, body);
    res.json({ msg: `Product ${productDeleted.productName} was removed` });
  } catch (err) {
		console.error(err.stack);
		res.status(400).json({ msg: 'There was an error', error: err.message});
  }
});
module.exports = router;

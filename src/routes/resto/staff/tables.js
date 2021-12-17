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
    res.status(404).send(err);
  }
});

router.put("/", async (req, res) => {
  try{
    const { idResto } = req;
    const { idTable, state, idStaff } = req.body;
    let response = await tableStates(idTable, state, idResto, idStaff);
    res.status(response.status).json(response);
  } catch (err){
    res.status(404).send(err);
  }
});

// tambien puede ir el post, delete, etc...
router.delete("/", async (req, res) => {
  try {
    const { idResto, body } = req;
    const productDeleted = deleteOrdered(idResto, body);
  
    res.json({ msg: `Product ${productDeleted.productName} was removed` });
  } catch (error) {
    res.status(404).send(error);
  }
});
module.exports = router;

var express = require("express");
var router = express.Router();

const {tableStates} = require("../../../controllers")


router.get("/", async (req, res) => {
  try {
    const { idResto } = req;
    let tablesResto = await usersTables[idResto];
    res.status(200).send(tablesResto);
  } catch (err) {
    res.status(404).send(err);
  }
});


router.put("/", async (req,res) => {
	const {idResto} = req;
	const {idTable, state, idStaff} = req.body;
	let response = await tableStates(idTable, state, idResto, idStaff);
	res.status(response.status).json(response);
})

// tambien puede ir el post, delete, etc...
router.delete("/", async (req, res) => {
  try {
    const { idResto } = req;
    let tablesResto = await usersTables[idResto];


    const { tableId, productId } = req.body;
    const table = tablesResto.tables[tableId - 1];
    // console.log("TABLE", table);
    const currentProducts = table.currentOrder.products;
    const newProducts = currentProducts.find((p) => p.productId !== productId);
    // console.log("CURRENTORDER", newProducts);
    table.currentOrder.products = newProducts;
	const productDeleted=currentProducts.find((p) => p.productId === productId);
    res.send(`Product ${productDeleted.productName} was removed`);
  } catch (error) {
    res.status(404).send(error);
  }
});
module.exports = router;

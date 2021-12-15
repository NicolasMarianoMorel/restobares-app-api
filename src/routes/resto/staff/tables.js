var express = require("express");
var router = express.Router();
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
    res.send("producto eliminado");
  } catch (error) {
    res.status(404).send(error);
  }
});
module.exports = router;

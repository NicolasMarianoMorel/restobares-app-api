var express = require('express');
var router = express.Router();
const {Product} = require('../../../db');
const { getMenu } = require("../../../controllers");

// ruta relativa!
router.get("/", async (req, res) => {
  try {
    const { idResto } = req;
    const menu = await getMenu(idResto);
    if (!menu.length) {
      res.status(400).json({ error: "no se encotro el id" });
    } else {
      res.status(200).send(menu);
    }
  } catch (error) {
    res.status(404).send(err);
  }
});

router.put('/', async (req,res)=>{
	try{
		const { idResto } = req;
		const {product_Id} = req.body;add 
		const products = await getMenu(idResto)
    console.log("PRODUCTS", products);
		const select_product = products.find(p=>p.id===product_Id);
		if(select_product.available==true){
			await Product.update(
				{available: false},
				{where:{id:product_Id}}
				);
			return res.send(`Product ${select_product.name} was disabled`)
		}
		else if(select_product.available==false){
			await Product.update(
				{available: true},
				{where:{id:product_Id}}
			)
			return res.send(`Product ${select_product.name} was enabled`)
		}
	} catch (err){
		res.status(404).send(err);
	}

});

// tambien puede ir el post, delete, etc...

module.exports = router;



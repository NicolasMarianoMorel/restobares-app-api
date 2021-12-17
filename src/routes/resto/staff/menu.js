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
      res.status(400).json({ error: "id at restaurant is undefined" });
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
		const {product_Id} = req.body; 
		const products = await getMenu(idResto)
		if(products.length===0) return res.status(404).json({error:`There isn't products in this restaurant`});
		const select_product = products.find(p=>p.id===product_Id);
		if(select_product.available==true){
			await Product.update(
				{available: false},
				{where:{id:product_Id,
					UserId:idResto}}
				);
			return res.status(200).json({msg:`Product ${select_product.name} was disabled`})
		}
		else if(select_product.available==false){
			await Product.update(
				{available: true},
				{where:{id:product_Id,
					UserId:idResto}}
			)
			return res.status(200).json({msg:`Product ${select_product.name} was enabled`});
		}
		else{return res.status(404).json({error:`Couldn't change product availability`})}
	} catch (err){
		res.status(404).send(err);
	}

});

// tambien puede ir el post, delete, etc...

module.exports = router;



var express = require('express');
var router = express.Router();
const {Product, Label} = require('../../../db');

// Obtenemos la lógica correspondiente desde controllers/index.js
const { getMenu, putProduct, postMenu } = require('../../../controllers');

router.post('/',async (req,res) => {
	try{
		const {idResto, body}= req;
		// const{
		// 	name,
		// 	price,
		// 	detail,
		// 	image,
		// 	id_label,
		// 	CategoryId,
		// 	DiscountId,
		// } = req.body;
		// if(!name || !price){
		// 	return res.status(400).send('Product not registed');
		//   }
		// let new_product = await Product.create({
		// 	name,
		// 	price,
		// 	detail,
		// 	image,
		// 	UserId: idResto,
		// 	CategoryId,
		// 	DiscountId,
		// 	available:true,
		// });
		// // Se encuentran las diferentes etiuetas que llegan por body con las existentes en 
		// //la tabla label
		// const db_labels= await Label.findAll({
		// 	where: {id: id_label}
		// });
		// await new_product.addLabels(db_labels);
		// res.send(`Product ${name} created successfully`)
		res.status(200).json(await postMenu(idResto, body));
	} catch (err){
		res.status(404).send(err);
	}
});

router.get("/", async (req, res) => {
  try {
    const { idResto } = req;
    const menu = await getMenu(idResto);
    if (!menu.length) {
      res.status(400).json({ error: "id undefined" });
    } else {
      res.status(200).send(menu);
    }
  } catch (error) {
    res.status(404).send(err);
  }
});

router.delete("/:productId", async (req,res)=>{
	try{
		const {productId} = req.params;
		const {idResto} = req;
		const menu = await getMenu(idResto);
		let product = menu.find(p=>p.id==productId);
		if(!product) return res.status(404).json({error: "Product not exist"});	
		await Product.destroy({
		where: {id: productId,
			UserId: idResto}
		});
		res.status(200).json({msg: "Product Deleted"});	
	} catch (err){
		res.status(404).send(err);
	}
});

router.put("/:productId", async (req,res)=>{
	try {
		const {productId} = req.params;
		const {idResto, body} = req;
		if(body.length<1)return res.status(400).json({ error: "There is nothing to edit" });
		const menu = await getMenu(idResto);
		let product = menu.find(p=>p.id==productId);
		if(!product) return res.status(404).json({error: "Product not exist"});	
		await putProduct(idResto,productId,body);
		res.status(200).json({msg:`Product edited successfully`});
	} catch (err) {
		res.status(404).send(err);
	}
});

module.exports = router;
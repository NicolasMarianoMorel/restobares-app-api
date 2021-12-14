var express = require('express');
var router = express.Router();
const {Product, Label} = require('../../../db');

// Obtenemos la lógica correspondiente desde controllers/index.js
const { getMenu } = require('../../../controllers');

// ruta relativa!
router.post('/',async (req,res) => {
	try{
		const {idResto}= req;
		const{
			name,
			price,
			detail,
			image,
			id_label,
			CategoryId,
			DiscountId,
		} = req.body;
		if(!name || !price){
			return res.status(400).send('Product not registed');
		  }
		let new_product = await Product.create({
			name,
			price,
			detail,
			image,
			UserId: idResto,
			CategoryId,
			DiscountId,
			available:true,
		});
		// Se encuentran las diferentes etiuetas que llegan por body con las existentes en 
		//la tabla label
		const db_labels= await Label.findAll({
			where: {id: id_label}
		});
		await new_product.addLabels(db_labels);
		res.send(`Product ${name} created successfully`)
	} catch (err){
		res.status(404).send(err);
	}
});

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
    console.log(error);
  }
});

module.exports = router;
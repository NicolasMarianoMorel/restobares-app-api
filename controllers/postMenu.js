const {Product, Label} = require('../db');

module.exports = async(idResto, body)=>{
    const{
        name,
        price,
        detail,
        image,
        id_label,
        CategoryId,
        DiscountId,
    } = body; 
    if(!name || !price){
        return res.status(400).json({error:'Product not registed'});
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
    res.json({msg:`Product ${name} created successfully`});
}
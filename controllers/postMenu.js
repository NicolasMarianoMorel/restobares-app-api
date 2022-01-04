const { Product, Label } = require("../db");
const  uploadImage  = require("./uploadImage.js");
const fs = require("fs-extra");

module.exports = async (idResto, body) => {
  let { name, price, detail, image, id_label, CategoryId, DiscountId } = body;
	if (image.slice(0,5) === 'data:') {
		const responseUpload = await uploadImage(image);
		image = responseUpload.secure_url;
	}
  if (!name || !price) {
    return { error: "Product not registed" };
  }
  let new_product = await Product.create({
    name,
    price,
    detail,
    image,
    UserId: idResto,
    CategoryId,
    DiscountId,
    available: true,
  });
  //console.log(new_product);
  // Se encuentran las diferentes etiuetas que llegan por body con las existentes en
  //la tabla label
  const db_labels = await Label.findAll({
    where: { id: id_label },
  });
  await new_product.addLabels(db_labels);
  return { msg: `Product ${name} created successfully` };
};

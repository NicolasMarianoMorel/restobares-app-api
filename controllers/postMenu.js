const { Product, Label } = require("../db");
const  uploadImage  = require("./uploadImage.js");
const fs = require("fs-extra");

module.exports = async (idResto, body) => {
  const { name, price, detail, image, id_label, CategoryId, DiscountId } = body;
  const responseUpload = await uploadImage(image);
  if (!name || !price) {
    return { error: "Product not registed" };
  }
  let new_product = await Product.create({
    name,
    price,
    detail,
    image:responseUpload.secure_url,
    UserId: idResto,
    CategoryId,
    DiscountId,
    available: true,
  });
  console.log(new_product);
  // Se encuentran las diferentes etiuetas que llegan por body con las existentes en
  //la tabla label
  const db_labels = await Label.findAll({
    where: { id: id_label },
  });
  await new_product.addLabels(db_labels);
  return { msg: `Product ${name} created successfully` };
};

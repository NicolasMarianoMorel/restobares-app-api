const { Product } = require("../db");
const uploadImage = require("./uploadImage.js");
module.exports = async (idResto, productId, body) => {
  const { name, price, detail, image, available, DiscountId, CategoryId, id_label } =
    body;
  
  if (name) {
    await Product.update(
      { name: name },
      {
        where: {
          id: productId,
          UserId: idResto,
        },
      }
    );
  }
  if (price) {
    await Product.update(
      { price: price },
      {
        where: {
          id: productId,
          UserId: idResto,
        },
      }
    );
  }
  if (detail) {
    await Product.update(
      { detail: detail },
      {
        where: {
          id: productId,
          UserId: idResto,
        },
      }
    );
  }
  if (image) {
    const responseUpload = await uploadImage(image);
    await Product.update(
      { image: responseUpload.secure_url },
      {
        where: {
          id: productId,
          UserId: idResto,
        },
      }
    );
  }
  if (available === true || available === false) {
    await Product.update(
      { available: available },
      {
        where: {
          id: productId,
          UserId: idResto,
        },
      }
    );
  }
  if (DiscountId) {
    await Product.update(
      { DiscountId: DiscountId },
      {
        where: {
          id: productId,
          UserId: idResto,
        },
      }
    );
  }
  if (CategoryId) {
    await Product.update(
      { CategoryId: CategoryId },
      {
        where: {
          id: productId,
          UserId: idResto,
        },
      }
    );
  }
  if (id_label && id_label.length > 0) {
    await Product.update(
      { CategoryId: CategoryId },
      {
        where: {
          id: productId,
          UserId: idResto,
        },
      }
    );
  }
};

var { usersTables } = require("../cache.js");

const deleteOrdered = (idResto, body) => {
  const { tableId, productId, quantity } = body;
  const table = usersTables[idResto].tables[tableId - 1];
  const Products = table.ordered;
  const productEdit = Products.find((p) => p.productId === productId);
  if(!productEdit) throw new Error('The product is not in the order')
  const newOrdered = Products.filter((p) => p.productId !== productId);
  let priceToRemove=0
  if(productEdit.quantity>quantity){
    let unitPrice = productEdit.price/productEdit.quantity;
    productEdit.quantity-=quantity;
    productEdit.price=(unitPrice*productEdit.quantity).toFixed(2) * 1;
    priceToRemove = table.totalPrice - unitPrice*quantity;
    newOrdered.push(productEdit);
  }
  else{
    priceToRemove = table.totalPrice - productEdit.price;
  }
  table.ordered = newOrdered;
  table.totalPrice = priceToRemove.toFixed(2) * 1;
  return productEdit;

};

module.exports = deleteOrdered;

// const { tableId, productId } = body;
// const table = usersTables[idResto].tables[tableId - 1];
// const Products = table.ordered;
// const newOrdered = Products.find((p) => p.productId !== productId);
// table.ordered = newOrdered;
// return newProducts;

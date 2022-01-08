var { usersTables } = require("../cache.js");

const deleteOrdered = (idResto, body) => {
  const { tableId, productId, quantity } = body;
  const table = usersTables[idResto].tables[tableId - 1];
  const Products = table.ordered;
  const productEdit = Products.find((p) => p.productId === productId);
  if(!productEdit) throw new Error('The product is not in the order')
  const newOrdered = Products.filter((p) => p.productId !== productId);
  let priceToRemove=0
  if(productEdit.quantity<quantity){throw new Error('the quantity is higher than the quantity in the product ordered')}
  if(productEdit.quantity>quantity){
    let unitPrice = productEdit.price;
    productEdit.quantity-=quantity;
    priceToRemove = table.totalPrice - unitPrice*quantity;
    newOrdered.push(productEdit);
  }
  else{
    priceToRemove = table.totalPrice - productEdit.price*quantity;
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

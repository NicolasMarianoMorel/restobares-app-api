var { usersTables } = require("../cache.js");

const deleteOrdered = (idResto, body) => {
  const { tableId, productId } = body;
  const table = usersTables[idResto].tables[tableId - 1];
  const Products = table.ordered;
  const newOrdered = Products.filter((p) => p.productId !== productId);
  const productDeleted = Products.find((p) => p.productId === productId);
  const priceToRemove = table.totalPrice - productDeleted.price;
  table.ordered = newOrdered;
  table.totalPrice = priceToRemove;
 return productDeleted;
};

module.exports = deleteOrdered;

// const { tableId, productId } = body;
// const table = usersTables[idResto].tables[tableId - 1];
// const Products = table.ordered;
// const newOrdered = Products.find((p) => p.productId !== productId);
// table.ordered = newOrdered;
// return newProducts;

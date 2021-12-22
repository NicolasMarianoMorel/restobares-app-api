const mercadopago = require("mercadopago");
var { usersTables } = require("../cache");

mercadopago.configure({
  access_token:
    "TEST-8597162101756929-120903-244e52b38faa5e385b1394e5fec0f351-186091864",
});

const mercadoPago = async (idResto, idTable, state, tip) => {

  if (!state || !tip) throw new Error('You must specify state and tip.');
	usersTables[idResto].tables[idTable - 1].state = state;
	usersTables[idResto].tables[idTable - 1].tip = tip;
  let table = usersTables[idResto].tables[idTable - 1];
  let idStaff = table.idStaff;

  let ordered = table.ordered;
  let tipItem = tip/ordered.length;
  let items = ordered.map((p) => {
    return {
      title: p.productName,
      productId: p.productId,
      unit_price: (p.price / p.quantity) * 1 + (tipItem/p.quantity),
      quantity: p.quantity * 1,
      categoty_id: 'services',
      tip:tip,
    };
  });
  let preference = {
    items,
    binary_mode: true,
    statement_descriptor: "DingBell",
    expires: true,
    // expiration_date_from: new Date().toISOString(),
    // expiration_date_to: new Date().toISOString(),
    back_urls: {
      success: `http://localhost:3001/resto/${idResto}/table/${idTable}/mp/${idStaff}/${state}`,
      // failure: "http://localhost:8080/feedback",
      // pending: "http://localhost:8080/feedback",
    },
    auto_return: "approved",
  };

  const res = await mercadopago.preferences.create(preference);
  console.log(res.body.init_point);
  return res;
};
// mercadopago.preferences
//   .create(preference)
//   .then(function (response) {
//     res.redirect(response.body.init_point);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
module.exports = mercadoPago;
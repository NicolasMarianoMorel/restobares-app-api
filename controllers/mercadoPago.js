const mercadopago = require("mercadopago");
const { User } = require("../db");
var { usersTables } = require("../cache");

const mercadoPago = async (idResto, idTable, state, tip) => {
  const users = await User.findOne({
    where: {
      id: idResto,
    },
    attributes: ["title", "payment_mp"],
  });

  let descriptor = users.dataValues;


  mercadopago.configure({
    access_token:descriptor.payment_mp,
  });

  if (!state) throw new Error("You must specify state and tip.");
  usersTables[idResto].tables[idTable - 1].state = state;
  usersTables[idResto].tables[idTable - 1].tip = tip?tip:0;
  let table = usersTables[idResto].tables[idTable - 1];
  let idStaff = table.idStaff;
  let pointe = {
      productName: "tip",
      price: tip?tip:0,
      productId: 0,
      quantity: 1,
    }

  let ordered = [...table.ordered];
  ordered.push(pointe);
  console.log("ORDENES", ordered);
  // let tipItem = tip / ordered.length;
  let items = ordered.map((p) => {
    return {
      title: p.productName,
      productId: p.productId,
      // unit_price: (p.price / p.quantity) * 1 + tipItem / p.quantity,
      // unit_price: ((p.price / p.quantity) * 1),
      unit_price: p.price, /* / p.quantity, */
      quantity: p.quantity * 1,
      categoty_id: "services",
    };
  });
  let preference = {
    items,
    binary_mode: true,
    statement_descriptor: descriptor.title,
    expires: true,
    // expiration_date_from: new Date().toISOString(),
    // expiration_date_to: new Date().toISOString(),
    back_urls: {
      success: `https://restobares-app-api.herokuapp.com/resto/${idResto}/table/${idTable}/mp/${idStaff}/${state}`,
      failure: `https://restobares-app.web.app/resto/${idResto}/table/${idTable}/bill`,
      // pending: "http://localhost:8080/feedback",
    },
    auto_return: "approved",
  };

  const res = await mercadopago.preferences.create(preference);
  console.log(res.body.init_point);
  return res;
};

module.exports = mercadoPago;

const mercadopago = require("mercadopago");


mercadopago.configure({
  access_token:
    "TEST-8597162101756929-120903-244e52b38faa5e385b1394e5fec0f351-186091864",
});

  // Crea un objeto de preferencia
const mercadoPago = ()=>{
 
}
  let preference = {
    items: [
      {
        title: req.body.title,
        unit_price: parseInt(req.body.price),
        quantity: 1,
      },
    ],
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.redirect(response.body.init_point);
    })
    .catch(function (error) {
      console.log(error);
    });


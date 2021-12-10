require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASS, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/restobares`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// ---Variables globales---
// Lista de usuarios con sus mesas
var usersTables = {};
// Lista de usuarios con sus órdenes
/*
	Estructura:
	usersTables {
		[id]: {
			tables: [
				{
					tableId,
					state,
					ordered: [
						{ productId, quantity },
						... más platillos
					],
					totalPrice,
					currentOrder: {
						time,
						products: [
							{ productId, quantity },
							... más platillos
						],
						comments,
					}
				},
				... más mesas 
			],
		},
		... más restaurantes
	}
	Ejemplo:
	usersTables {
		['3idef30002a323440001']: {
			tables: [
				{
					tableId: 1,
					state: 'waiting', // free, busy, waiting, pay_cash, pay_online
					ordered: [
						{ productId: 3456, quantity: 1},
						{ productId:  930, quantity: 2},
						{ productId:   23, quantity: 2},
						{ productId: 3560, quantity: 4},
						... mas productos
					],
					totalPrice: 550.90,
					currentOrder: {
						time: '2022-01-07_23:45:05.4677',
						products: [
							{ productId: 22, quantity: 2},
							... mas productos
						],
						comments: 'las papas sin sal porfa'
					},
				},
				... más mesas
			],
		},
		... más restaurantes
	}
*/

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { User, Feedback, Product, Label, SoldProduct, DayRevenue, Discount, Category } =
  sequelize.models;

// Aca vendrian las relaciones

//unos a muchos -->el restaurante puede tener muchos feedbaks

User.hasMany(Feedback);
// agregamos una clave ID_user  la tabla de feedbacks;
Feedback.belongsTo(User);

//uno a muchos --> el restaurante puede tener muchos platillos vendidos
User.hasMany(SoldProduct);
// agregamos una clave ID_user  la tabla de platillos
SoldProduct.belongsTo(User);

//uno a muchos --> el restaurante puede tener muchos registros diarios de venta
User.hasMany(DayRevenue);
// agregamos una clave ID_user  la tabla de platillos
DayRevenue.belongsTo(User);

//uno a muchos -->una promocion tiene muchos platillos
Discount.hasMany(Product);
//agregamos la clave ID_promociones a la tabla de platillos
Product.belongsTo(Discount);

//uno a muchos --> una categoria tiene muchos platillos
Category.hasMany(Product);
//agregamos la clave ID_categorias a la tabla de platillos
Product.belongsTo(Category);

//uno a muchos --> el restaurante tiene muchos platillos
User.hasMany(Product);
Product.belongsTo(User);

//muchos a muchos
Product.belongsToMany(Label, { through: "Product_Label" });
Label.belongsToMany(Product, { through: "Product_Label" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
  usersTables, //referencia de las mesas de los usuarios.
};

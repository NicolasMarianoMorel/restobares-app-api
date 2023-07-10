require("dotenv").config();
var pg = require('pg');
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASS, DB_HOST, DB_NAME, PORT } = process.env;
pg.defaults.ssl = true;

const sequelize = new Sequelize(
   {
    database: DB_NAME,
  username: DB_USER,
  password: DB_PASS,
  host: DB_HOST,
  port: PORT,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false // This line will fix new error
    }
  },
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  },
);
const basename = path.basename(__filename);

const modelDefiners = [];

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
const {
  User,
  Feedback,
  Product,
  Label,
  SoldProduct,
  DayRevenue,
  Discount,
  Category,
  SoldOrder,
} = sequelize.models;

// Aca vendrian las relaciones

//unos a muchos -->el restaurante puede tener muchos feedbaks

User.hasMany(Feedback);
// agregamos una clave ID_user  la tabla de feedbacks;
Feedback.belongsTo(User);

//uno a muchos --> el restaurante puede tener muchos platillos vendidos

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

//uno a muchos --> User tiene muchas SoldOrder
User.hasMany(SoldOrder);
//agregamos la clave UserId a la talba de SoldOrder;
SoldOrder.belongsTo(User);


//uno a muchos --> SoldOrder tiene muchos SoldProduct
SoldOrder.hasMany(SoldProduct);
//agregamos la clave SoldOrder a la talba de SoldProduct
SoldProduct.belongsTo(SoldOrder);




//muchos a muchos
Product.belongsToMany(Label, { through: "Product_Label" });
Label.belongsToMany(Product, { through: "Product_Label" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};

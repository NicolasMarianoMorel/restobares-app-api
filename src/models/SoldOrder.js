const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "SoldOrder",
    {
      idStaff: {
        type: DataTypes.INTEGER,
        allowNull: false,
        allowEmpty: false,
      },
      totalPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      tip: {
        type: DataTypes.DECIMAL(10, 2),
      },
      date: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: new Date().toLocaleString(),
      },
      idTable: {
        type: DataTypes.INTEGER,
        allowNull: false,
        allowEmpty: false,
      },
      paymentMethod: {
        type: DataTypes.STRING,
        allowNull: false,
        allowEmpty: false,
      },
    },
    {
      timestamps: false,
    }
  );
};

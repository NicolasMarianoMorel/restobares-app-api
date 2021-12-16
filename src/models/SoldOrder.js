const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "SoldOrder",
    {
      Staff_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        allowEmpty: false,
      },
      totalPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      Tip: {
        type: DataTypes.DECIMAL(10, 2),
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      Table_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        allowEmpty: false,
      },
      PaymentMethod: {
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

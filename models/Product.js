const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Product",
    {
      name: {
        type: DataTypes.STRING(64),
        allowNull: false,
        allowEmpty: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        get() {
          return this.getDataValue("price") * 1;
        },
      },
      detail: {
        type: DataTypes.STRING(1024),
      },
      image: {
        type: DataTypes.STRING(1024),
        //allowNull: false,
        //allowEmpty: false,
      },
      available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        allowEmpty: false,
      },
    },
    {
      timestamps: false,
    }
  );
};

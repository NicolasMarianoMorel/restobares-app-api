const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
    "Feedback",
    {
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // defaultValue: 0,
        // validate: {
        //   min: 0,
        //   max: 5,
        // },
      },
    },
    {
      timestamps: false
    }
  );
}


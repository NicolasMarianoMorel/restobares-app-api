const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        allowEmpty: false,
      },
      passAdmin: {
        type: DataTypes.STRING,
        allowNull: false,
        allowEmpty: false,
      },
      passStaff: {
        type: DataTypes.STRING,
        allowNull: false,
        allowEmpty: false,
      },
      tables: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(64),
        allowNull: false,
        allowEmpty: false,
      },
			logo: {
				type: DataTypes.STRING, //(?)
			},
			theme: {
				type: DataTypes.INTEGER, 
			},
      payment_mp:{
        type:DataTypes.STRING,
      }
    },
    {
      timestamps: false,
    }
  );
}

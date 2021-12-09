const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		"SoldProduct",
		{
			name: {
				type: DataTypes.STRING(64),
				allowNull: false,
				allowEmpty: false,
			},
			totalPrice: {
				type: DataTypes.DECIMAL(10,2),
				allowNull: false,
			},
			quantity: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			date: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: new Date()
			},
		},
		{
			timestamps: false,
		}
	);
}



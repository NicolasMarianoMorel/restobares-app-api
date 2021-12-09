const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		"Discount",
		{
			percentage: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			factor: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			max_discounts: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			timestamps: false,
		}
	);
}

const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		"DayRevenue",
		{
			totalPrice: {
				type: DataTypes.DECIMAL(10,2),
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




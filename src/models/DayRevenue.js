const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	let d = new Date();     
    let today = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate();

	sequelize.define(
		"DayRevenue",
		{
			totalPrice: {
				type: DataTypes.DECIMAL(10,2),
				allowNull: false,
			},
			date: {
				type: DataTypes.STRING,
				allowNull: false,
				defaultValue: today
			},
		},
		{
			timestamps: false,
		}
	);
}




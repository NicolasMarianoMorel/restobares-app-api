const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	let d = new Date();
	let today = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
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
<<<<<<< HEAD
				type: DataTypes.STRING,
				allowNull: false,
				defaultValue: today
=======
				type: DataTypes.STRING(32),
				allowNull: false,
				defaultValue: today 
>>>>>>> 57c1d79aef7ce33fb54ee633e9ea166a21453fe6
			},
		},
		{
			timestamps: false,
		}
	);
}




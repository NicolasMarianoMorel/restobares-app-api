const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		"Category",
		{
			name: {
				type: DataTypes.STRING(32),
				allowNull: false,
				allowEmpty: false,
			},
		},
		{
			timestamps: false,
		}
	);
}


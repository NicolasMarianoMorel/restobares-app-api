// getOrders controller
var { usersTables } = require('../db.js');

module.exports = function(idResto, idTable) {
	// Va a buscar al usuario idResto a través del numero de mesa de idTable
	// Le restamos 1 porque idTable arranca de 1 y la posición del array
	// arranca en 0.
	return usersTables[idResto].tables[idTable-1];
}

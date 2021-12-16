// getOrdersStaff controller
var { usersTables } = require('../cache.js');

module.exports = function(idResto) {
	// Va a buscar al usuario idResto a través del numero de mesa de idTable
	// Le restamos 1 porque idTable arranca de 1 y la posición del array
	// arranca en 0.
    let tables = usersTables[idResto].tables
    
//agregar logica para q no devuelva las mesas q no tienen ordenes
    let currentsOrders = tables.filter(el => el.currentOrder.time !== "").map(el => {
        return {
            idTable: el.tableId,
            currentOrder: el.currentOrder
        }
    })
    return currentsOrders
}
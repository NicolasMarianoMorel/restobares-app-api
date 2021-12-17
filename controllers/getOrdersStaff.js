// getOrdersStaff controller
var { usersTables } = require('../cache.js');

module.exports = function(idResto) {
 let tables = usersTables[idResto].tables
    
//solo mapeo las mesas que tengan algun producto en su currentOrder
    let currentsOrders = tables.filter(el => el.currentOrder.time !== "").map(el => {
        return {
            idTable: el.tableId,
            currentOrder: el.currentOrder
        }
    })
    return currentsOrders
}
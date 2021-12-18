// sendPayment
const {usersTables} = require("../cache.js");

module.exports = function (idResto,idTable,state,tip) {
	// Change the state of the table to the one recieved through the body
	usersTables[idResto].tables[idTable - 1].state = state;
	usersTables[idResto].tables[idTable - 1].tip = tip;
	return { msg: `The table ${idTable} requested the payment confirmation (${state})` }
}

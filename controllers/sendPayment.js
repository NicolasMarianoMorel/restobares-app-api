// sendPayment
const {usersTables} = require("../cache.js");

module.exports = function (idResto,idTable,state,tip) {
	// Change the state of the table to the one recieved through the body
	if (!state) throw new Error('You must specify a state.');
	if (usersTables[idResto].tables[idTable - 1].state !== "eating")
		throw new Error('You have a pending order. Please wait until it is delivered.');
	usersTables[idResto].tables[idTable - 1].state = state;
	usersTables[idResto].tables[idTable - 1].tip = tip || 0;
	return { msg: `The table ${idTable} requested the payment confirmation (${state})` }
}

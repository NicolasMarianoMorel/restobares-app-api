const {usersTables} = require("../cache.js");

module.exports = function (idResto,idTable,state) {
	// Change the state of the table to the one recieved through the body
    let table = usersTables[idResto].tables[idTable - 1];

	if (!state) throw new Error('You must specify a table state');

	if (table.state !== "free") throw new Error('The table must be set as free to become filled');
    
    table.state = "filled";
    return { msg: "Table Filled", status: 200 }
        
    
}

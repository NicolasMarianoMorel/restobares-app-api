const {usersTables} = require("../cache.js");
const {DayRevenue} = require("../db.js")
//categories controller

module.exports = async function (idTable, state, idResto) {
     let table = usersTables[idResto].tables[idTable - 1];
    //changing the state of the table to eating
    
    if (state === "eating") {
        if(table.state === "waiting") {
        table.state = "eating";
    // adding the price of each product to the totalPrice
       table.totalPrice += table.currentOrder.products.reduce((a, e) => {
            return a + e.price
        }, 0)
    // change the location of the products to ordererd
    table.ordered = [...table.ordered, ...table.currentOrder.products];
    //deleting the current order product
    table.currentOrder =  {
        time: '',
        products: [],
        comments: '',
    }
    return {msg: "Order delivered"}
    }
    else {
        return {msg: "No orders availables"}
    }
        
    }
    if (state === "pay_cash") {

    }
};
//tableStates controller

const {usersTables} = require("../cache.js");
<<<<<<< HEAD
const {DayRevenue} = require("../db.js");
const {Op} = require("sequelize");
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
        if(/* table.state === "pay_cash */ true) {
            let d = new Date();
            
            let today = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate();
           try {
               let revenue = await DayRevenue.findOne({
                   where: {
                       date: {
                         [Op.iLike] : `%${today}%`
                       }
                   }
                   //agregar relacion con user
               })
             
           }
           catch(error) {
               console.log(error)
           }
            
            return {msg: "Successful payment"}
        }
        else {
            return {msg: "There's no cash payment request"}
        }
    }

};
=======
const {DayRevenue} = require("../db.js")

module.exports = async function (idTable, state, idResto) {
	// Abreviate the table direction
	let table = usersTables[idResto].tables[idTable - 1];
	//changing the state of the table to eating
	if (state === "eating") {
		if(table.state === "waiting") {
			table.state = "eating";
			// adding the price of each product to the totalPrice
			table.totalPrice += table.currentOrder.products.reduce((a, e) => {
				return a + e.price
			}, 0)
			// change the location of the products to ordered
			// First we check if we find the productId already
			// to prevent product repeating.
			table.currentOrder.products.forEach( (e) => {
				let prdct = table.ordered.find( (p) => p.productId === e.productId )
				if (prdct) {
					prdct.price += e.price;
					prdct.quantity += e.quantity;
				}
				else {
					table.ordered.push(e);
				}
			} );
			// table.ordered = [...table.ordered, ...table.currentOrder.products];
			//deleting the current order product
			table.currentOrder = {
				time: '',
				products: [],
				comments: '',
			}
			return {msg: "Order delivered.", status: 200}
		}
		else {
			return {msg: `The table ${idTable} isn't requesting an order.`, status: 400}
		}
	}
	if (state === "pay_cash") {
		if (table.state === "pay_cash") {
			// Get the actual date
			let d = new Date();
			let today = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
			// Try to find a register for today.
			// otherwise, create a register for today.
			let [dayRev,created] = await DayRevenue.findOrCreate({
				where: {
					UserId: idResto,
					date: today,
				},
				defaults: {
					totalPrice: 0
				}
			});
			// Test it
			// console.log(`DAYREV for ${today}:`,dayRev);
			// Add the price of the order to the day revenue.
			await dayRev.update({ totalPrice: dayRev.totalPrice*1 + table.totalPrice });
			console.log(`DAYREV for ${today}: $`, dayRev.totalPrice);
			// Reset the table
			table = {
				tableId: idTable,  //xD
				state: 'free', // free, eating, waiting, pay_cash, pay_online
				ordered: [], // already ordered products
				totalPrice: 0,
				currentOrder: { // order waiting to be served
					time: '',
					products: [],
					comments: '',
				}
			}
			return {msg: "Cash Payment Confirmed.", status: 200}
		}
		else {
			return {msg: "The table didn't request the bill.", status: 400}
		}
	}
};
>>>>>>> 57c1d79aef7ce33fb54ee633e9ea166a21453fe6

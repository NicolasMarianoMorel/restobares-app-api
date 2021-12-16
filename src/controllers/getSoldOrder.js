const {usersTables} = require("../cache.js");
const { SoldOrder, SoldProduct } = require("../db.js");

module.exports = async(idResto, filter)=>{

    if(filter==="day"){
        let Orders = await SoldOrder.findAll({
            where:{
                UserId: idResto,
                date: new Date().toLocaleString(),
            }
        });
    }
}
//Controller getSoldOrder
const { SoldOrder, SoldProduct } = require("../db.js");
const {Op} = require('sequelize');

module.exports = async(idResto, filter)=>{
    console.log("IDRESTO", idResto);
    console.log("FILTER", filter);
    if(filter==="Day"){
        let day= new Date().toLocaleDateString();
        let Orders = await SoldOrder.findAll({
            where:{
                UserId: idResto,
                date:{
                    [Op.iLike]: `${day}%`
                }
            },
            include: {
                model: SoldProduct,
                attributes: ['productId', 'name', 'price', 'quantity']
            }
        });
        // let DateswithNull = Orders.map(o=>{
        //     let Date = o.dataValues.date
        //     if(Date.includes(day)) return o.dataValues;
        // });
        // let Dates = DateswithNull.filter(d=>d!=null);
        return Orders;
    }
    // if(filter==="Week"){
        
    //     let Orders = await SoldOrder.findAll({
    //         where:{
    //             UserId: idResto,
    //             date: new Date().toLocaleString(),
    //         },
    //         include: {
    //             model: SoldProduct,
    //             attributes: ['productId', 'name', 'price', 'quantity']
    //         }
    //     });
    // }
    if(filter==="Month"){
        let month= new Date().toLocaleDateString().slice(3);
        let Orders = await SoldOrder.findAll({
            where:{
                UserId: idResto,
                date:{
                    [Op.iLike]: `%${month}%`
                }
            },
            include: {
                model: SoldProduct,
                attributes: ['productId', 'name', 'price', 'quantity']
            }
        });
        return Orders;
    }
}
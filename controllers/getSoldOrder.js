//Controller getSoldOrder
const { SoldOrder, SoldProduct } = require("../db.js");
const {Op} = require('sequelize');

module.exports = async(idResto, filterTime)=>{
    if(filterTime==="Day"){
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
        return Orders.map(o=>o.dataValues);
    }
    if(filterTime==="Week"){
        let Ordering = [];
        for(i=0; i<7; i++){
            let numberDay = new Date();
            numberDay.setDate(numberDay.getDate()-i)
            let date=numberDay.toLocaleDateString();
            let Orders = await SoldOrder.findAll({
                where:{
                    UserId: idResto,
                    date:{
                        [Op.iLike]: `${date}%`
                    }
                },
                include: {
                    model: SoldProduct,
                    attributes: ['productId', 'name', 'price', 'quantity']
                }
            });
            if(Orders.length!==0){
            Ordering.push(Orders.map(o=>o.dataValues));}
            }
            return  Ordering.flat();
        }
    //     function getWeekNumber(d) {
    //         // Copy date so don't modify original
    //         d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    //         // Set to nearest Thursday: current date + 4 - current day number
    //         // Make Sunday's day number 7
    //         d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    //         // Get first day of year
    //         var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    //         // Calculate full weeks to nearest Thursday
    //         var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    //         // Return array of year and week number
    //         return [d.getUTCFullYear(), weekNo];
    //     }
    //     let numberDay = new Date().toLocaleString();
    //     let numberWeek = getWeekNumber(new Date(numberDay));
    //     console.log(numberWeek)
    //     let month= new Date().toLocaleDateString().slice(3);

    //     let Orders = await SoldOrder.findAll({
    //         where:{
    //             UserId: idResto,
    //             date:{
    //                 [Op.iLike]: `%${month}%`
    //             }
    //         },
    //         include: {
    //             model: SoldProduct,
    //             attributes: ['productId', 'name', 'price', 'quantity']
    //         }
    //     });
        
    // }

    if(filterTime==="Month"){
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
        return Orders.map(o=>o.dataValues);
    }
}
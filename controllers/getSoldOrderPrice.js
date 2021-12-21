module.exports = async (Orders, filterPrice)=>{
    console.log("PRECIOo",filterPrice);
    if(filterPrice==="Descendent"){
        let descendentTotalPrice = Orders.map(o=>o.totalPrice).sort((mn,mx)=>mn-mx);
        let descedentOrders = descendentTotalPrice.map(price=>{
            let arr = [];
            Orders.find(order=>{if(order.totalPrice===price) arr.push(order)})
            return arr;
        });
        return descedentOrders.flat();
    }
    else if (filterPrice==="Ascendent"){
        let ascendentTotalPrice = Orders.map(o=>o.totalPrice).sort((mn,mx)=>mx-mn);
        let ascedentOrders = ascendentTotalPrice.map(price=>{
            let arr = [];
            Orders.find(order=>{if(order.totalPrice===price) arr.push(order)})
            return arr;
        });
        return ascedentOrders.flat();
    }
}
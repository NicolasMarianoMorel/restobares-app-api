module.exports = async (Orders, filterPrice)=>{
    if(filterPrice==="Descendent"){
        let descendentTotalPriceR = Orders.map(o=>o.totalPrice).sort((mn,mx)=>mn-mx);
        let descendentTotalPrice = descendentTotalPriceR.filter((item,index)=>{
            return descendentTotalPriceR.indexOf(item)===index;
        });
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
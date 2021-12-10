// const axios = require('axios');

//Se trae todos los productos que ofrece en el menu el restaurante
const {Product, Label} = require('../db');

const menu = async(idresto)=>{
    let allproducts=Product.findAll({include:{
        model: Label,
        attributes: ['id'],
    },
    where:{
        UserId: idresto
    }
    });
    return allproducts;
}

module.exports = {
    menu
}
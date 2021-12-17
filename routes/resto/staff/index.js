var express = require('express');
var router = express.Router();

// Import routers
// const { validateToken } = require('../../../controllers');
const tables = require('./tables.js');
const orders = require('./orders.js');
const menu = require('./menu.js');
// ...

// Configurar routers 
router.use('/menu',(req,res,next)=>{next()} ,menu); 
// router.use('/', validateToken);
router.use('/tables',(req, res, next)=>{next()} ,tables);
router.use('/orders',(req, res, next)=>{next()}, orders);
// ...

module.exports = router;

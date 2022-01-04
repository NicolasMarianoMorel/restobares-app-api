var express = require('express');
var router = express.Router();

// Import routers
const landing = require('./landing.js');
const menu = require('./menu.js');
const order = require('./order.js');
const feedback = require('./feedback.js');
const payment = require('./payment.js');
const mp = require('./mp.js')
const filledTable = require("./filledTable.js")
// ...

// Configurar routers 
router.use('/:idTable/',(req,res,next) => {
    const {idTable} = req.params;
    req.idTable = idTable;
    next();
}, landing);
router.use('/:idTable/menu',(req,res,next) => {
    const {idTable} = req.params;
    req.idTable = idTable;
    next();
}, menu);
router.use('/:idTable/order',(req,res,next) => {
    const {idTable} = req.params;
    req.idTable = idTable;
    next();
}, order);
router.use('/:idTable/feedback',(req,res,next) => {
    const {idTable} = req.params;
    req.idTable = idTable;
    next();
}, feedback);
router.use('/:idTable/payment',(req,res,next) => {
    const {idTable} = req.params;
    req.idTable = idTable;
    next();
}, payment);
router.use('/:idTable/mp',(req,res,next) => {
    const {idTable} = req.params;
    req.idTable = idTable;
    next();
}, mp);
router.use('/:idTable/filledTable',(req,res,next) => {
    const {idTable} = req.params;
    req.idTable = idTable;
    next();
}, filledTable);

// ...

module.exports = router;

var express = require('express');
var router = express.Router();

// Import routers
const landing = require('./landing.js');
const menu = require('./menu.js');
const bill = require('./bill.js');
const feedback = require('./feedback.js');
const payment = require('./payment.js');
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
router.use('/:idTable/bill',(req,res,next) => {
    const {idTable} = req.params;
    req.idTable = idTable;
    next();
}, bill);
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
// ...

module.exports = router;

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
router.use('/:idTable/', landing);
router.use('/:idTable/menu', menu);
router.use('/:idTable/bill', bill);
router.use('/:idTable/feedback', feedback);
router.use('/:idTable/payment', payment);
// ...

module.exports = router;

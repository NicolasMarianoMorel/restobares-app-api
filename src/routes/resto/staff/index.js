var express = require('express');
var router = express.Router();

// Import routers
// const { validateToken } = require('../../../controllers');
const tables = require('./tables.js');
const orders = require('./orders.js');
const menu = require('./menu.js');
// ...

// Configurar routers 
// router.use('/', validateToken);
router.use('/tables', tables);
router.use('/orders', orders);
router.use('/menu', menu);
// ...

module.exports = router;

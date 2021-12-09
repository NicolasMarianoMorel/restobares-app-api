var express = require('express');
var router = express.Router();

// Import routers
const admin = require('./admin');
const staff = require('./staff');
const table = require('./table');
// ...

// Configurar routers 
router.use('/admin', admin);
router.use('/staff', staff);
router.use('/table', table);
// ...

module.exports = router;

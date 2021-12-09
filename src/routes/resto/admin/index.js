var express = require('express');
var router = express.Router();

// Import routers
const { validateToken } = require('../../../controllers');
const account = require('./account.js');
const menu = require('./menu.js');
const tables = require('./tables.js');
const feedback = require('./feedback.js');
const revenue = require('./revenue.js');
// ...

// Configurar routers 
router.use('/', validateToken);
router.use('/account', account);
router.use('/menu', menu);
router.use('/tables', table);
router.use('/feedback', feedback);
router.use('/revenue', revenue);
// ...


module.exports = router;

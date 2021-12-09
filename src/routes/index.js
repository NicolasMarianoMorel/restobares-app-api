var express = require('express');
var router = express.Router();

// Import routers
const register = require('./register.js');
const confirmation = require('./confirmation.js');
const login = require('./login.js');
const resto = require('./resto.js');
// ...

// Configurar routers 
router.use('/register', postRegister);
router.use('/confirmation', confirmation);
router.use('/login', login);
router.use('/:idResto', resto);
// ...

module.exports = router;

// /dev/
var express = require('express');
var router = express.Router();

// Import routers
const clear = require('./clear.js');
const users = require('./users.js');
// ...

// Configurar routers 
router.use('/clear',(req,res,next) => {
     next();
} , clear);
router.use('/users',users);
// ...

module.exports = router;

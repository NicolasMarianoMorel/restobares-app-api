// /dev/
var express = require('express');
var router = express.Router();

// Import routers
const clear = require('./clear.js');
// ...

// Configurar routers 
router.use('/clear',(req,res,next) => {
     next();
} , clear);
// ...

module.exports = router;

var express = require('express');
var router = express.Router();

// Import routers
const admin = require('./admin');
const staff = require('./staff');
const table = require('./table');
const user = require("./user.js")
// ...

// Configurar routers 
router.use('/admin',(req,res,next) => {
     next();
} , admin);
router.use('/staff',(req,res,next) => {
      next();
}, staff);
router.use('/table', (req,res,next) => {
      next();
}, table);
router.use("/user", (req,res,next) => {
     next();
}, user);
// ...

module.exports = router;

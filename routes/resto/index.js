var express = require('express');
var router = express.Router();
const {validateToken} = require("../../controllers")

// Import routers
const admin = require('./admin');
const staff = require('./staff');
const table = require('./table');
const user = require("./user.js")
// ...

// Configurar routers 
router.use('/admin',(req,res,next) => {
      validateToken(req,res,next, "admin")
} , admin);
router.use('/staff',(req,res,next) => {
      validateToken(req,res,next, "staff")
}, staff);
router.use('/table', (req,res,next) => {
      next();
}, table);
router.use("/user", (req,res,next) => {
     next();
}, user);
// ...

module.exports = router;

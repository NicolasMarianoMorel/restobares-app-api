var express = require('express');
var router = express.Router();

// Import routers
const register = require('./register.js');
const confirmation = require('./confirmation.js');
const login = require('./login.js');
const resto = require('./resto');
const categories = require("./categories.js");
const labels = require("./labels.js");
const discounts = require("./discounts.js");
// ...

// Configurar routers 
router.use('/register', register);
router.use('/confirmation', confirmation);
router.use('/login', login);
router.use("/categories", categories)
router.use("/labels", labels)
router.use("/discounts", discounts)
router.use('/resto/:idResto', (req,res,next) => {
    const {idResto} = req.params;
    req.idResto = idResto;
    next();
} , resto);

// ...
router.get("/", (req,res) => {
    
	res.send(`toma por curioso`)
})
module.exports = router;

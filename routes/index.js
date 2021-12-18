var express = require('express');
var router = express.Router();

// Import routers
// DEV routes
const dev = require('./dev');
//
const register = require('./register.js');
const confirmation = require('./confirmation.js');
const login = require('./login.js');
const resto = require('./resto');
const categories = require("./categories.js");
const labels = require("./labels.js");
const discounts = require("./discounts.js");
// ...

// Configurar routers 
// Dev routes
router.use('/dev', dev);
// Normal Rñoutes
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
router.get("/", async (req,res) => {
	//console.log(req.usersTables);
	res.send("Dingbell API - It's alive!");
});

module.exports = router;

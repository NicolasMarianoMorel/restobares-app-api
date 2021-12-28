var express = require('express');
var router = express.Router();

// Import routers
// DEV routes
const dev = require('./dev');
//
const register = require('./register.js');
const confirmation = require('./confirmation.js');
const login = require('./login.js');
const logout = require('./logout.js');
const recover = require('./recover.js');
const resto = require('./resto');
const categories = require("./categories.js");
const labels = require("./labels.js");
const discounts = require("./discounts.js");
// ...

// Configurar routers 
// Dev routes
router.use('/dev', dev);
// Normal Routes
router.use('/register', register);
router.use('/confirmation', confirmation);
router.use('/login', login);
router.use('/logout', logout);
router.use('/recover', recover);
router.use("/categories", categories)
router.use("/labels", labels)
router.use("/discounts", discounts)
router.use('/resto/:idResto', (req,res,next) => {
    const {idResto} = req.params;
    req.idResto = idResto;
    next();
} , resto);
//
// Error handling
//router.use('*', (err, req, res) => {
//	console.error(err.stack);
//	res.status(500).send(
//		"The only BOOM I'll ever know is the BOOM from this server."
//	);
//});

// ...
router.get("/", async (req,res) => {
	//console.log(req.usersTables);
	res.send("Dingbell API - It's alive!");
});

// Default route 
router.get('*', (req,res) => { res.send("Non existent route.") });


module.exports = router;

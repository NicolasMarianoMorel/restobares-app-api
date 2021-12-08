var express = require('express');
var router = express.Router();

// Import routers
const getUsers = require('./getUsers.js');
// ...

// Configurar routers 
router.use('/users', getUsers);
// ...

/* GET home page.  Example*/
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send('Hello Restobar!');
});

module.exports = router;

var express = require('express');
var router = express.Router();



//NO ES NECESARIOOOOO
//STAFF YA LA TIENE

router.get('/',async (req,res) => {
	res.send("Buscar mesas desde /resto/:idResto/staff/tables");
});


module.exports = router;



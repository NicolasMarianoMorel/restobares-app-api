var express = require('express');
var router = express.Router();
const {menu} = require('../../../controllers/menu.js');

router.get('/',async (req,res) => {
	try{
		const {idResto, idTable} = req;
		const menu_resto = await menu(idResto);
		// res.send(`Este es el menu del restaurante : ${idResto}, para la Mesa: ${idTable}`);
		return menu_resto.length>0?res.send(menu_resto):res.send(`<h1>Restaurant haven't a menu</h1>`);
	} catch (err){
		res.sendStatus(404);
	}
});
module.exports = router;



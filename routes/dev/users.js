// /dev/users
var express = require("express");
var router = express.Router();
const { User } = require('../../db.js');

const { usersTables } = require("../../cache.js");

router.get("/", async (req, res) => {
	try {
		let users = await User.findAll({
			attributes: ['id','title']
		});
		return res.status(200).json(users);
	} catch (err) {
		return res.status(400).json({
			msg: 'There was a problem in the database',
			error: err
		});
	}
});

module.exports = router;

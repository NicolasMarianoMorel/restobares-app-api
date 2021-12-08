// getUsers controller

// Op for comparing data
const { Op } = require('sequelize'); 
// Import the required models
const { User } = require('../db.js');

module.exports = async function(name) {
	// Search games in the DB.
	let results = await User.findAll(
		/*
		{
		// Searches coincidences by substrings, case insensitive.
		where: name ? {
			name: {
				[Op.iLike]: `%${name}%`
			}
		} : {},
		// Include only attributes we need.
		// attributes: ['id','name','rating'],
		// Also include some things.
		include: {
			model: Genre,
			as: 'genres',
			attributes: ['id','name'],
			through: {attributes: []},
		},
		}
	*/
	);
	return results;
};


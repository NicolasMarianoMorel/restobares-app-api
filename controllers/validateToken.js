const jwt = require("jsonwebtoken");
const { loggedUsers } = require("../cache.js")

// validateToken controller


module.exports = async function validateToken(req, res, next, route) {
	const bearerHeader = req.headers["authorization"]
try {
	
	if (!bearerHeader || !bearerHeader.length) throw new Error ("Access Forbidden")
	const token = bearerHeader.split(" ")[1]
	const role = loggedUsers[token]

	if(route === "staff") {
		if (role === "staff" || role === "admin") {
			next()
		}
		else throw new Error ("Access Forbidden")
	}
	console.log("despues del 1 if")
	if(route === "admin") {
		if(role === "admin") {
			next()
		}
		else throw new Error ("Access Forbidden, you have to be Admin to manage this page")
	}
	
	
} catch (err) {
	console.error(err.stack);
	res.status(403).json({msg: "An error has ocurred", error: err.message})
}
};


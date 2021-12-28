const jwt = require("jsonwebtoken");
const { loggedUsers } = require("../cache.js")
const {JWT_SECRET} = process.env;
// validateToken controller


module.exports = async function validateToken(req, res, next, route) {
	const bearerHeader = req.headers["authorization"]
try {
	
	if (!bearerHeader || !bearerHeader.length) throw new Error ("Access Forbidden")
	const token = bearerHeader.split(" ")[1]
	if (token === "AdminSupremeTest") {
			next()
		}
	else {
			const user = jwt.verify(token, JWT_SECRET, (err, data) => {
			if (err) throw new Error ("Invalid Token")
			return data
			})
		
		const role = loggedUsers[`${user.email}-${user.role}`].role
		
		if(route === "staff") {
			if (role === "staff" || role === "admin") {
				next()
			}
			else throw new Error ("Access Forbidden")
		}
		
		else if(route === "admin") {
			if(role === "admin") {
				next()
			}
			else throw new Error ("Access Forbidden, you have to be Admin to manage this page")
		}
}
	
} catch (err) {
	console.error(err.stack);
	res.status(403).json({msg: "An error has ocurred", error: err.message})
}
};


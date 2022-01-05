const { User } = require("../db");
const { pendingUsers } = require("../cache.js");
const uploadImage = require("./uploadImage.js");

//confirmUser controller

module.exports = async function confirmUser(token) {
	let user = pendingUsers[token];
	// If the front gave us a base64 image, we upload it to cloudinary
	// and turn it into an URL.
	// If it's already an URL, there's nothing to do.
	if (user) {
		if (user.logo.slice(0,5) === 'data:') {
			const responseUpload = await uploadImage(user.logo);
			user.logo = responseUpload.secure_url;
		}
		await User.create(pendingUsers[token]);
		return { msg: "Your account has been confirmed successfully." };
	} else throw new Error("This token is invalid or has expired.");
};

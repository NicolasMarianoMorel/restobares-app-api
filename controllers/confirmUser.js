const { User } = require("../db");
const { pendingUsers, usersTables } = require("../cache.js");
const uploadImage = require("./uploadImage.js");

//confirmUser controller

module.exports = async function confirmUser(token) {
	// token = decodeURIComponent(token);
	let user = pendingUsers[token];
	// If the front gave us a base64 image, we upload it to cloudinary
	// and turn it into an URL.
	// If it's already an URL, there's nothing to do.
	if (user) {
		if (user.logo.slice(0,5) === 'data:') {
			const responseUpload = await uploadImage(user.logo);
			user.logo = responseUpload.secure_url;
		}
		await User.create(user);
		let tables = [];
		for (let i=0; i < user.tables; i++) {
			tables.push(
				{
					tableId: i+1,
					state: 'free', // free, eating, waiting, pay_cash, pay_online
					calling: false,
					ordered: [], // already ordered products
					totalPrice: 0,
					tip: 0,
					currentOrder: { // order waiting to be served
						time: '',
						products: [],
						comments: '',
					}
				}
			);
		}
		usersTables[user.id] = { tables };
		return { msg: "Your account has been confirmed successfully." };
	} else throw new Error("This token is invalid or has expired.");
};

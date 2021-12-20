const { User } = require("../db");

//putAccount controller

module.exports = async function (idResto, body) {
	const {email, passAdmin, passStaff, tables, title, theme, logo, payment_mp} = body;
	if(email){
		await User.update(
			{ email: email },
			{
				where: {
					id:idResto
				}
			});
	}
	if(passAdmin){
			await User.update(
					{passAdmin:passAdmin},
					{where: {
							id:idResto
					}});
	}
	if(passStaff){
			await User.update(
					{passStaff:passStaff},
					{where: {
							id:idResto
					}});
	}
	if(tables){
			await User.update(
					{tables:tables},
					{where: {
							id:idResto
					}});
	}
	if(title){
			await User.update(
					{title:title},
					{where: {
							id:idResto
					}});
	}
	if(logo){
			await User.update(
					{logo:logo},
					{where: {
							id:idResto
					}});
	}
	if(theme){
			await User.update(
					{theme:theme},
					{where: {
							id:idResto
					}});
	}
	if(payment_mp){
			await User.update(
					{payment_mp:payment_mp},
					{where: {
							id:idResto
					}});
	}
	return {msg: `The value/s has been updated.`};
};

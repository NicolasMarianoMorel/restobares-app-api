/*
	cache.js
	Define the volatile data structure for the server
*/

// ---Variables globales---

// Lista de usuarios con sus mesas
var usersTables = {};
// Lista de usuarios con sus órdenes
/*
	Estructura:
	usersTables {
		[id]: {
			tables: [
				{
					tableId,
					state,
					ordered: [
						{ productName, quantity, price },
						... más platillos
					],
					totalPrice,
					currentOrder: {
						time,
						products: [
							{ productName, quantity, price },
							... más platillos
						],
						comments,
					}
				},
				... más mesas 
			],
		},
		... más restaurantes
	}
	Ejemplo:
	usersTables {
		['3idef30002a323440001']: {
			tables: [
				{
					tableId: 1,
					state: 'waiting', // free, busy, waiting, pay_cash, pay_online
					ordered: [
						{ productId: 3456, productName: 'meal', quantity: 1, price: 10.0},
						{ productId:  930, productName: 'coke', quantity: 2, price: 21.0},
						{ productId:   23, productName: 'watr', quantity: 2, price: 14.0},
						{ productId: 3560, productName: 'hamb', quantity: 4, price:  8.0},
						... mas productos
					],
					totalPrice: 550.90,
					currentOrder: {
						time: '2022-01-07_23:45:05.4677',
						products: [
							{productId: 3560, productName: 'hamb', quantity: 4, price:  8.0},
							... mas productos
						],
						comments: 'las papas sin sal porfa'
					},
				},
				... más mesas
			],
		},
		... más restaurantes
	}
*/

// pendingUsers
// each property is a dynamic token
var pendingUsers = {}
/*
	pendingUsers = {
		'ANnYxKHP0eGs4+o=': {
			email,
			passAdmin,
			passStaff,
			title,
			logo,
			paymentInfo,
			expire,
		},
		'kjg87d9AJAS934i4': {
			email,
			passAdmin,
			passStaff,
			title,
			logo,
			paymentInfo,
			expire,
		},
	}
*/

module.exports = {
	usersTables,
	pendingUsers,
};

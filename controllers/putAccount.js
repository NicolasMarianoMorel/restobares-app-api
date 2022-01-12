const { User } = require("../db");
const uploadImage = require("./uploadImage.js");
const bcrypt = require('bcrypt');
const { usersTables } = require("../cache.js");

//putAccount controller

module.exports = async function (idResto, body) {
	// Salt for hashing the password
	const saltRounds = 10;
  let {
    email,
    passAdmin,
    passStaff,
    tables,
    title,
    theme,
    logo,
    payment_mp,
  } = body;
  if (email) {
    await User.update(
      { email: email },
      {
        where: {
          id: idResto,
        },
      }
    );
  }
  if (passAdmin) {
    let hashedPassAdmin = bcrypt.hashSync(passAdmin,saltRounds);
    await User.update(
      { passAdmin: hashedPassAdmin },
      {
        where: {
          id: idResto,
        },
      }
    );
  }
  if (passStaff) {
    let hashedPassStaff = bcrypt.hashSync(passStaff,saltRounds);
    await User.update(
      { passStaff: hashedPassStaff },
      {
        where: {
          id: idResto,
        },
      }
    );
  }
  if (tables) {
    await User.update(
      { tables: tables },
      {
        where: {
          id: idResto,
        },
      }
    );
    // Update the caché too
    let currentTablesAmount = usersTables[idResto].tables.length;
		if (currentTablesAmount <= tables) {
			let newTables = [];
			for (let i=currentTablesAmount+1; i <= tables; i++) {
				newTables.push(
					{
						tableId: i,
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
			usersTables[idResto].tables = [...usersTables[idResto].tables, ...newTables];
			console.log("Amount of Tables: ",usersTables[idResto].tables.length);
		} else {
			usersTables[idResto].tables = usersTables[idResto].tables.filter(
				(table, i) => {
					return table.tableId <= tables;
				}
			);
			console.log("Amount of Tables: ",usersTables[idResto].tables.length);
		}
  }
  if (title) {
    await User.update(
      { title: title },
      {
        where: {
          id: idResto,
        },
      }
    );
  }
  if (logo) {
		if (logo.slice(0,5) === 'data:') {
			const responseUpload = await uploadImage(logo);
			logo = responseUpload.secure_url;
		}
    await User.update(
      { logo: logo },
      {
        where: {
          id: idResto,
        },
      }
    );
  }
  if (theme) {
    await User.update(
      { theme: theme },
      {
        where: {
          id: idResto,
        },
      }
    );
  }
  if (payment_mp) {
    await User.update(
      { payment_mp: payment_mp },
      {
        where: {
          id: idResto,
        },
      }
    );
  }
  return { msg: `The value/s has been updated.` };
};

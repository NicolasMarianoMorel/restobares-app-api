const { User } = require("../db");
const uploadImage = require("./uploadImage.js");
const bcrypt = require('bcrypt');

//putAccount controller

module.exports = async function (idResto, body) {
	// Salt for hashing the password
	const saltRounds = 10;
  const {
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

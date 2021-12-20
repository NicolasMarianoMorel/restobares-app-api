var express = require("express");
var router = express.Router();

// Obtenemos la lógica correspondiente desde controllers/index.js
const { getUser } = require("../../controllers");

router.get("/", async (req, res) => {
  try {
    const { idResto } = req;
    const users = await getUser(idResto);
    if (!users.length) {
      res.status(400).json({ error: "no se encotro el id" });
    } else {
      res.status(200).send(users);
    }
  } catch (err) {
		console.error(err.stack);
		res.status(400).json({ msg: 'There was an error', error: err.message});
  }
});
module.exports = router;

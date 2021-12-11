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
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;

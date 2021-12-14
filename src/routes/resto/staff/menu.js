var express = require('express');
var router = express.Router();

const { getMenu } = require("../../../controllers");

// ruta relativa!
router.get("/", async (req, res) => {
  try {
    const { idResto } = req;
    const menu = await getMenu(idResto);
    if (!menu.length) {
      res.status(400).json({ error: "no se encotro el id" });
    } else {
      res.status(200).send(menu);
    }
  } catch (error) {
    console.log(error);
  }
});

// tambien puede ir el post, delete, etc...

module.exports = router;



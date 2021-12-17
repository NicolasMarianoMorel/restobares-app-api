var express = require("express");
var router = express.Router();

// Obtenemos la lógica correspondiente desde controllers/index.js
const { postFeedbacks } = require("../../../controllers/index.js");

// ruta relativa!

router.post("/", async (req, res) => {
  try {
    const { idResto, idTable, body } = req;
    const feedbacks = await postFeedbacks(idResto, idTable, body);
    res.json({ msg: "the post was made correctly" });
  } catch (error) {
    res.json({ msg: "error in the post" });
  }
});

// tambien puede ir el post, delete, etc...

module.exports = router;

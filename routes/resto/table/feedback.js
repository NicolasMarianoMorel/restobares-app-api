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
		console.error(err.stack);
		res.status(400).json({ msg: 'There was an error', error: err.message});
  }
});

// tambien puede ir el post, delete, etc...

module.exports = router;

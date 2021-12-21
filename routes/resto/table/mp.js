var express = require('express');
var router = express.Router();
const {tableStates} = require('../../../controllers');

router.get("/:idStaff/:state", async (req, res) => {
    try {
      const { idResto, idTable } = req;
      const {idStaff, state} = req.params;
      let response = await tableStates(idTable, state, idResto, idStaff);
      res.status(response.status).json(response);
    } catch (err) {
          console.error(err.stack);
          res.status(400).json({ msg: 'There was an error', error: err.message});
    }
  });

module.exports = router;

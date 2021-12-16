const { Feedback } = require("../db");

const postFeedbacks = async (idResto, idTable, body) => {
  const { comment, rating } = body;
  let newFeedback = await Feedback.create({
    comment,
    rating,
    UserId: idResto,
  });
  console.log(newFeedback);
};

module.exports = postFeedbacks;

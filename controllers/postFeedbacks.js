const { Feedback } = require("../db");

const postFeedbacks = async (idResto, idTable, body) => {
  const { comment, rating } = body;
  console.log("COMMENT", comment, rating);
  let newFeedback = await Feedback.create({
    comment,
    rating,
    UserId: idResto,
  });
  console.log(newFeedback);
  return newFeedback;
};

module.exports = postFeedbacks;

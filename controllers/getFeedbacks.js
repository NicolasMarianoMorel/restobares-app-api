const { Feedback } = require('../db');

const getFeedbacks = async(idResto)=>{
    let allFeedbacks =await Feedback.findAll({
    where:{
        UserId: idResto
    },
    attributes: ["comment", "rating"]
    });
    return allFeedbacks
}

module.exports = getFeedbacks
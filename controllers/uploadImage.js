const cloudinary = require("cloudinary");
const { CD_NAME, CD_KEY, CD_SCT } = process.env;
cloudinary.config({
  cloud_name: CD_NAME,
  api_key: CD_KEY,
  api_secret: CD_SCT,
});

const uploadImage = async (image) => {
  const uploadResponse = await cloudinary.v2.uploader.upload(image); 
  console.log("resonse", uploadResponse);
  return uploadResponse;
};

module.exports = uploadImage;

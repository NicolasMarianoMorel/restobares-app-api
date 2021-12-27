const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: "dingbell",
  api_key: "277275252495195",
  api_secret: "Tia_j6BlCEOfr6LLmJT8XAoUp4I",
});

const uploadImage = async (image) => {
  const uploadResponse = await cloudinary.v2.uploader.upload(image); 
  console.log("resonse", uploadResponse);
  return uploadResponse;
};

module.exports = uploadImage;

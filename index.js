const dotenv = require("dotenv");
dotenv.config();

const cloudinary = require("cloudinary");
const fs = require("fs");

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const assets = fs.readdirSync(`${__dirname}/assets`);

const folder = "test";

for (const asset of assets) {
  const assetPath = `${__dirname}/assets/${asset}`;
  cloudinary.v2.uploader.upload(
    assetPath,
    {
      folder,
      use_filename: true,
    },
    (error, res) => {
      console.log(`\nUploading ${asset}`);
      if (!error) {
        console.log(`Successfully !!!\n`);
      } else {
        console.log(`Error !!!\n`);
      }
    }
  );
}

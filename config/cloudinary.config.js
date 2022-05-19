const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'sweetter-profile-pics',
    public_id: (req, file) => `${Date.now()}-${randomInteger(1000, 9999)}`
  }
});

exports.deleteCloudinary = publicId => {
  cloudinary.uploader.destroy(publicId, function (error, result) {
    console.log(result, error);
  });
};

exports.uploadCloudinary = multer({ storage: storage });

// exports.upload = multer({
//   storage: multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, path.join(__dirname, '../public/images/avatars'));
//     },
//     filename: (req, file, cb) => {
//       cb(null, `${Date.now()} - ${file.originalname}`);
//     }
//   })
// });

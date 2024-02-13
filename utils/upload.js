const multer = require("multer");

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const filenameWithoutSpaces = file.originalname.replace(/\s+/g, "_");
    cb(null, Date.now() + "-" + encodeURIComponent(filenameWithoutSpaces));
  },
});

// Create the multer instance
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 500 * 1024 * 1024, // 500 MB
  },
});

module.exports = upload;

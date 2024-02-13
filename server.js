const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
const upload = require("./utils/upload");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const server = http.createServer(app);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow requests from any origin
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

var option = {
  origin: ["*"],
  credential: true,
};
app.use(cors(option));
app.use(express.json());
const directory = path.join(__dirname, "uploads");
app.use("/uploads", express.static(directory));
// Routes

app.use("/api", upload.single("file"), require("./routes/audio"));

server.listen(3000, () => {
  console.log("Server runing at 3000 port");
});

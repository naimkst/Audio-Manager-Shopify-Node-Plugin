const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
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

// Routes

app.use("/api", require("./routes/createCommentRoute"));
app.use("/api", require("./routes/getCommentsRoute"));
app.use("/api", require("./routes/getAllComments"));

mongoose
  .connect("mongodb+srv://admin:Pass.321@blogcomments.qbjvpgx.mongodb.net", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB successfully!");
    // Your code here
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

server.listen(3000, () => {
  console.log("Server runing at 3000 port");
});

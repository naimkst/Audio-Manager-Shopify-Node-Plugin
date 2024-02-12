const { mongoose } = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    title: String,
    blogId: String,
    parentId: String,
    name: String,
    email: String,
    comment: String,
    action: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);

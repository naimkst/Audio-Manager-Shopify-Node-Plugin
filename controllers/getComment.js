const Comment = require("../models/comment");

const getComments = async (req, res) => {
  const { blogId } = req.body;

  try {
    if (blogId == "") {
      res.status(400).json({
        error: "Opps something is wrong!",
      });
    }

    const result = await Comment.find({
      blogId: blogId,
      action: "2",
    });

    res.status(201).json({ data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
};

const updateComment = async (req, res) => {
  const { id, action } = req.body;

  try {
    if (id == "" || action == "") {
      return res.status(400).json({
        error: "Oops, something is wrong!",
      });
    }

    const result = await Comment.findOneAndUpdate(
      { _id: id },
      { $set: { action: action } },
      { new: true }
    ).exec();

    if (!result) {
      return res.status(404).json({
        error: "Comment not found",
      });
    }

    res.status(201).json({ data: result, message: "Update successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteComment = async (req, res) => {
  const { id } = req.body;

  console.log(id);

  try {
    if (!id) {
      return res.status(400).json({
        error: "Oops, something is wrong!",
      });
    }

    const result = await Comment.deleteOne({ _id: id }).exec();

    if (result.deletedCount === 0) {
      return res.status(404).json({
        error: "Comment not found",
      });
    }

    res.status(200).json({
      message: "Comment deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { getComments, updateComment, deleteComment };

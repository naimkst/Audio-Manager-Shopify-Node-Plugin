const Comment = require("../models/comment");

const getAllComments = async (req, res) => {
  try {
    const result = await Comment.find();
    res.status(201).json({ data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
};

module.exports = { getAllComments };

const Comment = require("../models/comment");

const createComment = async (req, res) => {
  const { title, blogId, parentId, name, email, comment, action } = req.body;

  try {
    if (title == "") {
      res.status(400).json({
        error: "Field is require!",
      });
    }

    if (blogId == "") {
      res.status(400).json({
        error: "Field is require!",
      });
    }

    if (name == "") {
      res.status(400).json({
        error: "Field is require!",
      });
    }

    if (email == "") {
      res.status(400).json({
        error: "Field is require!",
      });
    }

    if (comment == "") {
      res.status(400).json({
        error: "Field is require!",
      });
    }

    if (action == "") {
      res.status(400).json({
        error: "Field is require!",
      });
    }
    const result = await Comment.create({
      title,
      blogId,
      parentId,
      name,
      email,
      comment,
      action: "1",
    });

    res.status(201).json({
      success: result,
      message: "Comment Create succesfull!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
};

module.exports = { createComment };

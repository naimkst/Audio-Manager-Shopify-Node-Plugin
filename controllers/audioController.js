const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const Create = async (req, res) => {
  const { file } = req.body;
  const fileData = req.file;

  try {
    if (file == "") {
      res.status(400).json({
        error: "Field is require!",
      });
    }

    const result = await prisma.audio.create({
      data: {
        name: fileData?.originalname,
        fileName: fileData?.filename,
        status: "1",
        size: String(fileData?.size),
        mimetype: fileData?.mimetype,
      },
    });

    res.status(201).json({
      success: result,
      message: "File Added Succesfull!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const result = await prisma.audio.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    res.status(201).json({ data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
};

const Delete = async (req, res) => {
  const { id } = req.body;

  try {
    if (!id) {
      return res.status(400).json({
        error: "Oops, something is wrong!",
      });
    }

    const result = await prisma.audio.delete({
      where: {
        id: id,
      },
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        error: "Not found!",
      });
    }

    res.status(200).json({
      message: "Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

const GetById = async (req, res, next) => {
  const { id } = req.body;

  try {
    if (id == "") {
      res.status(400).json({
        error: "Field is require!",
      });
    }

    const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${id}`;

    res.status(201).json({
      success: fileUrl,
      message: "Here is the link!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
};

module.exports = { Create, getAll, Delete, GetById };

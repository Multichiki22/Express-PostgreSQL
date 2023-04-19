const { example } = require("../../config/dbConecction");
const handleDeleteExample = async (req, res) => {
  const { exampleString } = req.body;
  try {
     await example.destroy({
      where: {
        exampleString: exampleString,
      },
    });
    res.sendStatus(200);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handleDeleteExample;

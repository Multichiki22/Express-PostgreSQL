const { example } = require("../../config/dbConecction");
const handlePutExample = async (req, res) => {
  const { id } = req.params;
  const { exampleString, exampleNumber, exampleObject, exampleArray } =
    req.body;
  try {
    const updatedExample = await example.update(
      {
        exampleString,
        exampleNumber,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.sendStatus(200);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlePutExample;

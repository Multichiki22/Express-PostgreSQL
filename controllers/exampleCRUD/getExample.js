const {example} = require("../../config/dbConecction");
const handleGetExample = async (req, res) => {
  try {
    const allExamples = await example.findAll()
    res.status(200).json(allExamples)
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = handleGetExample
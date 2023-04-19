const {example} = require("../../config/dbConecction");
const handlePostExample = async(req, res)=>{
    const {exampleString, exampleNumber} = req.body
    try {
        await example.create({exampleString, exampleNumber})
        res.sendStatus(201)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
module.exports = handlePostExample
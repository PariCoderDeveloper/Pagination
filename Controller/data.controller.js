const Model = require("../Model/data.model");

async function GetData(req, res) {
    try {
        const skip = req.query.id * 10;        
        const data = await Model.find()
            .skip(skip)
            .limit(10);
        const count =  (await Model.countDocuments()) / 10;
        // render the Handlebars view and pass the users data
        res.render("pages/index", {result:{ data, count}, layout: "layout/main"});
    } catch (error) {
        res.status(500).json({
            message: error.message,
            successfully: false
        });
    }
}

async function PostData(req, res) {
    try {
        console.log(req.body);
        await Model.create(req.body);
        res.status(201).json({
            message: "User created",
            successfully: true
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            successfully: false
        });
    }
}

module.exports = {
    GetData,
    PostData
}
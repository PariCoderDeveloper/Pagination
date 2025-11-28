const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    name: { type: String, required: true, max: 50 },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^\S+@\S+.\S+$/
    },
    age: { type: Number, required: true },
    CreatedAt: { type: Date, default: Date.now },
});

const User = mongoose.model("Data", dataSchema);
module.exports = User
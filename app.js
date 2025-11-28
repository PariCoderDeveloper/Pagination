const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/model.route")
const path = require("path");
const hbs = require("hbs");
const PORT = 3000;

const app = express();

app.use((req, res, next) => {
    const time = Date.now();
    next();
    console.log(`${req.method} / ${Date.now() - time}ms`);

});

mongoose.connect("mongodb://localhost:27017/users")
    .then(() => console.log("Connected to database"));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "View"));

app.use(express.json());
app.use("/", route);

app.use("/public",express.static("public"));

hbs.registerHelper("times", (n , block) =>{
    let result = "";
    for (let index = 1; index < n; index++) {
        result += block.fn(index);
    }
    return result;
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT} port `);
});
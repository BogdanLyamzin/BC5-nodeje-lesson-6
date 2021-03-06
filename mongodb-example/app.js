const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
// const dotenv = require("dotenv");
// dotenv.config();
require("dotenv").config();

const routes = require("./api");

const app = express();

app.use(cors());

app.use("/api/v1/authors", routes.authors);
// app.use("/api/v1/posts", routes.posts);

app.use((req, res)=> {
    res.status(404).json({
        status: "error",
        code: 404,
        message: "Not found"
    })
});

app.use((error, _, res, __)=>{
    const {code = 500, message = "Server error"} = error;
    res.status(code).json({
        status: "fail",
        code,
        message
    })
});

const {DB_HOST, PORT} = process.env;


mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=> {
    const port = PORT || 3000;
    app.listen(port);
})

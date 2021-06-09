const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
// const dotenv = require("dotenv");
// dotenv.config();
require("dotenv").config();

const app = express();

app.use(cors());

app.use((req, res)=>{

});

const {Schema, model} = mongoose;

const userSchema = Schema({
    name: String,
    lastName: String,
    birthday: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10
    }
});

const User = model("user", userSchema);

const {DB_HOST, PORT} = process.env;

const newAuthor = {
    name: "Скотт",
    lastName: "Бэккер",
    birthday: "04.06.1970"
}

mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=> {
    User.create(newAuthor, (error, data)=> {
        console.log(error);
        console.log(data)
    });

    const port = PORT || 3000;
    app.listen(port);
    console.log("Database connect success");
})

/*
mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(async ()=> {
    try {
        const result = await User.create(newAuthor);
        res.status(201).json({
            status: "success",
            code: 201,
            data: {
                result
            }
        })
    }
    catch (error){
        next(error);
    }
    
    const port = PORT || 3000;
    app.listen(port);
    console.log("Database connect success");
})
*/
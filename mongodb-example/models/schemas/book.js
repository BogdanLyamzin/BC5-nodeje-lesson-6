const {Schema, model} = require("mongoose");

const bookSchema = Schema({
    authors: [{
        type: Schema.ObjectId,
        ref: "authors"
    }]
});

const oldBookSchema = Schema({

});

const newBookSchema = Schema({

});
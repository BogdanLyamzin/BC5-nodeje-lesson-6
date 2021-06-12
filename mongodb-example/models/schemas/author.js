const {Schema} = require("mongoose");

const authorSchema = Schema({
    name: {
        type: String,
        required: [true, "name must be exist!"],
        // match: /^[A-zА-я]{2,50}$/,
        minLength: 2,
        maxLength: 50,
        // validate: {
        //     validator(value) {
        //       return /\d{3}-\d{3}-\d{4}/.test(value);
        //     },
        //     message: props => `${props.value} is not a valid phone number!`
        //   },
    },
    status: {
        type: String,
        enum: ["active", "inActive"],
        default: "active"
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    taxPerLetter: {
        type: Number,
        min: 0,
        max: 100000,
        default: 1000
    }
});

module.exports = authorSchema;
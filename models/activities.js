
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: {
        type: Array
    }
})

const activities = mongoose.model("activities", workoutSchema);

module.exports = activities;

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const activitiesSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: {
        type: Array
    }
})

const activities = mongoose.model("activities", activitiesSchema);

module.exports = activities;
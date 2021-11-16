const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [{
        type: {
            type: String,
            required :true
        },
        name: {
            type: String,
            required :true
        },
        duration: {
            type: Number,
            
        },
        weight: {
            type: String,
            
        },
        reps: {
            type: String,
            
        },
        sets: {
            type: String,
            
        },
        distance: {
            type: String,
            
        }
    }] 
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
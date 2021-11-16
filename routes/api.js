const router = require("express").Router();
const workout = require ("../models/workout");

router.get("/workout", (req, res) => {
    workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" }
        }
      }
    ])
      .then(dbWorkout => {
        console.log(dbWorkout)
        res.json(dbWorkout);
      })
      .catch(err => {
        console.log('workouts: ' + err)
        res.status(400).json(err);
      });
});

module.exports = router;
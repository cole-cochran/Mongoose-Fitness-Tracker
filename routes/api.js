const router = require("express").Router();
const activities = require ("../models/activities");

router.get("/activities", (req, res) => {
    activities.aggregate([
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
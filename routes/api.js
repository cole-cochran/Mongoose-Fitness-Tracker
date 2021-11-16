const router = require("express").Router();
const workout = require("../models/workout");

router.get("/api/workouts", (req, res) => {
  workout
    .aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
        },
      },
    ])
    .then((dbWorkout) => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      console.log("workouts: " + err);
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  workout.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    {
      $push: {
        exercises: { ...req.body },
      },
    }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
  workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      console.log("post: " + err);
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  workout.aggregate([
    { $limit: 7 },
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
    .then((dbWorkout) => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      console.log("range: " + err);
      res.status(400).json(err);
    });
});
module.exports = router;

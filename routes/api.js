const router = require("express").Router();
const activities = require ("../models/activities");

router.get("/exercise", (req, res) => {
    res.sendFile('./exercise.html', {root: "public" })
});

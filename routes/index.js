const router = require('express').Router();

const apiRoutes = require('./api');
const homes = require('./home');

router.use('/', "home");
router.use('/api', apiRoutes);

module.exports = router;
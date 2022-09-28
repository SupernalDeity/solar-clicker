const router = require('express').Router();
const userRoutes = require('./userRoutes');
const scoresRoutes = require('../scoreRoutes');

router.use('/users', userRoutes);
router.use('/highscores', scoresRoutes);

module.exports = router;

const router = require('express').Router();
const userRoutes = require('./userRoutes');
const scoresRoutes = require('./scoreRoutes');
const gameRoutes = require('./gameRoutes');

router.use('/users', userRoutes);
router.use('/scores', scoresRoutes);
router.use('/game', gameRoutes);

module.exports = router;

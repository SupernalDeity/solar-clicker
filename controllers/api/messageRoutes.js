const router = require('express').Router();
const { User, Score } = require('../../models');
const socket = require('socket.io');

const io = socketio(server)

router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;
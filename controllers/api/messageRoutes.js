const router = require('express').Router();
const { User } = require('../../models');
const socket = require('socket.io');

const io = socketio(server)

router.get('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});
const username = User.findOne({where: {name: req.body.name}});
console.log(username)
alert.username

module.exports = router;
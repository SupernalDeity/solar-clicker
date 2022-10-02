const router = require('express').Router();
const { User } = require('../../models');

const username = [];

router.get('/', async (req, res) => {
  try {
    username = User.findOne({ where: { name: req.body.name } });
    res.status(200).json(userData);
    return username;
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
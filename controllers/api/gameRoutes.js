const router = require('express').Router();
const { User, Score, Message } = require('../../models');


//Get all users
router.get('/allusers', async (req, res) => {
  const userData = await User.findAll({
    include: [
      {
        model: Score,
        attributes: {
          exclude: ['user_id, stars']
        }
      },
  ]
  })
  return res.json(userData);
});

//Get a user by id 
router.get('/universe', async (req, res) => {
  const userData = await User.findByPk(req.session.user_id, {
    include: [
      {
        model: Score,
        attributes: {
          exclude: ['id', 'user_id']
        }
      },
  ]
  })
  const user = userData.get();
  return res.json(user);
});

//Add a planet to a user and update database values
router.put('/universe/:planet/add/:num?', async (req, res) => {
  const universe = await Score.findOne({ where: { user_id: req.session.user_id }});
  const planetCost = [req.params.planet] + '_cost';
  if (universe.stars >= universe[planetCost]) {
    universe.update({ [req.params.planet]: universe[req.params.planet] + (+req.params.num || 1)});
    universe.update( universe.stars = universe.stars - universe[planetCost]);
    universe.update( universe[planetCost] = Math.round(universe[planetCost] * 1.25));
    universe.save();
    return res.json(universe);
  }
    else {
      return
    };
});

//Updates score based on database values
router.put('/universe/', async (req, res) => {
  const universe = await Score.findOne({ where: { user_id: req.session.user_id }});
  universe.update( universe.stars = (universe.stars + (
    (universe.mercury * 2) + 
    (universe.venus * 10) + 
    (universe.earth * 30 ) +
    (universe.mars * 90) +
    (universe.jupiter * 120) + 
    (universe.saturn * 500) +
    (universe.uranus * 900) +
    (universe.neptune * 2000) +
    (universe.pluto * 4000)
    )));

  universe.update( universe.accumulation = (universe.accumulation + (
    (universe.mercury * 2) + 
    (universe.venus * 10) + 
    (universe.earth * 30 ) +
    (universe.mars * 90) +
    (universe.jupiter * 120) + 
    (universe.saturn * 500) +
    (universe.uranus * 900) +
    (universe.neptune * 2000) +
    (universe.pluto * 4000)
    )));
   
  universe.save();
  return res.json(universe);
});

//Updates values based on user click
router.put('/score', async (req, res) => {
  const score = await Score.findOne({ where: { user_id: req.session.user_id }});
  if (score) {
    score.update({ stars: (score.stars + 1), accumulation: (score.accumulation + 1), clicks: (score.clicks + 1) });
    score.save();
    return res.json(score);
  } else {
    return res.send(404).json({ message: 'not found '});
  }
});

//Route to save a message to Database
router.post('/message', async (req, res) => {
  try {
    const messageData = await Message.create({ ...req.body, user_id: req.session.user_id });
 
    return res.json(messageData);

  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

//Route to get all messages in Database
router.get('/message', async (req, res) => {
  const messageData = await Message.findAll({ 
    include: [User]
    })
  return res.json(messageData);
});

router.put('/score', async (req, res) => {
  const score = await Score.findOne({ where: { user_id: req.session.user_id } });
  if (score) {
    score.update({ stars: (score.stars + reward), accumulation: (score.accumulation + reward) });
    score.save();
    return res.json(score);
  } else {
    return res.send(404).json({ message: 'Reward not given' });
  }
});

module.exports = router;
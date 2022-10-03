const router = require('express').Router();
const { User, Score } = require('../../models');

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

router.put('/universe/', async (req, res) => {
  const universe = await Score.findOne({ where: { user_id: req.session.user_id }});
  universe.update( universe.stars = (universe.stars + (
    (universe.mercury * 2) + 
    (universe.venus * 30) + 
    (universe.earth * 90 ) +
    (universe.mars * 240) +
    (universe.jupiter * 500) + 
    (universe.saturn * 1200) +
    (universe.uranus * 3000) +
    (universe.neptune * 7000) +
    (universe.pluto * 18000)
    )));

  universe.update( universe.accumulation = (universe.accumulation + (
    (universe.mercury * 2) + 
    (universe.venus * 30) + 
    (universe.earth * 90 ) +
    (universe.mars * 240) +
    (universe.jupiter * 500) + 
    (universe.saturn * 1200) +
    (universe.uranus * 3000) +
    (universe.neptune * 7000) +
    (universe.pluto * 18000)
    )));
  
  universe.save();
  return res.json(universe);
});

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

module.exports = router;
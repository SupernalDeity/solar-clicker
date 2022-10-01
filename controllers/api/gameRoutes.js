const router = require('express').Router();
const { User, Score } = require('../../models');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/:id/universe/', async (req, res) => {
  const userData = await User.findByPk(req.params.id, {
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

router.put('/:id/universe/:planet/add/:num?', async (req, res) => {
  const universe = await Score.findOne({ where: { user_id: req.params.id }});
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

router.put('/:id/score/', async (req, res) => {
  const score = await Score.findOne({ where: { user_id: req.params.id }});
  score.update({ stars: (score.stars + 1), accumulation: (score.accumulation + 1), clicks: (score.clicks + 1) });
  score.save();
  return res.json(score);
});

module.exports = router;
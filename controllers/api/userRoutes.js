const router = require('express').Router();
const { User, Universe, Score } = require('../../models');

router.post('/', async (req, res) => {
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

router.get('/:id/universe/', async (req, res) => {
  const userData = await User.findByPk(req.params.id, {
    include: [
      {
        model: Universe,
        attributes: {
          exclude: ['id', 'user_id']
        }
      },
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
  const universe = await Universe.findOne({ where: { user_id: req.params.id }});
  universe.update({ [req.params.planet]: universe[req.params.planet] + (+req.params.num || 1)});
  universe.save();
  return res.json(universe);
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

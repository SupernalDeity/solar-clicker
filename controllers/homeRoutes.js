const router = require('express').Router();

router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.render('index', { loggedIn: req.session.loggedIn });
  } else {
    res.redirect('/login');
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
  } else {
    res.render('login', { loggedIn: req.session.loggedIn });
  }
});

router.get('/sign-up', (req, res) => {
  res.render('sign-up', { loggedIn: req.session.loggedIn });
});

module.exports = router;

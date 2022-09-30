const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('login');
});

router.get('/sign-up', (req, res) => {
  res.render('sign-up');
});

module.exports = router;

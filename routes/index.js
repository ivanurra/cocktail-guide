const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/about-me', (req, res, next) => {
  res.render('aboutme');
});

module.exports = router;

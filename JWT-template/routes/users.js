var express = require('express');
var router = express.Router();
const controller = require('../controllers/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', () => {

});

module.exports = router;

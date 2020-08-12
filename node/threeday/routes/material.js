var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('我是材料接口aaaa');
});
router.get('/aa', function(req, res, next) {
  res.send('我是材料接口');
});

module.exports = router;

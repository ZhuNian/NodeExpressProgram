var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next){
  res.render('toDolist', {
    title: 'to do list',
    layout: 'layout.html'
  });
});

module.exports = router;
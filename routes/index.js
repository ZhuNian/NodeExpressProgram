var express = require('express');
var toDoList = require('../lib/toDoList');
var router = express.Router();

router.get('/', function (req, res, next){
  res.render('toDolist');
});

module.exports = router;
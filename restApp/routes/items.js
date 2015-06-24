var express = require('express');
var router = express.Router();


var mongoose = require('mongoose');
var Items = require('../models/Items.js');

/* GET users listing. */
//router.get('/', function(req, res, next) {

router.post('/', function(req, res, next) {
  Items.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* GET /todos/id */
router.get('/:id', function(req, res, next) {
  Items.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/*Items.find(function (err, items) {
    if (err) return next(err);
    res.json(items);
  });
});
*/
module.exports = router;

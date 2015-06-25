var express = require('express');
var router = express.Router();


var mongoose = require('mongoose');
var Items = require('../models/Items.js');

/* GET users listing. */
//router.get('/', function(req, res, next) {
/*
router.post('/', function(req, res, next) {
  Items.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
*/
/*
router.post('/:id', function(req, res, next) {

 Items.find(function (err, items) {
    if (err) return next(err);
console.log(items);
    res.json(items);
});
});
*/


router.post('/:name', function(req, res, next) {
  Items.find(req.param.name, function (err, post) {
    if (err) return next(err);
console.log("Heloooo");
console.log(post);    
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

router.put('/:id', function(req, res, next) {
  Items.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/:id', function(req, res, next) {
  Items.findByIdAndRemove(req.params.id, req.body, function (err, post) {
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

var express = require('express');
var router = express.Router();

var CommentController = require('../controllers/comment');

router.get('/', function(req, res, next) {
    res.json({
        "data":"pong"
    })
});
router.post('/', CommentController.create);
router.get('/detail/:id', CommentController.detail);


module.exports = router;

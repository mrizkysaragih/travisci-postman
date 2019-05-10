var express = require('express');
var router = express.Router();

var CommentController = require('../controllers/comment');

router.post('/', CommentController.create);
router.get('/detail/:id', CommentController.detail);


module.exports = router;

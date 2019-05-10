var express = require('express');
var router = express.Router();

var rj = require('../../common/response'); //rj stand for response json

router.get('/ping', function(req, res, next) {
    res.json(rj.general(null,{"data":"pong"}));
});

module.exports = router;

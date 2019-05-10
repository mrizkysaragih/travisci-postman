var express = require('express');
var moment = require('moment');
var router = express.Router();


var blogModel = require('../models/comment');
var rj = require('../../common/response'); //rj stand for response json


module.exports.create = function(req,res){
    res.json(rj.general(null,{"data":"oke"}));
}

module.exports.detail = function(req,res) {

    blogModel.getDetail(req.query.slug,function (err,ret) {
        res.json(rj.general(err,ret));
    })

}



//module.exports = router;

var express = require('express');
var router = express.Router();
const getDetailQuery = 'SELECT * FROM `comment` WHERE `id` = 1'


module.exports = {
    getDetail: function(slug, fn){
        db.query(getDetailQuery, slug, function (err,ret) {
            fn(err, ret)
        })
    },

};

/**
 * Created by rifhan on 7/25/16.
 */
 var mongoose = require('mongoose');
 var config = {
    connection : mongoose.connect("mongodb://99xt:intel123@ds027165.mlab.com:27165/uni-relations")
 };

 module.exports = config;
'use strict'

var express = require('express')
var nconfs = require('./lib/nconfs')

var app = express.createServer()

var conf = nconfs.load()

app.get('/', function(req, res) {
    res.send('Hello World')
});

app.listen(conf.get('port'))

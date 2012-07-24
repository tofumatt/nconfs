(n)confs
========

A node.js convention/library for supporting multiple nconf settings with
inheritance.

    |- app.js
    |- defaults.json
    |- local.js-dist

Structure your app like this and `defaults.json` is loaded, then
`defaults-$NODE_ENV.json`, then `local.json` if it exists. If none of these
files exist: your app is still loaded.

Installation
============

    npm install nconfs

Usage
=====

    var conf = require('nconfs').load()

    // Load extra confs:
    var conf = require('nconfs').load('extras.json')

Works like [`nconf`](https://github.com/flatiron/nconf) otherwise:

	'use strict'

	var express = require('express')
	var conf = require('nconfs').load()

	var app = express.createServer()

	app.get('/', function(req, res) {
	    res.send('Hello World')
	});

	app.listen(conf.get('port'))


Yup.

Thanks to [@zalun](https://twitter.com/zalun) for inspiring me to write/lazily
abstract this from [newnewtab](https://github.com/mozilla/newnewtab).

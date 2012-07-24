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

Yup.

Thanks to [@zalun](https://twitter.com/zalun) for inspiring me to write/lazily
abstract this from [newnewtab](https://github.com/mozilla/newnewtab).

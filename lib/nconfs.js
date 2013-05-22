'use strict';

var fs = require('fs')
var nconf = require('nconf')
var path = require('path')

var DEFAULT_FILES = [
    'defaults.json',
    'defaults-' + (process.env.NODE_ENV || 'development') + '.json',
    'local.json'
]

var log = function() {}

if (console && console.log) {
    log = console.log
}

// Load configuation files in the order specified.
function loadFiles(files) {
    files.forEach(function(f) {
        try {
            fs.lstatSync(f)
            log('Loading ' + f)
        } catch(e) {
            delete files[files.indexOf(f)]

            log('Not loading: ' + f + " (file doesn't exist?)")
        }
    });

    return nconf.argv().env().defaults(nconf.loadFilesSync(files))
}

function load(appPath) {
    if (!appPath) {
        appPath = module.parent.filename.replace(/^(.*)(\/.*)$/g, '$1')
    } else {
        delete arguments[0]
    }

    var defaultFiles = []
    DEFAULT_FILES.forEach(function(f) {
        defaultFiles.push(path.join(appPath, f))
    })

    return loadFiles([].concat(defaultFiles, Array.prototype.slice.call(arguments)))
}

module.exports.load = load
module.exports.loadFiles = loadFiles

global.exporter = require('../lib/index').default
global.jade = require('../lib/renderer').jade
global.Bluebird = require('bluebird')
global.assert = require 'power-assert'
global.path = require 'path'
global.Readable = require('stream').Readable

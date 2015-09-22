global.exporter = require('../lib/index').default
global.Promise = require 'bluebird'
global.assert = require 'power-assert'
global.path = require 'path'
global.fs = require 'fs'
global.Readable = require('stream').Readable

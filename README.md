template2pdf
======================

[![Build Status](https://travis-ci.org/holyshared/template2pdf.svg?branch=master)](https://travis-ci.org/holyshared/template2pdf)
[![Coverage Status](https://coveralls.io/repos/holyshared/template2pdf/badge.svg?branch=master&service=github)](https://coveralls.io/github/holyshared/template2pdf?branch=master)

Installation
----------------------

    npm install template2pdf

Basic usage
--------------------------

```js
var jade = require('template2pdf').jade;
var exporter = require('template2pdf').default;

exporter(jade({ /* jade options */ })).render('views/content.jade', { name: 'jade' }).then(function(result) {
  result.toFile('/tmp/content.pdf', function() {
    //do something
  });
});
```

Javascript & Stylesheet
--------------------------

```js
var jade = require('template2pdf').jade;
var exporter = require('template2pdf').default;

exporter(jade())
  .stylesheet('./style.css')
  .javascript('./js/main.js')
  .layout({
    format: 'A4',
    orientation: 'portrait'
  })
  .render('views/content.jade', { name: 'jade' }).then(function(result) {
    result.toFile('/tmp/content.pdf', function() {
      //do something
    });
  });
```

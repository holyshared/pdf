template2pdf
======================

[![Build Status](https://travis-ci.org/holyshared/template2pdf.svg?branch=master)](https://travis-ci.org/holyshared/template2pdf)

Installation
----------------------

  npm install template2pdf

Basic usage
--------------------------

var jade = require('template2pdf').jade;
var exporter = require('template2pdf').default;

```js
exporter(jade({ /* jade options */ })).render('views/content.jade', { name: 'jade' }).then(function(result) {
  result.toFile('/tmp/content.pdf', function() {
    //do something
  });
});
```

Javascript & Stylesheet
--------------------------

var jade = require('template2pdf').jade;
var exporter = require('template2pdf').default;

```js
exporter(jade())
  .stylesheet()
  .javascript()
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

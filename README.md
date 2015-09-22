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
import jade from 'template2pdf-jade';
import exporter from 'template2pdf';

exporter(jade({ /* jade options */ })).render('views/content.jade', { name: 'jade' }).then((result) => {
  result.toFile('/tmp/content.pdf', () => {
    //do something
  });
});
```

Javascript & Stylesheet
--------------------------

```js
import exporter from 'template2pdf';
import jade from 'template2pdf-jade';
import { resolve } from 'path';

exporter(jade())
  .stylesheet('style.css')
  .javascript('main.js')
  .render(resolve(__dirname, './report.jade'), {
    title: 'jade-example',
    content: 'Example content'
  })
  .then((result) => {
    result.toFile('./report.pdf');
  });
```

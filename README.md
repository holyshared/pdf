template2pdf
======================

[![Build Status](https://travis-ci.org/holyshared/template2pdf.svg?branch=master)](https://travis-ci.org/holyshared/template2pdf)
[![Coverage Status](https://coveralls.io/repos/holyshared/template2pdf/badge.svg?branch=master&service=github)](https://coveralls.io/github/holyshared/template2pdf?branch=master)
[![Dependency Status](https://www.versioneye.com/user/projects/55feb03c601dd9001c00003a/badge.svg?style=flat)](https://www.versioneye.com/user/projects/55feb03c601dd9001c00003a)
[![Stories in Ready](https://badge.waffle.io/holyshared/template2pdf.png?label=ready&title=Ready)](https://waffle.io/holyshared/template2pdf)

Installation
----------------------

    npm install template2pdf

Basic usage
--------------------------

Use the template engine, you can convert content to PDF.

```js
import jade from 'template2pdf-jade';
import exporter from 'template2pdf';

exporter(jade({ /* jade options */ }))
  .render('views/content.jade', { name: 'jade' })
  .then((result) => {
    return result.saveAs('/tmp/content.pdf');
  }).then(() => {
    //successful
  });
```

Stream
--------------------------

Using the Stream, you can also chain the output.

```js
import jade from 'template2pdf-jade';
import exporter from 'template2pdf';
import fs from 'fs';

exporter(jade({ /* jade options */ }))
  .render('views/content.jade', { name: 'jade' })
  .then((result) => {
    result.pipe(fs.createWriteStream('/tmp/stream.pdf'));
  });
```

Javascript & Stylesheet
--------------------------

You can incorporate your own stylesheets or javascript files.

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
    return result.saveAs('./report.pdf');
  }).then(() => {
    //successful
  });
```

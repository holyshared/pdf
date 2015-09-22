/* @flow */

import { Writable } from 'stream';
import _ from 'lodash';
import Promise from 'bluebird';
import pdf from 'phantom-html2pdf';
import PDFResult from '../node_modules/phantom-html2pdf/lib/pdfResult.js';

type PageSizeOptions = {
  format?: string,
  orientation?: string,
  width?: string,
  height?: string,
  delay?: number
}

type Html2PDFOptions = {
  js?: string,
  css?: string,
  deleteOnAction?: boolean,
  pageSize?: PageSizeOptions,
  html?: string
}

export default function exporter(renderer: Object): PDFExpoter {
  return new PDFExpoter(renderer);
}

export class ResultWrapper {
  _result: PDFResult;

  constructor(result:PDFResult) {
    this._result = result;
  }
  saveAs(fileName:string) : Promise {
    return new Promise((resolve, reject) => {
      try {
        this._result.toFile(fileName, resolve);
      } catch (err) {
        reject(err);
      }
    });
  }
  pipe(stream:Writable) : void {
    let readStream = this._result.toStream();
    readStream.pipe(stream);
  }
}

export class PDFExpoter {
  _javascript: string;
  _stylesheet: string;
  _layout: PageSizeOptions;
  _forceCleanup: boolean;
  _renderer: Object;

  constructor(renderer:Object) {
    this._renderer = renderer;
    this._javascript = '';
    this._stylesheet = '';
    this._layout = {};
    this._forceCleanup = false;
  }
  // https://github.com/codemix/babel-plugin-typecheck/issues/2
  layout(layout:Object = {}): PDFExpoter {
    this._layout = layout;
    return this;
  }
  stylesheet(stylesheet: string): PDFExpoter {
    this._stylesheet = stylesheet;
    return this;
  }
  javascript(js: string): PDFExpoter {
    this._javascript = js;
    return this;
  }
  cleanup(): PDFExpoter {
    this._forceCleanup = true;
    return this;
  }
  render(template:string, values:Object): Promise {
    return Promise.bind(this).then(() => {
      return this._renderer.render(template, values);
    }).then((content) => {
      return this.renderPDF(content);
    });
  }
  renderPDF(content: string): Promise {
    var opts:Html2PDFOptions = {
      js: this._javascript,
      css: this._stylesheet,
      deleteOnAction: this._forceCleanup,
      pageSize: this._layout,
      html: content
    };

    return new Promise((resolve, reject) => {
      pdf.convert(opts, (result) => {
        resolve(new ResultWrapper(result));
      });
    });
  }
}

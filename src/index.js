import _ from 'lodash';
import Bluebird from 'bluebird';
import pdf from 'phantom-html2pdf';

export default function exporter(renderer) {
  return new PDFExpoter(renderer);
}

export class PDFExpoter {
  constructor(renderer) {
    this.renderer = renderer;
    this._javascript = '';
    this._stylesheet = '';
    this._layout = {};
    this._forceCleanup = false;
  }
  layout(layout = {}) {
    this._layout = layout;
    return this;
  }
  stylesheet(stylesheet) {
    this._stylesheet = stylesheet;
    return this;
  }
  javascript(js) {
    this._javascript = js;
    return this;
  }
  cleanup() {
    this._forceCleanup = true;
    return this;
  }
  render(template, values) {
    return Bluebird.bind(this).then(() => {
      return this.renderer.render(template, values);
    }).then((content) => {
      return this.renderPDF(content);
    });
  }
  renderPDF(content) {
    var opts = {
      js: this._javascript,
      css: this._stylesheet,
      deleteOnAction: this._forceCleanup,
      pageSize: this._layout,
      html: content
    };

    return new Bluebird((resolve, reject) => {
      pdf.convert(opts, (result) => {
        resolve(result);
      });
    });
  }
}

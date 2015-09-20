import Bluebird from 'bluebird';
import pdf from 'phantom-html2pdf';

export class Renderer {
  constructor(adapter) {
    this.adapter = adapter;
  }
  render(template, values) {
    return this.adapter.render(template, values);
  }
}

export class PDFExpoter {
  constructor(renderer) {
    this.renderer = renderer;
  }
  render(template, values) {
    return Bluebird.bind(this).then(() => {
      return this.renderer.render(template, values);
    }).then((content) => {
      return this.renderPDF(content);
    });
  }
  renderPDF(content) {
    return new Bluebird((resolve, reject) => {
      pdf.convert({
        html: content
      }, (result) => {
        resolve(result);
      });
    });
  }
}

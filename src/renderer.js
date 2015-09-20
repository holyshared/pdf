import * as jadeRenderer from 'jade';
import Bluebird from 'bluebird';
import _ from 'lodash';

export function jade(options = {}) {
  return new JadeRenderer(options);
}

export class JadeRenderer {
  constructor(options = {}) {
    this.options = options;
  }
  render(template, values = {}) {
    return new Bluebird((resolve, reject) => {
      let locals = _.merge(this.options, values);
      try {
        resolve( jadeRenderer.renderFile(template, locals) );
      } catch (err) {
        reject(err);
      }
    });
  }
}

import jade from 'jade';
import Bluebird from 'bluebird';
import _ from 'lodash';

export class JadeAdapter {
  constructor(options = {}) {
    this.options = options;
  }
  render(template, values = {}) {
    return new Bluebird((resolve, reject) => {
      let locals = _.merge(this.options, values);
      try {
        resolve( jade.renderFile(template, locals) );
      } catch (err) {
        reject(err);
      }
    });
  }
}

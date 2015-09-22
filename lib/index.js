'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports['default'] = exporter;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _phantomHtml2pdf = require('phantom-html2pdf');

var _phantomHtml2pdf2 = _interopRequireDefault(_phantomHtml2pdf);

function exporter(renderer) {
  if (typeof renderer !== 'object') throw new TypeError('Value of argument \'renderer\' violates contract, expected object got ' + (renderer === null ? 'null' : renderer instanceof Object && renderer.constructor ? renderer.constructor.name : typeof renderer));

  return new PDFExpoter(renderer);
}

var PDFExpoter = (function () {
  function PDFExpoter(renderer) {
    _classCallCheck(this, PDFExpoter);

    if (typeof renderer !== 'object') throw new TypeError('Value of argument \'renderer\' violates contract, expected object got ' + (renderer === null ? 'null' : renderer instanceof Object && renderer.constructor ? renderer.constructor.name : typeof renderer));

    this._renderer = renderer;
    this._javascript = '';
    this._stylesheet = '';
    this._layout = {};
    this._forceCleanup = false;
  }

  // https://github.com/codemix/babel-plugin-typecheck/issues/2

  _createClass(PDFExpoter, [{
    key: 'layout',
    value: function layout() {
      var _ref;

      var _layout = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      if (typeof _layout !== 'object') throw new TypeError('Value of argument \'layout\' violates contract, expected object got ' + (_layout === null ? 'null' : _layout instanceof Object && _layout.constructor ? _layout.constructor.name : typeof _layout));

      this._layout = _layout;
      _ref = this;
      if (!(_ref instanceof PDFExpoter)) throw new TypeError('Function return value violates contract, expected PDFExpoter got ' + (_ref === null ? 'null' : _ref instanceof Object && _ref.constructor ? _ref.constructor.name : typeof _ref));
      return _ref;
    }
  }, {
    key: 'stylesheet',
    value: function stylesheet(_stylesheet) {
      var _ref2;

      if (typeof _stylesheet !== 'string') throw new TypeError('Value of argument \'stylesheet\' violates contract, expected string got ' + (_stylesheet === null ? 'null' : _stylesheet instanceof Object && _stylesheet.constructor ? _stylesheet.constructor.name : typeof _stylesheet));

      this._stylesheet = _stylesheet;
      _ref2 = this;
      if (!(_ref2 instanceof PDFExpoter)) throw new TypeError('Function return value violates contract, expected PDFExpoter got ' + (_ref2 === null ? 'null' : _ref2 instanceof Object && _ref2.constructor ? _ref2.constructor.name : typeof _ref2));
      return _ref2;
    }
  }, {
    key: 'javascript',
    value: function javascript(js) {
      var _ref3;

      if (typeof js !== 'string') throw new TypeError('Value of argument \'js\' violates contract, expected string got ' + (js === null ? 'null' : js instanceof Object && js.constructor ? js.constructor.name : typeof js));

      this._javascript = js;
      _ref3 = this;
      if (!(_ref3 instanceof PDFExpoter)) throw new TypeError('Function return value violates contract, expected PDFExpoter got ' + (_ref3 === null ? 'null' : _ref3 instanceof Object && _ref3.constructor ? _ref3.constructor.name : typeof _ref3));
      return _ref3;
    }
  }, {
    key: 'cleanup',
    value: function cleanup() {
      var _ref4;

      this._forceCleanup = true;
      _ref4 = this;
      if (!(_ref4 instanceof PDFExpoter)) throw new TypeError('Function return value violates contract, expected PDFExpoter got ' + (_ref4 === null ? 'null' : _ref4 instanceof Object && _ref4.constructor ? _ref4.constructor.name : typeof _ref4));
      return _ref4;
    }
  }, {
    key: 'render',
    value: function render(template, values) {
      var _Promise$bind$then$then,
          _this = this;

      if (typeof template !== 'string') throw new TypeError('Value of argument \'template\' violates contract, expected string got ' + (template === null ? 'null' : template instanceof Object && template.constructor ? template.constructor.name : typeof template));
      if (typeof values !== 'object') throw new TypeError('Value of argument \'values\' violates contract, expected object got ' + (values === null ? 'null' : values instanceof Object && values.constructor ? values.constructor.name : typeof values));
      _Promise$bind$then$then = _bluebird2['default'].bind(this).then(function () {
        return _this._renderer.render(template, values);
      }).then(function (content) {
        return _this.renderPDF(content);
      });
      if (!(_Promise$bind$then$then instanceof _bluebird2['default'])) throw new TypeError('Function return value violates contract, expected Promise got ' + (_Promise$bind$then$then === null ? 'null' : _Promise$bind$then$then instanceof Object && _Promise$bind$then$then.constructor ? _Promise$bind$then$then.constructor.name : typeof _Promise$bind$then$then));
      return _Promise$bind$then$then;
    }
  }, {
    key: 'renderPDF',
    value: function renderPDF(content) {
      if (typeof content !== 'string') throw new TypeError('Value of argument \'content\' violates contract, expected string got ' + (content === null ? 'null' : content instanceof Object && content.constructor ? content.constructor.name : typeof content));

      var opts = {
        js: this._javascript,
        css: this._stylesheet,
        deleteOnAction: this._forceCleanup,
        pageSize: this._layout,
        html: content
      };

      return new _bluebird2['default'](function (resolve, reject) {
        _phantomHtml2pdf2['default'].convert(opts, function (result) {
          resolve(result);
        });
      });
    }
  }]);

  return PDFExpoter;
})();

exports.PDFExpoter = PDFExpoter;
//# sourceMappingURL=data:application/json;base64,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QUVGLGFBQU8sMEJBQVksVUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFLO0FBQ3RDLHFDQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUUsVUFBQyxNQUFNLEVBQUs7QUFDNUIsaUJBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNqQixDQUFDLENBQUM7T0FDSixDQUFDLENBQUM7S0FDSjs7O1NBcERVLFVBQVUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAZmxvdyAqL1xuXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFByb21pc2UgZnJvbSAnYmx1ZWJpcmQnO1xuaW1wb3J0IHBkZiBmcm9tICdwaGFudG9tLWh0bWwycGRmJztcblxudHlwZSBQYWdlU2l6ZU9wdGlvbnMgPSB7XG4gIGZvcm1hdD86IHN0cmluZyxcbiAgb3JpZW50YXRpb24/OiBzdHJpbmcsXG4gIHdpZHRoPzogc3RyaW5nLFxuICBoZWlnaHQ/OiBzdHJpbmcsXG4gIGRlbGF5PzogbnVtYmVyXG59XG5cbnR5cGUgSHRtbDJQREZPcHRpb25zID0ge1xuICBqcz86IHN0cmluZyxcbiAgY3NzPzogc3RyaW5nLFxuICBkZWxldGVPbkFjdGlvbj86IGJvb2xlYW4sXG4gIHBhZ2VTaXplPzogUGFnZVNpemVPcHRpb25zLFxuICBodG1sPzogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4cG9ydGVyKHJlbmRlcmVyOiBPYmplY3QpOiBQREZFeHBvdGVyIHtcbiAgcmV0dXJuIG5ldyBQREZFeHBvdGVyKHJlbmRlcmVyKTtcbn1cblxuZXhwb3J0IGNsYXNzIFBERkV4cG90ZXIge1xuICBfamF2YXNjcmlwdDogc3RyaW5nO1xuICBfc3R5bGVzaGVldDogc3RyaW5nO1xuICBfbGF5b3V0OiBQYWdlU2l6ZU9wdGlvbnM7XG4gIF9mb3JjZUNsZWFudXA6IGJvb2xlYW47XG4gIF9yZW5kZXJlcjogT2JqZWN0O1xuXG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyOk9iamVjdCkge1xuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgdGhpcy5famF2YXNjcmlwdCA9ICcnO1xuICAgIHRoaXMuX3N0eWxlc2hlZXQgPSAnJztcbiAgICB0aGlzLl9sYXlvdXQgPSB7fTtcbiAgICB0aGlzLl9mb3JjZUNsZWFudXAgPSBmYWxzZTtcbiAgfVxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vY29kZW1peC9iYWJlbC1wbHVnaW4tdHlwZWNoZWNrL2lzc3Vlcy8yXG4gIGxheW91dChsYXlvdXQ6T2JqZWN0ID0ge30pOiBQREZFeHBvdGVyIHtcbiAgICB0aGlzLl9sYXlvdXQgPSBsYXlvdXQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc3R5bGVzaGVldChzdHlsZXNoZWV0OiBzdHJpbmcpOiBQREZFeHBvdGVyIHtcbiAgICB0aGlzLl9zdHlsZXNoZWV0ID0gc3R5bGVzaGVldDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBqYXZhc2NyaXB0KGpzOiBzdHJpbmcpOiBQREZFeHBvdGVyIHtcbiAgICB0aGlzLl9qYXZhc2NyaXB0ID0ganM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgY2xlYW51cCgpOiBQREZFeHBvdGVyIHtcbiAgICB0aGlzLl9mb3JjZUNsZWFudXAgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHJlbmRlcih0ZW1wbGF0ZTpzdHJpbmcsIHZhbHVlczpPYmplY3QpOiBQcm9taXNlIHtcbiAgICByZXR1cm4gUHJvbWlzZS5iaW5kKHRoaXMpLnRoZW4oKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcmVyLnJlbmRlcih0ZW1wbGF0ZSwgdmFsdWVzKTtcbiAgICB9KS50aGVuKChjb250ZW50KSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJQREYoY29udGVudCk7XG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyUERGKGNvbnRlbnQ6IHN0cmluZyk6IFByb21pc2Uge1xuICAgIHZhciBvcHRzOkh0bWwyUERGT3B0aW9ucyA9IHtcbiAgICAgIGpzOiB0aGlzLl9qYXZhc2NyaXB0LFxuICAgICAgY3NzOiB0aGlzLl9zdHlsZXNoZWV0LFxuICAgICAgZGVsZXRlT25BY3Rpb246IHRoaXMuX2ZvcmNlQ2xlYW51cCxcbiAgICAgIHBhZ2VTaXplOiB0aGlzLl9sYXlvdXQsXG4gICAgICBodG1sOiBjb250ZW50XG4gICAgfTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBwZGYuY29udmVydChvcHRzLCAocmVzdWx0KSA9PiB7XG4gICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=
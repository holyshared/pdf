'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports['default'] = exporter;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _stream = require('stream');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _phantomHtml2pdf = require('phantom-html2pdf');

var _phantomHtml2pdf2 = _interopRequireDefault(_phantomHtml2pdf);

var _node_modulesPhantomHtml2pdfLibPdfResultJs = require('../node_modules/phantom-html2pdf/lib/pdfResult.js');

var _node_modulesPhantomHtml2pdfLibPdfResultJs2 = _interopRequireDefault(_node_modulesPhantomHtml2pdfLibPdfResultJs);

function exporter(renderer) {
  if (typeof renderer !== 'object') throw new TypeError('Value of argument \'renderer\' violates contract, expected object got ' + (renderer === null ? 'null' : renderer instanceof Object && renderer.constructor ? renderer.constructor.name : typeof renderer));

  return new PDFExpoter(renderer);
}

var ResultWrapper = (function () {
  function ResultWrapper(result) {
    _classCallCheck(this, ResultWrapper);

    if (!(result instanceof _node_modulesPhantomHtml2pdfLibPdfResultJs2['default'])) throw new TypeError('Value of argument \'result\' violates contract, expected PDFResult got ' + (result === null ? 'null' : result instanceof Object && result.constructor ? result.constructor.name : typeof result));

    this._result = result;
  }

  _createClass(ResultWrapper, [{
    key: 'saveAs',
    value: function saveAs(fileName) {
      var _this = this;

      if (typeof fileName !== 'string') throw new TypeError('Value of argument \'fileName\' violates contract, expected string got ' + (fileName === null ? 'null' : fileName instanceof Object && fileName.constructor ? fileName.constructor.name : typeof fileName));

      return new _bluebird2['default'](function (resolve, reject) {
        try {
          _this._result.toFile(fileName, resolve);
        } catch (err) {
          reject(err);
        }
      });
    }
  }, {
    key: 'pipe',
    value: function pipe(stream) {
      if (!(stream instanceof _stream.Writable)) throw new TypeError('Value of argument \'stream\' violates contract, expected Writable got ' + (stream === null ? 'null' : stream instanceof Object && stream.constructor ? stream.constructor.name : typeof stream));

      var readStream = this._result.toStream();
      readStream.pipe(stream);
    }
  }]);

  return ResultWrapper;
})();

exports.ResultWrapper = ResultWrapper;

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
          _this2 = this;

      if (typeof template !== 'string') throw new TypeError('Value of argument \'template\' violates contract, expected string got ' + (template === null ? 'null' : template instanceof Object && template.constructor ? template.constructor.name : typeof template));
      if (typeof values !== 'object') throw new TypeError('Value of argument \'values\' violates contract, expected object got ' + (values === null ? 'null' : values instanceof Object && values.constructor ? values.constructor.name : typeof values));
      _Promise$bind$then$then = _bluebird2['default'].bind(this).then(function () {
        return _this2._renderer.render(template, values);
      }).then(function (content) {
        return _this2.renderPDF(content);
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
          resolve(new ResultWrapper(result));
        });
      });
    }
  }]);

  return PDFExpoter;
})();

exports.PDFExpoter = PDFExpoter;
//# sourceMappingURL=data:application/json;base64,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ZXNDb250ZW50IjpbIi8qIEBmbG93ICovXG5cbmltcG9ydCB7IFdyaXRhYmxlIH0gZnJvbSAnc3RyZWFtJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUHJvbWlzZSBmcm9tICdibHVlYmlyZCc7XG5pbXBvcnQgcGRmIGZyb20gJ3BoYW50b20taHRtbDJwZGYnO1xuaW1wb3J0IFBERlJlc3VsdCBmcm9tICcuLi9ub2RlX21vZHVsZXMvcGhhbnRvbS1odG1sMnBkZi9saWIvcGRmUmVzdWx0LmpzJztcblxudHlwZSBQYWdlU2l6ZU9wdGlvbnMgPSB7XG4gIGZvcm1hdD86IHN0cmluZyxcbiAgb3JpZW50YXRpb24/OiBzdHJpbmcsXG4gIHdpZHRoPzogc3RyaW5nLFxuICBoZWlnaHQ/OiBzdHJpbmcsXG4gIGRlbGF5PzogbnVtYmVyXG59XG5cbnR5cGUgSHRtbDJQREZPcHRpb25zID0ge1xuICBqcz86IHN0cmluZyxcbiAgY3NzPzogc3RyaW5nLFxuICBkZWxldGVPbkFjdGlvbj86IGJvb2xlYW4sXG4gIHBhZ2VTaXplPzogUGFnZVNpemVPcHRpb25zLFxuICBodG1sPzogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4cG9ydGVyKHJlbmRlcmVyOiBPYmplY3QpOiBQREZFeHBvdGVyIHtcbiAgcmV0dXJuIG5ldyBQREZFeHBvdGVyKHJlbmRlcmVyKTtcbn1cblxuZXhwb3J0IGNsYXNzIFJlc3VsdFdyYXBwZXIge1xuICBfcmVzdWx0OiBQREZSZXN1bHQ7XG5cbiAgY29uc3RydWN0b3IocmVzdWx0OlBERlJlc3VsdCkge1xuICAgIHRoaXMuX3Jlc3VsdCA9IHJlc3VsdDtcbiAgfVxuICBzYXZlQXMoZmlsZU5hbWU6c3RyaW5nKSA6IFByb21pc2Uge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLl9yZXN1bHQudG9GaWxlKGZpbGVOYW1lLCByZXNvbHZlKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBwaXBlKHN0cmVhbTpXcml0YWJsZSkgOiB2b2lkIHtcbiAgICBsZXQgcmVhZFN0cmVhbSA9IHRoaXMuX3Jlc3VsdC50b1N0cmVhbSgpO1xuICAgIHJlYWRTdHJlYW0ucGlwZShzdHJlYW0pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQREZFeHBvdGVyIHtcbiAgX2phdmFzY3JpcHQ6IHN0cmluZztcbiAgX3N0eWxlc2hlZXQ6IHN0cmluZztcbiAgX2xheW91dDogUGFnZVNpemVPcHRpb25zO1xuICBfZm9yY2VDbGVhbnVwOiBib29sZWFuO1xuICBfcmVuZGVyZXI6IE9iamVjdDtcblxuICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpPYmplY3QpIHtcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIHRoaXMuX2phdmFzY3JpcHQgPSAnJztcbiAgICB0aGlzLl9zdHlsZXNoZWV0ID0gJyc7XG4gICAgdGhpcy5fbGF5b3V0ID0ge307XG4gICAgdGhpcy5fZm9yY2VDbGVhbnVwID0gZmFsc2U7XG4gIH1cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2NvZGVtaXgvYmFiZWwtcGx1Z2luLXR5cGVjaGVjay9pc3N1ZXMvMlxuICBsYXlvdXQobGF5b3V0Ok9iamVjdCA9IHt9KTogUERGRXhwb3RlciB7XG4gICAgdGhpcy5fbGF5b3V0ID0gbGF5b3V0O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHN0eWxlc2hlZXQoc3R5bGVzaGVldDogc3RyaW5nKTogUERGRXhwb3RlciB7XG4gICAgdGhpcy5fc3R5bGVzaGVldCA9IHN0eWxlc2hlZXQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgamF2YXNjcmlwdChqczogc3RyaW5nKTogUERGRXhwb3RlciB7XG4gICAgdGhpcy5famF2YXNjcmlwdCA9IGpzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGNsZWFudXAoKTogUERGRXhwb3RlciB7XG4gICAgdGhpcy5fZm9yY2VDbGVhbnVwID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICByZW5kZXIodGVtcGxhdGU6c3RyaW5nLCB2YWx1ZXM6T2JqZWN0KTogUHJvbWlzZSB7XG4gICAgcmV0dXJuIFByb21pc2UuYmluZCh0aGlzKS50aGVuKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJlci5yZW5kZXIodGVtcGxhdGUsIHZhbHVlcyk7XG4gICAgfSkudGhlbigoY29udGVudCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyUERGKGNvbnRlbnQpO1xuICAgIH0pO1xuICB9XG4gIHJlbmRlclBERihjb250ZW50OiBzdHJpbmcpOiBQcm9taXNlIHtcbiAgICB2YXIgb3B0czpIdG1sMlBERk9wdGlvbnMgPSB7XG4gICAgICBqczogdGhpcy5famF2YXNjcmlwdCxcbiAgICAgIGNzczogdGhpcy5fc3R5bGVzaGVldCxcbiAgICAgIGRlbGV0ZU9uQWN0aW9uOiB0aGlzLl9mb3JjZUNsZWFudXAsXG4gICAgICBwYWdlU2l6ZTogdGhpcy5fbGF5b3V0LFxuICAgICAgaHRtbDogY29udGVudFxuICAgIH07XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcGRmLmNvbnZlcnQob3B0cywgKHJlc3VsdCkgPT4ge1xuICAgICAgICByZXNvbHZlKG5ldyBSZXN1bHRXcmFwcGVyKHJlc3VsdCkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
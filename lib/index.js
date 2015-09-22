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
  }, {
    key: 'bufferize',
    value: function bufferize() {
      var _this2 = this;

      return new _bluebird2['default'](function (resolve, reject) {
        try {
          _this2._result.toBuffer(resolve);
        } catch (err) {
          reject(err);
        }
      });
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
          _this3 = this;

      if (typeof template !== 'string') throw new TypeError('Value of argument \'template\' violates contract, expected string got ' + (template === null ? 'null' : template instanceof Object && template.constructor ? template.constructor.name : typeof template));
      if (typeof values !== 'object') throw new TypeError('Value of argument \'values\' violates contract, expected object got ' + (values === null ? 'null' : values instanceof Object && values.constructor ? values.constructor.name : typeof values));
      _Promise$bind$then$then = _bluebird2['default'].bind(this).then(function () {
        return _this3._renderer.render(template, values);
      }).then(function (content) {
        return _this3.renderPDF(content);
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
//# sourceMappingURL=data:application/json;base64,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QUFDLE9BQU8sRUFBRSxNQUFNLEVBQUs7QUFDdEMscUNBQUksT0FBTyxDQUFDLElBQUksRUFBRSxVQUFDLE1BQU0sRUFBSztBQUM1QixpQkFBTyxDQUFDLElBQUksYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDcEMsQ0FBQyxDQUFDO09BQ0osQ0FBQyxDQUFDO0tBQ0o7OztTQXBEVSxVQUFVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGZsb3cgKi9cblxuaW1wb3J0IHsgV3JpdGFibGUgfSBmcm9tICdzdHJlYW0nO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBQcm9taXNlIGZyb20gJ2JsdWViaXJkJztcbmltcG9ydCBwZGYgZnJvbSAncGhhbnRvbS1odG1sMnBkZic7XG5pbXBvcnQgUERGUmVzdWx0IGZyb20gJy4uL25vZGVfbW9kdWxlcy9waGFudG9tLWh0bWwycGRmL2xpYi9wZGZSZXN1bHQuanMnO1xuXG50eXBlIFBhZ2VTaXplT3B0aW9ucyA9IHtcbiAgZm9ybWF0Pzogc3RyaW5nLFxuICBvcmllbnRhdGlvbj86IHN0cmluZyxcbiAgd2lkdGg/OiBzdHJpbmcsXG4gIGhlaWdodD86IHN0cmluZyxcbiAgZGVsYXk/OiBudW1iZXJcbn1cblxudHlwZSBIdG1sMlBERk9wdGlvbnMgPSB7XG4gIGpzPzogc3RyaW5nLFxuICBjc3M/OiBzdHJpbmcsXG4gIGRlbGV0ZU9uQWN0aW9uPzogYm9vbGVhbixcbiAgcGFnZVNpemU/OiBQYWdlU2l6ZU9wdGlvbnMsXG4gIGh0bWw/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXhwb3J0ZXIocmVuZGVyZXI6IE9iamVjdCk6IFBERkV4cG90ZXIge1xuICByZXR1cm4gbmV3IFBERkV4cG90ZXIocmVuZGVyZXIpO1xufVxuXG5leHBvcnQgY2xhc3MgUmVzdWx0V3JhcHBlciB7XG4gIF9yZXN1bHQ6IFBERlJlc3VsdDtcblxuICBjb25zdHJ1Y3RvcihyZXN1bHQ6UERGUmVzdWx0KSB7XG4gICAgdGhpcy5fcmVzdWx0ID0gcmVzdWx0O1xuICB9XG4gIHNhdmVBcyhmaWxlTmFtZTpzdHJpbmcpIDogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuX3Jlc3VsdC50b0ZpbGUoZmlsZU5hbWUsIHJlc29sdmUpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHBpcGUoc3RyZWFtOldyaXRhYmxlKSA6IHZvaWQge1xuICAgIGxldCByZWFkU3RyZWFtID0gdGhpcy5fcmVzdWx0LnRvU3RyZWFtKCk7XG4gICAgcmVhZFN0cmVhbS5waXBlKHN0cmVhbSk7XG4gIH1cbiAgYnVmZmVyaXplKCkgOiBQcm9taXNlPEJ1ZmZlcj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLl9yZXN1bHQudG9CdWZmZXIocmVzb2x2ZSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBERkV4cG90ZXIge1xuICBfamF2YXNjcmlwdDogc3RyaW5nO1xuICBfc3R5bGVzaGVldDogc3RyaW5nO1xuICBfbGF5b3V0OiBQYWdlU2l6ZU9wdGlvbnM7XG4gIF9mb3JjZUNsZWFudXA6IGJvb2xlYW47XG4gIF9yZW5kZXJlcjogT2JqZWN0O1xuXG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyOk9iamVjdCkge1xuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgdGhpcy5famF2YXNjcmlwdCA9ICcnO1xuICAgIHRoaXMuX3N0eWxlc2hlZXQgPSAnJztcbiAgICB0aGlzLl9sYXlvdXQgPSB7fTtcbiAgICB0aGlzLl9mb3JjZUNsZWFudXAgPSBmYWxzZTtcbiAgfVxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vY29kZW1peC9iYWJlbC1wbHVnaW4tdHlwZWNoZWNrL2lzc3Vlcy8yXG4gIGxheW91dChsYXlvdXQ6T2JqZWN0ID0ge30pOiBQREZFeHBvdGVyIHtcbiAgICB0aGlzLl9sYXlvdXQgPSBsYXlvdXQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc3R5bGVzaGVldChzdHlsZXNoZWV0OiBzdHJpbmcpOiBQREZFeHBvdGVyIHtcbiAgICB0aGlzLl9zdHlsZXNoZWV0ID0gc3R5bGVzaGVldDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBqYXZhc2NyaXB0KGpzOiBzdHJpbmcpOiBQREZFeHBvdGVyIHtcbiAgICB0aGlzLl9qYXZhc2NyaXB0ID0ganM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgY2xlYW51cCgpOiBQREZFeHBvdGVyIHtcbiAgICB0aGlzLl9mb3JjZUNsZWFudXAgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHJlbmRlcih0ZW1wbGF0ZTpzdHJpbmcsIHZhbHVlczpPYmplY3QpOiBQcm9taXNlIHtcbiAgICByZXR1cm4gUHJvbWlzZS5iaW5kKHRoaXMpLnRoZW4oKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcmVyLnJlbmRlcih0ZW1wbGF0ZSwgdmFsdWVzKTtcbiAgICB9KS50aGVuKChjb250ZW50KSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJQREYoY29udGVudCk7XG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyUERGKGNvbnRlbnQ6IHN0cmluZyk6IFByb21pc2Uge1xuICAgIHZhciBvcHRzOkh0bWwyUERGT3B0aW9ucyA9IHtcbiAgICAgIGpzOiB0aGlzLl9qYXZhc2NyaXB0LFxuICAgICAgY3NzOiB0aGlzLl9zdHlsZXNoZWV0LFxuICAgICAgZGVsZXRlT25BY3Rpb246IHRoaXMuX2ZvcmNlQ2xlYW51cCxcbiAgICAgIHBhZ2VTaXplOiB0aGlzLl9sYXlvdXQsXG4gICAgICBodG1sOiBjb250ZW50XG4gICAgfTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBwZGYuY29udmVydChvcHRzLCAocmVzdWx0KSA9PiB7XG4gICAgICAgIHJlc29sdmUobmV3IFJlc3VsdFdyYXBwZXIocmVzdWx0KSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19
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

    this.renderer = renderer;
    this._javascript = '';
    this._stylesheet = '';
    this._layout = {};
    this._forceCleanup = false;
  }

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
        return _this.renderer.render(template, values);
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
//# sourceMappingURL=data:application/json;base64,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TywwQkFBWSxVQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUs7QUFDdEMscUNBQUksT0FBTyxDQUFDLElBQUksRUFBRSxVQUFDLE1BQU0sRUFBSztBQUM1QixpQkFBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pCLENBQUMsQ0FBQztPQUNKLENBQUMsQ0FBQztLQUNKOzs7U0FuRFUsVUFBVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBmbG93ICovXG5cbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUHJvbWlzZSBmcm9tICdibHVlYmlyZCc7XG5pbXBvcnQgcGRmIGZyb20gJ3BoYW50b20taHRtbDJwZGYnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleHBvcnRlcihyZW5kZXJlcjogT2JqZWN0KTogUERGRXhwb3RlciB7XG4gIHJldHVybiBuZXcgUERGRXhwb3RlcihyZW5kZXJlcik7XG59XG5cbmV4cG9ydCBjbGFzcyBQREZFeHBvdGVyIHtcbiAgX2phdmFzY3JpcHQ6IHN0cmluZztcbiAgX3N0eWxlc2hlZXQ6IHN0cmluZztcbiAgX2xheW91dDogT2JqZWN0O1xuICBfZm9yY2VDbGVhbnVwOiBib29sZWFuO1xuICByZW5kZXJlcjogT2JqZWN0O1xuXG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyOk9iamVjdCkge1xuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICB0aGlzLl9qYXZhc2NyaXB0ID0gJyc7XG4gICAgdGhpcy5fc3R5bGVzaGVldCA9ICcnO1xuICAgIHRoaXMuX2xheW91dCA9IHt9O1xuICAgIHRoaXMuX2ZvcmNlQ2xlYW51cCA9IGZhbHNlO1xuICB9XG4gIGxheW91dChsYXlvdXQ6T2JqZWN0ID0ge30pOiBQREZFeHBvdGVyIHtcbiAgICB0aGlzLl9sYXlvdXQgPSBsYXlvdXQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc3R5bGVzaGVldChzdHlsZXNoZWV0OiBzdHJpbmcpOiBQREZFeHBvdGVyIHtcbiAgICB0aGlzLl9zdHlsZXNoZWV0ID0gc3R5bGVzaGVldDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBqYXZhc2NyaXB0KGpzOiBzdHJpbmcpOiBQREZFeHBvdGVyIHtcbiAgICB0aGlzLl9qYXZhc2NyaXB0ID0ganM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgY2xlYW51cCgpOiBQREZFeHBvdGVyIHtcbiAgICB0aGlzLl9mb3JjZUNsZWFudXAgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHJlbmRlcih0ZW1wbGF0ZTpzdHJpbmcsIHZhbHVlczpPYmplY3QpOiBQcm9taXNlIHtcbiAgICByZXR1cm4gUHJvbWlzZS5iaW5kKHRoaXMpLnRoZW4oKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIucmVuZGVyKHRlbXBsYXRlLCB2YWx1ZXMpO1xuICAgIH0pLnRoZW4oKGNvbnRlbnQpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlclBERihjb250ZW50KTtcbiAgICB9KTtcbiAgfVxuICByZW5kZXJQREYoY29udGVudDogc3RyaW5nKTogUHJvbWlzZSB7XG4gICAgdmFyIG9wdHMgPSB7XG4gICAgICBqczogdGhpcy5famF2YXNjcmlwdCxcbiAgICAgIGNzczogdGhpcy5fc3R5bGVzaGVldCxcbiAgICAgIGRlbGV0ZU9uQWN0aW9uOiB0aGlzLl9mb3JjZUNsZWFudXAsXG4gICAgICBwYWdlU2l6ZTogdGhpcy5fbGF5b3V0LFxuICAgICAgaHRtbDogY29udGVudFxuICAgIH07XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcGRmLmNvbnZlcnQob3B0cywgKHJlc3VsdCkgPT4ge1xuICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19
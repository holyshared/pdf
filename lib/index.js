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
  return new PDFExpoter(renderer);
}

var PDFExpoter = (function () {
  function PDFExpoter(renderer) {
    _classCallCheck(this, PDFExpoter);

    this.renderer = renderer;
    this._javascript = '';
    this._stylesheet = '';
    this._layout = {};
    this._forceCleanup = false;
  }

  _createClass(PDFExpoter, [{
    key: 'layout',
    value: function layout() {
      var _layout = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      this._layout = _layout;
      return this;
    }
  }, {
    key: 'stylesheet',
    value: function stylesheet(_stylesheet) {
      this._stylesheet = _stylesheet;
      return this;
    }
  }, {
    key: 'javascript',
    value: function javascript(js) {
      this._javascript = js;
      return this;
    }
  }, {
    key: 'cleanup',
    value: function cleanup() {
      this._forceCleanup = true;
      return this;
    }
  }, {
    key: 'render',
    value: function render(template, values) {
      var _this = this;

      return _bluebird2['default'].bind(this).then(function () {
        return _this.renderer.render(template, values);
      }).then(function (content) {
        return _this.renderPDF(content);
      });
    }
  }, {
    key: 'renderPDF',
    value: function renderPDF(content) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztxQkFJd0IsUUFBUTs7Ozs7O3NCQUpsQixRQUFROzs7O3dCQUNELFVBQVU7Ozs7K0JBQ2Ysa0JBQWtCOzs7O0FBRW5CLFNBQVMsUUFBUSxDQUFDLFFBQVEsRUFBRTtBQUN6QyxTQUFPLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0NBQ2pDOztJQUVZLFVBQVU7QUFDVixXQURBLFVBQVUsQ0FDVCxRQUFRLEVBQUU7MEJBRFgsVUFBVTs7QUFFbkIsUUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7QUFDekIsUUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7QUFDdEIsUUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7QUFDdEIsUUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFDbEIsUUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7R0FDNUI7O2VBUFUsVUFBVTs7V0FRZixrQkFBYztVQUFiLE9BQU0seURBQUcsRUFBRTs7QUFDaEIsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFNLENBQUM7QUFDdEIsYUFBTyxJQUFJLENBQUM7S0FDYjs7O1dBQ1Msb0JBQUMsV0FBVSxFQUFFO0FBQ3JCLFVBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVSxDQUFDO0FBQzlCLGFBQU8sSUFBSSxDQUFDO0tBQ2I7OztXQUNTLG9CQUFDLEVBQUUsRUFBRTtBQUNiLFVBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLGFBQU8sSUFBSSxDQUFDO0tBQ2I7OztXQUNNLG1CQUFHO0FBQ1IsVUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7QUFDMUIsYUFBTyxJQUFJLENBQUM7S0FDYjs7O1dBQ0ssZ0JBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRTs7O0FBQ3ZCLGFBQU8sc0JBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFNO0FBQ3BDLGVBQU8sTUFBSyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztPQUMvQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBTyxFQUFLO0FBQ25CLGVBQU8sTUFBSyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7T0FDaEMsQ0FBQyxDQUFDO0tBQ0o7OztXQUNRLG1CQUFDLE9BQU8sRUFBRTtBQUNqQixVQUFJLElBQUksR0FBRztBQUNULFVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVztBQUNwQixXQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVc7QUFDckIsc0JBQWMsRUFBRSxJQUFJLENBQUMsYUFBYTtBQUNsQyxnQkFBUSxFQUFFLElBQUksQ0FBQyxPQUFPO0FBQ3RCLFlBQUksRUFBRSxPQUFPO09BQ2QsQ0FBQzs7QUFFRixhQUFPLDBCQUFhLFVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBSztBQUN2QyxxQ0FBSSxPQUFPLENBQUMsSUFBSSxFQUFFLFVBQUMsTUFBTSxFQUFLO0FBQzVCLGlCQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDakIsQ0FBQyxDQUFDO09BQ0osQ0FBQyxDQUFDO0tBQ0o7OztTQTdDVSxVQUFVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBCbHVlYmlyZCBmcm9tICdibHVlYmlyZCc7XG5pbXBvcnQgcGRmIGZyb20gJ3BoYW50b20taHRtbDJwZGYnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleHBvcnRlcihyZW5kZXJlcikge1xuICByZXR1cm4gbmV3IFBERkV4cG90ZXIocmVuZGVyZXIpO1xufVxuXG5leHBvcnQgY2xhc3MgUERGRXhwb3RlciB7XG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyKSB7XG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIHRoaXMuX2phdmFzY3JpcHQgPSAnJztcbiAgICB0aGlzLl9zdHlsZXNoZWV0ID0gJyc7XG4gICAgdGhpcy5fbGF5b3V0ID0ge307XG4gICAgdGhpcy5fZm9yY2VDbGVhbnVwID0gZmFsc2U7XG4gIH1cbiAgbGF5b3V0KGxheW91dCA9IHt9KSB7XG4gICAgdGhpcy5fbGF5b3V0ID0gbGF5b3V0O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHN0eWxlc2hlZXQoc3R5bGVzaGVldCkge1xuICAgIHRoaXMuX3N0eWxlc2hlZXQgPSBzdHlsZXNoZWV0O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGphdmFzY3JpcHQoanMpIHtcbiAgICB0aGlzLl9qYXZhc2NyaXB0ID0ganM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgY2xlYW51cCgpIHtcbiAgICB0aGlzLl9mb3JjZUNsZWFudXAgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHJlbmRlcih0ZW1wbGF0ZSwgdmFsdWVzKSB7XG4gICAgcmV0dXJuIEJsdWViaXJkLmJpbmQodGhpcykudGhlbigoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5yZW5kZXIodGVtcGxhdGUsIHZhbHVlcyk7XG4gICAgfSkudGhlbigoY29udGVudCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyUERGKGNvbnRlbnQpO1xuICAgIH0pO1xuICB9XG4gIHJlbmRlclBERihjb250ZW50KSB7XG4gICAgdmFyIG9wdHMgPSB7XG4gICAgICBqczogdGhpcy5famF2YXNjcmlwdCxcbiAgICAgIGNzczogdGhpcy5fc3R5bGVzaGVldCxcbiAgICAgIGRlbGV0ZU9uQWN0aW9uOiB0aGlzLl9mb3JjZUNsZWFudXAsXG4gICAgICBwYWdlU2l6ZTogdGhpcy5fbGF5b3V0LFxuICAgICAgaHRtbDogY29udGVudFxuICAgIH07XG5cbiAgICByZXR1cm4gbmV3IEJsdWViaXJkKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHBkZi5jb252ZXJ0KG9wdHMsIChyZXN1bHQpID0+IHtcbiAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
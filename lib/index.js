'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _phantomHtml2pdf = require('phantom-html2pdf');

var _phantomHtml2pdf2 = _interopRequireDefault(_phantomHtml2pdf);

var Renderer = (function () {
  function Renderer(adapter) {
    _classCallCheck(this, Renderer);

    this.adapter = adapter;
  }

  _createClass(Renderer, [{
    key: 'render',
    value: function render(template, values) {
      return this.adapter.render(template, values);
    }
  }]);

  return Renderer;
})();

exports.Renderer = Renderer;

var PDFExpoter = (function () {
  function PDFExpoter(renderer) {
    _classCallCheck(this, PDFExpoter);

    this.renderer = renderer;
  }

  _createClass(PDFExpoter, [{
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
      return new _bluebird2['default'](function (resolve, reject) {
        _phantomHtml2pdf2['default'].convert({
          html: content
        }, function (result) {
          resolve(result);
        });
      });
    }
  }]);

  return PDFExpoter;
})();

exports.PDFExpoter = PDFExpoter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7d0JBQXFCLFVBQVU7Ozs7K0JBQ2Ysa0JBQWtCOzs7O0lBRXJCLFFBQVE7QUFDUixXQURBLFFBQVEsQ0FDUCxPQUFPLEVBQUU7MEJBRFYsUUFBUTs7QUFFakIsUUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7R0FDeEI7O2VBSFUsUUFBUTs7V0FJYixnQkFBQyxRQUFRLEVBQUUsTUFBTSxFQUFFO0FBQ3ZCLGFBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQzlDOzs7U0FOVSxRQUFROzs7OztJQVNSLFVBQVU7QUFDVixXQURBLFVBQVUsQ0FDVCxRQUFRLEVBQUU7MEJBRFgsVUFBVTs7QUFFbkIsUUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7R0FDMUI7O2VBSFUsVUFBVTs7V0FJZixnQkFBQyxRQUFRLEVBQUUsTUFBTSxFQUFFOzs7QUFDdkIsYUFBTyxzQkFBUyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQU07QUFDcEMsZUFBTyxNQUFLLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO09BQy9DLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFPLEVBQUs7QUFDbkIsZUFBTyxNQUFLLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztPQUNoQyxDQUFDLENBQUM7S0FDSjs7O1dBQ1EsbUJBQUMsT0FBTyxFQUFFO0FBQ2pCLGFBQU8sMEJBQWEsVUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFLO0FBQ3ZDLHFDQUFJLE9BQU8sQ0FBQztBQUNWLGNBQUksRUFBRSxPQUFPO1NBQ2QsRUFBRSxVQUFDLE1BQU0sRUFBSztBQUNiLGlCQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDakIsQ0FBQyxDQUFDO09BQ0osQ0FBQyxDQUFDO0tBQ0o7OztTQW5CVSxVQUFVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsdWViaXJkIGZyb20gJ2JsdWViaXJkJztcbmltcG9ydCBwZGYgZnJvbSAncGhhbnRvbS1odG1sMnBkZic7XG5cbmV4cG9ydCBjbGFzcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICB0aGlzLmFkYXB0ZXIgPSBhZGFwdGVyO1xuICB9XG4gIHJlbmRlcih0ZW1wbGF0ZSwgdmFsdWVzKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5yZW5kZXIodGVtcGxhdGUsIHZhbHVlcyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBERkV4cG90ZXIge1xuICBjb25zdHJ1Y3RvcihyZW5kZXJlcikge1xuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgfVxuICByZW5kZXIodGVtcGxhdGUsIHZhbHVlcykge1xuICAgIHJldHVybiBCbHVlYmlyZC5iaW5kKHRoaXMpLnRoZW4oKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIucmVuZGVyKHRlbXBsYXRlLCB2YWx1ZXMpO1xuICAgIH0pLnRoZW4oKGNvbnRlbnQpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlclBERihjb250ZW50KTtcbiAgICB9KTtcbiAgfVxuICByZW5kZXJQREYoY29udGVudCkge1xuICAgIHJldHVybiBuZXcgQmx1ZWJpcmQoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcGRmLmNvbnZlcnQoe1xuICAgICAgICBodG1sOiBjb250ZW50XG4gICAgICB9LCAocmVzdWx0KSA9PiB7XG4gICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=
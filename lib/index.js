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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7d0JBQXFCLFVBQVU7Ozs7K0JBQ2Ysa0JBQWtCOzs7O0lBRXJCLFVBQVU7QUFDVixXQURBLFVBQVUsQ0FDVCxRQUFRLEVBQUU7MEJBRFgsVUFBVTs7QUFFbkIsUUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7R0FDMUI7O2VBSFUsVUFBVTs7V0FJZixnQkFBQyxRQUFRLEVBQUUsTUFBTSxFQUFFOzs7QUFDdkIsYUFBTyxzQkFBUyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQU07QUFDcEMsZUFBTyxNQUFLLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO09BQy9DLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFPLEVBQUs7QUFDbkIsZUFBTyxNQUFLLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztPQUNoQyxDQUFDLENBQUM7S0FDSjs7O1dBQ1EsbUJBQUMsT0FBTyxFQUFFO0FBQ2pCLGFBQU8sMEJBQWEsVUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFLO0FBQ3ZDLHFDQUFJLE9BQU8sQ0FBQztBQUNWLGNBQUksRUFBRSxPQUFPO1NBQ2QsRUFBRSxVQUFDLE1BQU0sRUFBSztBQUNiLGlCQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDakIsQ0FBQyxDQUFDO09BQ0osQ0FBQyxDQUFDO0tBQ0o7OztTQW5CVSxVQUFVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsdWViaXJkIGZyb20gJ2JsdWViaXJkJztcbmltcG9ydCBwZGYgZnJvbSAncGhhbnRvbS1odG1sMnBkZic7XG5cbmV4cG9ydCBjbGFzcyBQREZFeHBvdGVyIHtcbiAgY29uc3RydWN0b3IocmVuZGVyZXIpIHtcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gIH1cbiAgcmVuZGVyKHRlbXBsYXRlLCB2YWx1ZXMpIHtcbiAgICByZXR1cm4gQmx1ZWJpcmQuYmluZCh0aGlzKS50aGVuKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLnJlbmRlcih0ZW1wbGF0ZSwgdmFsdWVzKTtcbiAgICB9KS50aGVuKChjb250ZW50KSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJQREYoY29udGVudCk7XG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyUERGKGNvbnRlbnQpIHtcbiAgICByZXR1cm4gbmV3IEJsdWViaXJkKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHBkZi5jb252ZXJ0KHtcbiAgICAgICAgaHRtbDogY29udGVudFxuICAgICAgfSwgKHJlc3VsdCkgPT4ge1xuICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19
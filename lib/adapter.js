'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _jade = require('jade');

var _jade2 = _interopRequireDefault(_jade);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var JadeAdapter = (function () {
  function JadeAdapter() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, JadeAdapter);

    this.options = options;
  }

  _createClass(JadeAdapter, [{
    key: 'render',
    value: function render(template) {
      var _this = this;

      var values = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      return new _bluebird2['default'](function (resolve, reject) {
        var locals = _lodash2['default'].merge(_this.options, values);
        try {
          resolve(_jade2['default'].renderFile(template, locals));
        } catch (err) {
          reject(err);
        }
      });
    }
  }]);

  return JadeAdapter;
})();

exports.JadeAdapter = JadeAdapter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztvQkFBaUIsTUFBTTs7Ozt3QkFDRixVQUFVOzs7O3NCQUNqQixRQUFROzs7O0lBRVQsV0FBVztBQUNYLFdBREEsV0FBVyxHQUNJO1FBQWQsT0FBTyx5REFBRyxFQUFFOzswQkFEYixXQUFXOztBQUVwQixRQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztHQUN4Qjs7ZUFIVSxXQUFXOztXQUloQixnQkFBQyxRQUFRLEVBQWU7OztVQUFiLE1BQU0seURBQUcsRUFBRTs7QUFDMUIsYUFBTywwQkFBYSxVQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUs7QUFDdkMsWUFBSSxNQUFNLEdBQUcsb0JBQUUsS0FBSyxDQUFDLE1BQUssT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzNDLFlBQUk7QUFDRixpQkFBTyxDQUFFLGtCQUFLLFVBQVUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUUsQ0FBQztTQUM5QyxDQUFDLE9BQU8sR0FBRyxFQUFFO0FBQ1osZ0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNiO09BQ0YsQ0FBQyxDQUFDO0tBQ0o7OztTQWJVLFdBQVciLCJmaWxlIjoiYWRhcHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqYWRlIGZyb20gJ2phZGUnO1xuaW1wb3J0IEJsdWViaXJkIGZyb20gJ2JsdWViaXJkJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBjbGFzcyBKYWRlQWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cbiAgcmVuZGVyKHRlbXBsYXRlLCB2YWx1ZXMgPSB7fSkge1xuICAgIHJldHVybiBuZXcgQmx1ZWJpcmQoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IGxvY2FscyA9IF8ubWVyZ2UodGhpcy5vcHRpb25zLCB2YWx1ZXMpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzb2x2ZSggamFkZS5yZW5kZXJGaWxlKHRlbXBsYXRlLCBsb2NhbHMpICk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
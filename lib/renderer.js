'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports.jade = jade;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _jade = require('jade');

var jadeRenderer = _interopRequireWildcard(_jade);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function jade() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return new JadeRenderer(options);
}

var JadeRenderer = (function () {
  function JadeRenderer() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, JadeRenderer);

    this.options = options;
  }

  _createClass(JadeRenderer, [{
    key: 'render',
    value: function render(template) {
      var _this = this;

      var values = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      return new _bluebird2['default'](function (resolve, reject) {
        var locals = _lodash2['default'].merge(_this.options, values);
        try {
          resolve(jadeRenderer.renderFile(template, locals));
        } catch (err) {
          reject(err);
        }
      });
    }
  }]);

  return JadeRenderer;
})();

exports.JadeRenderer = JadeRenderer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW5kZXJlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O29CQUE4QixNQUFNOztJQUF4QixZQUFZOzt3QkFDSCxVQUFVOzs7O3NCQUNqQixRQUFROzs7O0FBRWYsU0FBUyxJQUFJLEdBQWU7TUFBZCxPQUFPLHlEQUFHLEVBQUU7O0FBQy9CLFNBQU8sSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7Q0FDbEM7O0lBRVksWUFBWTtBQUNaLFdBREEsWUFBWSxHQUNHO1FBQWQsT0FBTyx5REFBRyxFQUFFOzswQkFEYixZQUFZOztBQUVyQixRQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztHQUN4Qjs7ZUFIVSxZQUFZOztXQUlqQixnQkFBQyxRQUFRLEVBQWU7OztVQUFiLE1BQU0seURBQUcsRUFBRTs7QUFDMUIsYUFBTywwQkFBYSxVQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUs7QUFDdkMsWUFBSSxNQUFNLEdBQUcsb0JBQUUsS0FBSyxDQUFDLE1BQUssT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzNDLFlBQUk7QUFDRixpQkFBTyxDQUFFLFlBQVksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFFLENBQUM7U0FDdEQsQ0FBQyxPQUFPLEdBQUcsRUFBRTtBQUNaLGdCQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDYjtPQUNGLENBQUMsQ0FBQztLQUNKOzs7U0FiVSxZQUFZIiwiZmlsZSI6InJlbmRlcmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgamFkZVJlbmRlcmVyIGZyb20gJ2phZGUnO1xuaW1wb3J0IEJsdWViaXJkIGZyb20gJ2JsdWViaXJkJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBqYWRlKG9wdGlvbnMgPSB7fSkge1xuICByZXR1cm4gbmV3IEphZGVSZW5kZXJlcihvcHRpb25zKTtcbn1cblxuZXhwb3J0IGNsYXNzIEphZGVSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cbiAgcmVuZGVyKHRlbXBsYXRlLCB2YWx1ZXMgPSB7fSkge1xuICAgIHJldHVybiBuZXcgQmx1ZWJpcmQoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IGxvY2FscyA9IF8ubWVyZ2UodGhpcy5vcHRpb25zLCB2YWx1ZXMpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzb2x2ZSggamFkZVJlbmRlcmVyLnJlbmRlckZpbGUodGVtcGxhdGUsIGxvY2FscykgKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19
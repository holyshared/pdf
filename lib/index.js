"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Renderer = (function () {
  function Renderer(adapter) {
    _classCallCheck(this, Renderer);

    this.adapter = adapter;
  }

  _createClass(Renderer, [{
    key: "render",
    value: function render(template, values) {
      return this.adapter.render(template, values);
    }
  }]);

  return Renderer;
})();

exports.Renderer = Renderer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQWEsUUFBUTtBQUNSLFdBREEsUUFBUSxDQUNQLE9BQU8sRUFBRTswQkFEVixRQUFROztBQUVqQixRQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztHQUN4Qjs7ZUFIVSxRQUFROztXQUliLGdCQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUU7QUFDdkIsYUFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDOUM7OztTQU5VLFFBQVEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgdGhpcy5hZGFwdGVyID0gYWRhcHRlcjtcbiAgfVxuICByZW5kZXIodGVtcGxhdGUsIHZhbHVlcykge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIucmVuZGVyKHRlbXBsYXRlLCB2YWx1ZXMpO1xuICB9XG59XG4iXX0=
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var interfaces = {
  getUserInfo: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _ref2, userInfo, _ref3, code;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _wepy2.default.getUserInfo();

            case 2:
              _ref2 = _context.sent;
              userInfo = _ref2.userInfo;
              _context.next = 6;
              return _wepy2.default.login();

            case 6:
              _ref3 = _context.sent;
              code = _ref3.code;
              return _context.abrupt('return', {
                userInfo: userInfo,
                code: code
              });

            case 9:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getUserInfo() {
      return _ref.apply(this, arguments);
    }

    return getUserInfo;
  }(),
  login: function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var data, res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return interfaces.getUserInfo();

            case 2:
              data = _context2.sent;
              _context2.next = 5;
              return _wepy2.default.request({
                url: _config2.default.users.login.url,
                data: data,
                method: _config2.default.users.login.method,
                header: {
                  'content-type': 'application/x-www-form-urlencoded'
                }
              });

            case 5:
              res = _context2.sent;
              return _context2.abrupt('return', res);

            case 7:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function login() {
      return _ref4.apply(this, arguments);
    }

    return login;
  }()
};
exports.default = interfaces;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImludGVyZmFjZXMiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwibG9naW4iLCJjb2RlIiwiZGF0YSIsInJlcXVlc3QiLCJ1cmwiLCJ1c2VycyIsIm1ldGhvZCIsImhlYWRlciIsInJlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7QUFDQSxJQUFNQSxhQUFhO0FBQ1hDLGFBRFc7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFJTCxlQUFLQSxXQUFMLEVBSks7O0FBQUE7QUFBQTtBQUdiQyxzQkFIYSxTQUdiQSxRQUhhO0FBQUE7QUFBQSxxQkFPTCxlQUFLQyxLQUFMLEVBUEs7O0FBQUE7QUFBQTtBQU1iQyxrQkFOYSxTQU1iQSxJQU5hO0FBQUEsK0NBUVI7QUFDTEYsMEJBQVVBLFFBREw7QUFFTEUsc0JBQU1BO0FBRkQsZUFSUTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQWFYRCxPQWJXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFjSUgsV0FBV0MsV0FBWCxFQWRKOztBQUFBO0FBY1RJLGtCQWRTO0FBQUE7QUFBQSxxQkFlRyxlQUFLQyxPQUFMLENBQWE7QUFDN0JDLHFCQUFLLGlCQUFJQyxLQUFKLENBQVVMLEtBQVYsQ0FBZ0JJLEdBRFE7QUFFN0JGLHNCQUFNQSxJQUZ1QjtBQUc3Qkksd0JBQVEsaUJBQUlELEtBQUosQ0FBVUwsS0FBVixDQUFnQk0sTUFISztBQUk3QkMsd0JBQU87QUFDTCxrQ0FBZTtBQURWO0FBSnNCLGVBQWIsQ0FmSDs7QUFBQTtBQWVUQyxpQkFmUztBQUFBLGdEQXVCUkEsR0F2QlE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxDQUFuQjtrQkEyQmVYLFUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgYXBpIGZyb20gJy4uL2NvbmZpZydcclxuY29uc3QgaW50ZXJmYWNlcyA9IHtcclxuICBhc3luYyBnZXRVc2VySW5mbygpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgdXNlckluZm9cclxuICAgIH0gPSBhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKClcclxuICAgIGNvbnN0IHtcclxuICAgICAgY29kZVxyXG4gICAgfSA9IGF3YWl0IHdlcHkubG9naW4oKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXNlckluZm86IHVzZXJJbmZvLFxyXG4gICAgICBjb2RlOiBjb2RlXHJcbiAgICB9XHJcbiAgfSxcclxuICBhc3luYyBsb2dpbigpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBpbnRlcmZhY2VzLmdldFVzZXJJbmZvKClcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XHJcbiAgICAgIHVybDogYXBpLnVzZXJzLmxvZ2luLnVybCxcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgbWV0aG9kOiBhcGkudXNlcnMubG9naW4ubWV0aG9kLFxyXG4gICAgICBoZWFkZXI6e1xyXG4gICAgICAgICdjb250ZW50LXR5cGUnOidhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgaW50ZXJmYWNlc1xyXG4iXX0=
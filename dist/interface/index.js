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
                method: _config2.default.users.login.method
              });

            case 5:
              res = _context2.sent;

              console.log(res);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImludGVyZmFjZXMiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwibG9naW4iLCJjb2RlIiwiZGF0YSIsInJlcXVlc3QiLCJ1cmwiLCJ1c2VycyIsIm1ldGhvZCIsInJlcyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O0FBQ0EsSUFBTUEsYUFBYTtBQUNYQyxhQURXO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSUwsZUFBS0EsV0FBTCxFQUpLOztBQUFBO0FBQUE7QUFHYkMsc0JBSGEsU0FHYkEsUUFIYTtBQUFBO0FBQUEscUJBT0wsZUFBS0MsS0FBTCxFQVBLOztBQUFBO0FBQUE7QUFNYkMsa0JBTmEsU0FNYkEsSUFOYTtBQUFBLCtDQVFSO0FBQ0xGLDBCQUFVQSxRQURMO0FBRUxFLHNCQUFNQTtBQUZELGVBUlE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFhWEQsT0FiVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBY0lILFdBQVdDLFdBQVgsRUFkSjs7QUFBQTtBQWNUSSxrQkFkUztBQUFBO0FBQUEscUJBZUcsZUFBS0MsT0FBTCxDQUFhO0FBQzdCQyxxQkFBSyxpQkFBSUMsS0FBSixDQUFVTCxLQUFWLENBQWdCSSxHQURRO0FBRTdCRixzQkFBTUEsSUFGdUI7QUFHN0JJLHdCQUFRLGlCQUFJRCxLQUFKLENBQVVMLEtBQVYsQ0FBZ0JNO0FBSEssZUFBYixDQWZIOztBQUFBO0FBZVRDLGlCQWZTOztBQW9CZkMsc0JBQVFDLEdBQVIsQ0FBWUYsR0FBWjs7QUFwQmU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxDQUFuQjtrQkF3QmVWLFUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgYXBpIGZyb20gJy4uL2NvbmZpZydcclxuY29uc3QgaW50ZXJmYWNlcyA9IHtcclxuICBhc3luYyBnZXRVc2VySW5mbygpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgdXNlckluZm9cclxuICAgIH0gPSBhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKClcclxuICAgIGNvbnN0IHtcclxuICAgICAgY29kZVxyXG4gICAgfSA9IGF3YWl0IHdlcHkubG9naW4oKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXNlckluZm86IHVzZXJJbmZvLFxyXG4gICAgICBjb2RlOiBjb2RlXHJcbiAgICB9XHJcbiAgfSxcclxuICBhc3luYyBsb2dpbigpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBpbnRlcmZhY2VzLmdldFVzZXJJbmZvKClcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XHJcbiAgICAgIHVybDogYXBpLnVzZXJzLmxvZ2luLnVybCxcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgbWV0aG9kOiBhcGkudXNlcnMubG9naW4ubWV0aG9kXHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2cocmVzKVxyXG4gIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgaW50ZXJmYWNlc1xyXG4iXX0=
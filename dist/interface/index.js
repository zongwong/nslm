'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../config.js');

var _config2 = _interopRequireDefault(_config);

var _request = require('./../utils/request.js');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var interfaces = {
  // 获取用户信息
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
              _context.next = 10;
              return _wepy2.default.setStorage({
                key: 'userInfo',
                data: userInfo
              });

            case 10:
              return _context.abrupt('return', {
                userInfo: JSON.stringify(userInfo),
                code: code
              });

            case 11:
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

  // 登录
  login: function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var data, userinfo;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              data = {};
              userinfo = {};
              _context2.prev = 2;
              _context2.next = 5;
              return interfaces.getUserInfo();

            case 5:
              data = _context2.sent;
              _context2.next = 8;
              return _wepy2.default.request({
                url: _config2.default.users.login.url,
                data: data,
                method: _config2.default.users.login.method,
                header: {
                  'content-type': 'application/x-www-form-urlencoded'
                }
              });

            case 8:
              userinfo = _context2.sent;
              _context2.next = 11;
              return _wepy2.default.setStorage({
                key: '_token',
                data: userinfo.data.info._token
              });

            case 11:
              _context2.next = 16;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2['catch'](2);

              wx.showModal({
                title: '提示',
                content: '\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u5931\u8D25\uFF0C\u8BF7\u5173\u95ED\u91CD\u65B0\u8FDB\u5165\u3002' + _context2.t0.message
              });

            case 16:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[2, 13]]);
    }));

    function login() {
      return _ref4.apply(this, arguments);
    }

    return login;
  }(),

  // 上传图片
  uploadImg: function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var temp, _ref6, data;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _wepy2.default.chooseImage();

            case 2:
              temp = _context3.sent;
              _context3.next = 5;
              return _wepy2.default.uploadFile({
                url: 'http://www.2p98.cn/api/public/uploadImg',
                filePath: temp.tempFilePaths[0],
                name: 'filename'
              });

            case 5:
              _ref6 = _context3.sent;
              data = _ref6.data;

              console.log(data);
              return _context3.abrupt('return', data);

            case 9:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function uploadImg() {
      return _ref5.apply(this, arguments);
    }

    return uploadImg;
  }(),

  // 支付
  getPayinfo: function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(data) {
      var res;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _wepy2.default.requestPayment({
                'timeStamp': data.timeStamp,
                'nonceStr': data.nonceStr,
                'package': data.package,
                'signType': 'MD5',
                'paySign': data.paySign
              });

            case 2:
              res = _context4.sent;
              return _context4.abrupt('return', res);

            case 4:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function getPayinfo(_x) {
      return _ref7.apply(this, arguments);
    }

    return getPayinfo;
  }(),

  // 剪贴板
  copyText: function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(data) {
      var res;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _wepy2.default.setClipboardData({
                data: data
              });

            case 2:
              _context5.next = 4;
              return _wepy2.default.getClipboardData();

            case 4:
              res = _context5.sent;

              if (res.data) {
                _wepy2.default.showToast({
                  title: '复制成功'
                });
              }
              return _context5.abrupt('return', res);

            case 7:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function copyText(_x2) {
      return _ref8.apply(this, arguments);
    }

    return copyText;
  }(),

  // 全局配置
  globalConfig: function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
      var _ref10, data;

      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return (0, _request2.default)({
                url: _config2.default.public.global.url,
                method: _config2.default.public.global.method
              });

            case 2:
              _ref10 = _context6.sent;
              data = _ref10.data;
              return _context6.abrupt('return', data);

            case 5:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function globalConfig() {
      return _ref9.apply(this, arguments);
    }

    return globalConfig;
  }(),

  // 获取个人信息
  getMyinfo: function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
      var _ref12, data;

      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return (0, _request2.default)({
                url: _config2.default.users.get.url,
                method: _config2.default.users.get.method,
                data: {}
              }, true);

            case 2:
              _ref12 = _context7.sent;
              data = _ref12.data;
              return _context7.abrupt('return', data);

            case 5:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function getMyinfo() {
      return _ref11.apply(this, arguments);
    }

    return getMyinfo;
  }(),

  // 获取活动详情
  getActivityInfo: function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(id) {
      var _ref14, data;

      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return (0, _request2.default)({
                url: _config2.default.activity.info.url,
                method: _config2.default.activity.info.method,
                data: {
                  aid: id
                }
              }, true);

            case 2:
              _ref14 = _context8.sent;
              data = _ref14.data;
              return _context8.abrupt('return', data);

            case 5:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function getActivityInfo(_x3) {
      return _ref13.apply(this, arguments);
    }

    return getActivityInfo;
  }()
};
exports.default = interfaces;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImludGVyZmFjZXMiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwibG9naW4iLCJjb2RlIiwic2V0U3RvcmFnZSIsImtleSIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlcmluZm8iLCJyZXF1ZXN0IiwidXJsIiwidXNlcnMiLCJtZXRob2QiLCJoZWFkZXIiLCJpbmZvIiwiX3Rva2VuIiwid3giLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJtZXNzYWdlIiwidXBsb2FkSW1nIiwiY2hvb3NlSW1hZ2UiLCJ0ZW1wIiwidXBsb2FkRmlsZSIsImZpbGVQYXRoIiwidGVtcEZpbGVQYXRocyIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiZ2V0UGF5aW5mbyIsInJlcXVlc3RQYXltZW50IiwidGltZVN0YW1wIiwibm9uY2VTdHIiLCJwYWNrYWdlIiwicGF5U2lnbiIsInJlcyIsImNvcHlUZXh0Iiwic2V0Q2xpcGJvYXJkRGF0YSIsImdldENsaXBib2FyZERhdGEiLCJzaG93VG9hc3QiLCJnbG9iYWxDb25maWciLCJwdWJsaWMiLCJnbG9iYWwiLCJnZXRNeWluZm8iLCJnZXQiLCJnZXRBY3Rpdml0eUluZm8iLCJpZCIsImFjdGl2aXR5IiwiYWlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBQ0EsSUFBTUEsYUFBYTtBQUNqQjtBQUNNQyxhQUZXO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBS0wsZUFBS0EsV0FBTCxFQUxLOztBQUFBO0FBQUE7QUFJYkMsc0JBSmEsU0FJYkEsUUFKYTtBQUFBO0FBQUEscUJBUUwsZUFBS0MsS0FBTCxFQVJLOztBQUFBO0FBQUE7QUFPYkMsa0JBUGEsU0FPYkEsSUFQYTtBQUFBO0FBQUEscUJBU1QsZUFBS0MsVUFBTCxDQUFnQjtBQUNwQkMscUJBQUssVUFEZTtBQUVwQkMsc0JBQU1MO0FBRmMsZUFB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SW9DLFFBQUosQ0FBYWxDLElBQWIsQ0FBa0JGLE1BRkE7QUFHMUJQLHNCQUFNO0FBQ0o0Qyx1QkFBS0Y7QUFERDtBQUhvQixlQUFMLEVBTXBCLElBTm9CLENBbkdSOztBQUFBO0FBQUE7QUFtR1AxQyxrQkFuR08sVUFtR1BBLElBbkdPO0FBQUEsZ0RBMEdSQSxJQTFHUTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLENBQW5CO2tCQTZHZVAsVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQgaHR0cCBmcm9tICcuLi91dGlscy9yZXF1ZXN0J1xyXG5jb25zdCBpbnRlcmZhY2VzID0ge1xyXG4gIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xyXG4gIGFzeW5jIGdldFVzZXJJbmZvKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB1c2VySW5mb1xyXG4gICAgfSA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKVxyXG4gICAgY29uc3Qge1xyXG4gICAgICBjb2RlXHJcbiAgICB9ID0gYXdhaXQgd2VweS5sb2dpbigpXHJcbiAgICBhd2FpdCB3ZXB5LnNldFN0b3JhZ2Uoe1xyXG4gICAgICBrZXk6ICd1c2VySW5mbycsXHJcbiAgICAgIGRhdGE6IHVzZXJJbmZvXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXNlckluZm86IEpTT04uc3RyaW5naWZ5KHVzZXJJbmZvKSxcclxuICAgICAgY29kZTogY29kZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgLy8g55m75b2VXHJcbiAgYXN5bmMgbG9naW4oKSB7XHJcbiAgICBsZXQgZGF0YSA9IHt9XHJcbiAgICBsZXQgdXNlcmluZm8gPSB7fVxyXG4gICAgdHJ5IHtcclxuICAgICAgZGF0YSA9IGF3YWl0IGludGVyZmFjZXMuZ2V0VXNlckluZm8oKVxyXG4gICAgICB1c2VyaW5mbyA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiBhcGkudXNlcnMubG9naW4udXJsLFxyXG4gICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgbWV0aG9kOiBhcGkudXNlcnMubG9naW4ubWV0aG9kLFxyXG4gICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBhd2FpdCB3ZXB5LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgIGtleTogJ190b2tlbicsXHJcbiAgICAgICAgZGF0YTogdXNlcmluZm8uZGF0YS5pbmZvLl90b2tlblxyXG4gICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICBjb250ZW50OiBg6I635Y+W55So5oi35L+h5oGv5aSx6LSl77yM6K+35YWz6Zet6YeN5paw6L+b5YWl44CCJHtlLm1lc3NhZ2V9YFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgLy8g5LiK5Lyg5Zu+54mHXHJcbiAgYXN5bmMgdXBsb2FkSW1nKCkge1xyXG4gICAgY29uc3QgdGVtcCA9IGF3YWl0IHdlcHkuY2hvb3NlSW1hZ2UoKVxyXG4gICAgY29uc3Qge1xyXG4gICAgICBkYXRhXHJcbiAgICB9ID0gYXdhaXQgd2VweS51cGxvYWRGaWxlKHtcclxuICAgICAgdXJsOiAnaHR0cDovL3d3dy4ycDk4LmNuL2FwaS9wdWJsaWMvdXBsb2FkSW1nJyxcclxuICAgICAgZmlsZVBhdGg6IHRlbXAudGVtcEZpbGVQYXRoc1swXSxcclxuICAgICAgbmFtZTogJ2ZpbGVuYW1lJ1xyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICByZXR1cm4gZGF0YVxyXG4gIH0sXHJcbiAgLy8g5pSv5LuYXHJcbiAgYXN5bmMgZ2V0UGF5aW5mbyhkYXRhKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCB3ZXB5LnJlcXVlc3RQYXltZW50KHtcclxuICAgICAgJ3RpbWVTdGFtcCc6IGRhdGEudGltZVN0YW1wLFxyXG4gICAgICAnbm9uY2VTdHInOiBkYXRhLm5vbmNlU3RyLFxyXG4gICAgICAncGFja2FnZSc6IGRhdGEucGFja2FnZSxcclxuICAgICAgJ3NpZ25UeXBlJzogJ01ENScsXHJcbiAgICAgICdwYXlTaWduJzogZGF0YS5wYXlTaWduXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHJlc1xyXG4gIH0sXHJcbiAgLy8g5Ymq6LS05p2/XHJcbiAgYXN5bmMgY29weVRleHQoZGF0YSkge1xyXG4gICAgYXdhaXQgd2VweS5zZXRDbGlwYm9hcmREYXRhKHtcclxuICAgICAgZGF0YTogZGF0YVxyXG4gICAgfSlcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHdlcHkuZ2V0Q2xpcGJvYXJkRGF0YSgpXHJcbiAgICBpZiAocmVzLmRhdGEpIHtcclxuICAgICAgd2VweS5zaG93VG9hc3Qoe1xyXG4gICAgICAgIHRpdGxlOiAn5aSN5Yi25oiQ5YqfJ1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc1xyXG4gIH0sXHJcbiAgLy8g5YWo5bGA6YWN572uXHJcbiAgYXN5bmMgZ2xvYmFsQ29uZmlnKCkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBodHRwKHtcclxuICAgICAgdXJsOiBhcGkucHVibGljLmdsb2JhbC51cmwsXHJcbiAgICAgIG1ldGhvZDogYXBpLnB1YmxpYy5nbG9iYWwubWV0aG9kXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGRhdGFcclxuICB9LFxyXG4gIC8vIOiOt+WPluS4quS6uuS/oeaBr1xyXG4gIGFzeW5jIGdldE15aW5mbygpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgaHR0cCh7XHJcbiAgICAgIHVybDogYXBpLnVzZXJzLmdldC51cmwsXHJcbiAgICAgIG1ldGhvZDogYXBpLnVzZXJzLmdldC5tZXRob2QsXHJcbiAgICAgIGRhdGE6IHsgfVxyXG4gICAgfSwgdHJ1ZSlcclxuICAgIHJldHVybiBkYXRhXHJcbiAgfSxcclxuICAvLyDojrflj5bmtLvliqjor6bmg4VcclxuICBhc3luYyBnZXRBY3Rpdml0eUluZm8oaWQpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgaHR0cCh7XHJcbiAgICAgIHVybDogYXBpLmFjdGl2aXR5LmluZm8udXJsLFxyXG4gICAgICBtZXRob2Q6IGFwaS5hY3Rpdml0eS5pbmZvLm1ldGhvZCxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGFpZDogaWRcclxuICAgICAgfVxyXG4gICAgfSwgdHJ1ZSlcclxuICAgIHJldHVybiBkYXRhXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGludGVyZmFjZXNcclxuIl19
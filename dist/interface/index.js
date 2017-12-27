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
                userInfo: userInfo,
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
  }()
};
exports.default = interfaces;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImludGVyZmFjZXMiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwibG9naW4iLCJjb2RlIiwic2V0U3RvcmFnZSIsImtleSIsImRhdGEiLCJ1c2VyaW5mbyIsInJlcXVlc3QiLCJ1cmwiLCJ1c2VycyIsIm1ldGhvZCIsImhlYWRlciIsImluZm8iLCJfdG9rZW4iLCJ3eCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsIm1lc3NhZ2UiLCJ1cGxvYWRJbWciLCJjaG9vc2VJbWFnZSIsInRlbXAiLCJ1cGxvYWRGaWxlIiwiZmlsZVBhdGgiLCJ0ZW1wRmlsZVBhdGhzIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRQYXlpbmZvIiwicmVxdWVzdFBheW1lbnQiLCJ0aW1lU3RhbXAiLCJub25jZVN0ciIsInBhY2thZ2UiLCJwYXlTaWduIiwicmVzIiwiY29weVRleHQiLCJzZXRDbGlwYm9hcmREYXRhIiwiZ2V0Q2xpcGJvYXJkRGF0YSIsInNob3dUb2FzdCIsImdsb2JhbENvbmZpZyIsInB1YmxpYyIsImdsb2JhbCIsImdldE15aW5mbyIsImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUNBLElBQU1BLGFBQWE7QUFDakI7QUFDTUMsYUFGVztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUtMLGVBQUtBLFdBQUwsRUFMSzs7QUFBQTtBQUFBO0FBSWJDLHNCQUphLFNBSWJBLFFBSmE7QUFBQTtBQUFBLHFCQVFMLGVBQUtDLEtBQUwsRUFSSzs7QUFBQTtBQUFBO0FBT2JDLGtCQVBhLFNBT2JBLElBUGE7QUFBQTtBQUFBLHFCQVNULGVBQUtDLFVBQUwsQ0FBZ0I7QUFDcEJDLHFCQUFLLFVBRGU7QUFFcEJDLHNCQUFNTDtBQUZjLGVBQWhCLENBVFM7O0FBQUE7QUFBQSwrQ0FhUjtBQUNMQSwwQkFBVUEsUUFETDtBQUVMRSxzQkFBTUE7QUFG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QUE7QUFBQTs7QUFBQTtBQUFBOztBQWdGakI7QUFDTUssY0FqRlc7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFrRlEsdUJBQUs7QUFDMUIvQixxQkFBSyxpQkFBSWdDLE1BQUosQ0FBV0MsTUFBWCxDQUFrQmpDLEdBREc7QUFFMUJFLHdCQUFRLGlCQUFJOEIsTUFBSixDQUFXQyxNQUFYLENBQWtCL0I7QUFGQSxlQUFMLENBbEZSOztBQUFBO0FBQUE7QUFrRlBMLGtCQWxGTyxVQWtGUEEsSUFsRk87QUFBQSxnREFzRlJBLElBdEZROztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQXdGakI7QUFDTXFDLFdBekZXO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBMEZRLHVCQUFLO0FBQzFCbEMscUJBQUssaUJBQUlDLEtBQUosQ0FBVWtDLEdBQVYsQ0FBY25DLEdBRE87QUFFMUJFLHdCQUFRLGlCQUFJRCxLQUFKLENBQVVrQyxHQUFWLENBQWNqQyxNQUZJO0FBRzFCTCxzQkFBTTtBQUhvQixlQUFMLEVBSXBCLElBSm9CLENBMUZSOztBQUFBO0FBQUE7QUEwRlBBLGtCQTFGTyxVQTBGUEEsSUExRk87QUFBQSxnREErRlJBLElBL0ZROztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsQ0FBbkI7a0JBa0dlUCxVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IGFwaSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCBodHRwIGZyb20gJy4uL3V0aWxzL3JlcXVlc3QnXHJcbmNvbnN0IGludGVyZmFjZXMgPSB7XHJcbiAgLy8g6I635Y+W55So5oi35L+h5oGvXHJcbiAgYXN5bmMgZ2V0VXNlckluZm8oKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHVzZXJJbmZvXHJcbiAgICB9ID0gYXdhaXQgd2VweS5nZXRVc2VySW5mbygpXHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGNvZGVcclxuICAgIH0gPSBhd2FpdCB3ZXB5LmxvZ2luKClcclxuICAgIGF3YWl0IHdlcHkuc2V0U3RvcmFnZSh7XHJcbiAgICAgIGtleTogJ3VzZXJJbmZvJyxcclxuICAgICAgZGF0YTogdXNlckluZm9cclxuICAgIH0pXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1c2VySW5mbzogdXNlckluZm8sXHJcbiAgICAgIGNvZGU6IGNvZGVcclxuICAgIH1cclxuICB9LFxyXG4gIC8vIOeZu+W9lVxyXG4gIGFzeW5jIGxvZ2luKCkge1xyXG4gICAgbGV0IGRhdGEgPSB7fVxyXG4gICAgbGV0IHVzZXJpbmZvID0ge31cclxuICAgIHRyeSB7XHJcbiAgICAgIGRhdGEgPSBhd2FpdCBpbnRlcmZhY2VzLmdldFVzZXJJbmZvKClcclxuICAgICAgdXNlcmluZm8gPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogYXBpLnVzZXJzLmxvZ2luLnVybCxcclxuICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgIG1ldGhvZDogYXBpLnVzZXJzLmxvZ2luLm1ldGhvZCxcclxuICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgYXdhaXQgd2VweS5zZXRTdG9yYWdlKHtcclxuICAgICAgICBrZXk6ICdfdG9rZW4nLFxyXG4gICAgICAgIGRhdGE6IHVzZXJpbmZvLmRhdGEuaW5mby5fdG9rZW5cclxuICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgY29udGVudDogYOiOt+WPlueUqOaIt+S/oeaBr+Wksei0pe+8jOivt+WFs+mXremHjeaWsOi/m+WFpeOAgiR7ZS5tZXNzYWdlfWBcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIC8vIOS4iuS8oOWbvueJh1xyXG4gIGFzeW5jIHVwbG9hZEltZygpIHtcclxuICAgIGNvbnN0IHRlbXAgPSBhd2FpdCB3ZXB5LmNob29zZUltYWdlKClcclxuICAgIGNvbnN0IHtcclxuICAgICAgZGF0YVxyXG4gICAgfSA9IGF3YWl0IHdlcHkudXBsb2FkRmlsZSh7XHJcbiAgICAgIHVybDogJ2h0dHA6Ly93d3cuMnA5OC5jbi9hcGkvcHVibGljL3VwbG9hZEltZycsXHJcbiAgICAgIGZpbGVQYXRoOiB0ZW1wLnRlbXBGaWxlUGF0aHNbMF0sXHJcbiAgICAgIG5hbWU6ICdmaWxlbmFtZSdcclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgcmV0dXJuIGRhdGFcclxuICB9LFxyXG4gIC8vIOaUr+S7mFxyXG4gIGFzeW5jIGdldFBheWluZm8oZGF0YSkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgd2VweS5yZXF1ZXN0UGF5bWVudCh7XHJcbiAgICAgICd0aW1lU3RhbXAnOiBkYXRhLnRpbWVTdGFtcCxcclxuICAgICAgJ25vbmNlU3RyJzogZGF0YS5ub25jZVN0cixcclxuICAgICAgJ3BhY2thZ2UnOiBkYXRhLnBhY2thZ2UsXHJcbiAgICAgICdzaWduVHlwZSc6ICdNRDUnLFxyXG4gICAgICAncGF5U2lnbic6IGRhdGEucGF5U2lnblxyXG4gICAgfSlcclxuICAgIHJldHVybiByZXNcclxuICB9LFxyXG4gIC8vIOWJqui0tOadv1xyXG4gIGFzeW5jIGNvcHlUZXh0KGRhdGEpIHtcclxuICAgIGF3YWl0IHdlcHkuc2V0Q2xpcGJvYXJkRGF0YSh7XHJcbiAgICAgIGRhdGE6IGRhdGFcclxuICAgIH0pXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCB3ZXB5LmdldENsaXBib2FyZERhdGEoKVxyXG4gICAgaWYgKHJlcy5kYXRhKSB7XHJcbiAgICAgIHdlcHkuc2hvd1RvYXN0KHtcclxuICAgICAgICB0aXRsZTogJ+WkjeWItuaIkOWKnydcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiByZXNcclxuICB9LFxyXG4gIC8vIOWFqOWxgOmFjee9rlxyXG4gIGFzeW5jIGdsb2JhbENvbmZpZygpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgaHR0cCh7XHJcbiAgICAgIHVybDogYXBpLnB1YmxpYy5nbG9iYWwudXJsLFxyXG4gICAgICBtZXRob2Q6IGFwaS5wdWJsaWMuZ2xvYmFsLm1ldGhvZFxyXG4gICAgfSlcclxuICAgIHJldHVybiBkYXRhXHJcbiAgfSxcclxuICAvLyDojrflj5bkuKrkurrkv6Hmga9cclxuICBhc3luYyBnZXRNeWluZm8oKSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGh0dHAoe1xyXG4gICAgICB1cmw6IGFwaS51c2Vycy5nZXQudXJsLFxyXG4gICAgICBtZXRob2Q6IGFwaS51c2Vycy5nZXQubWV0aG9kLFxyXG4gICAgICBkYXRhOiB7IH1cclxuICAgIH0sIHRydWUpXHJcbiAgICByZXR1cm4gZGF0YVxyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBpbnRlcmZhY2VzXHJcbiJdfQ==
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
                url: _config2.default.public.upload.url,
                filePath: temp.tempFilePaths[0],
                name: 'filename'
              });

            case 5:
              _ref6 = _context3.sent;
              data = _ref6.data;
              return _context3.abrupt('return', data);

            case 8:
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
  }()
};
exports.default = interfaces;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImludGVyZmFjZXMiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwibG9naW4iLCJjb2RlIiwic2V0U3RvcmFnZSIsImtleSIsImRhdGEiLCJ1c2VyaW5mbyIsInJlcXVlc3QiLCJ1cmwiLCJ1c2VycyIsIm1ldGhvZCIsImhlYWRlciIsImluZm8iLCJfdG9rZW4iLCJ3eCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsIm1lc3NhZ2UiLCJ1cGxvYWRJbWciLCJjaG9vc2VJbWFnZSIsInRlbXAiLCJ1cGxvYWRGaWxlIiwicHVibGljIiwidXBsb2FkIiwiZmlsZVBhdGgiLCJ0ZW1wRmlsZVBhdGhzIiwibmFtZSIsImdldFBheWluZm8iLCJyZXF1ZXN0UGF5bWVudCIsInRpbWVTdGFtcCIsIm5vbmNlU3RyIiwicGFja2FnZSIsInBheVNpZ24iLCJyZXMiLCJjb3B5VGV4dCIsInNldENsaXBib2FyZERhdGEiLCJnZXRDbGlwYm9hcmREYXRhIiwic2hvd1RvYXN0IiwiZ2xvYmFsQ29uZmlnIiwiZ2xvYmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBQ0EsSUFBTUEsYUFBYTtBQUNqQjtBQUNNQyxhQUZXO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBS0wsZUFBS0EsV0FBTCxFQUxLOztBQUFBO0FBQUE7QUFJYkMsc0JBSmEsU0FJYkEsUUFKYTtBQUFBO0FBQUEscUJBUUwsZUFBS0MsS0FBTCxFQVJLOztBQUFBO0FBQUE7QUFPYkMsa0JBUGEsU0FPYkEsSUFQYTtBQUFBO0FBQUEscUJBU1QsZUFBS0MsVUFBTCxDQUFnQjtBQUNwQkMscUJBQUssVUFEZTtBQUVwQkMsc0JBQU1MO0FBRmMsZUFBaEIsQ0FUUzs7QUFBQTtBQUFBLCtDQWFSO0FBQ0xBLDBCQUFVQSxRQURMO0FBRUxFLHNCQUFNQTtBQUZELGVBYlE7O0FBQUE7QUFBQTtBQUFBO0FB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Q01LLGNBaEZXO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBaUZRLHVCQUFLO0FBQzFCL0IscUJBQUssaUJBQUllLE1BQUosQ0FBV2lCLE1BQVgsQ0FBa0JoQyxHQURHO0FBRTFCRSx3QkFBUSxpQkFBSWEsTUFBSixDQUFXaUIsTUFBWCxDQUFrQjlCO0FBRkEsZUFBTCxDQWpGUjs7QUFBQTtBQUFBO0FBaUZQTCxrQkFqRk8sVUFpRlBBLElBakZPO0FBQUEsZ0RBcUZSQSxJQXJGUTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLENBQW5CO2tCQXdGZVAsVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQgaHR0cCBmcm9tICcuLi91dGlscy9yZXF1ZXN0J1xyXG5jb25zdCBpbnRlcmZhY2VzID0ge1xyXG4gIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xyXG4gIGFzeW5jIGdldFVzZXJJbmZvKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB1c2VySW5mb1xyXG4gICAgfSA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKVxyXG4gICAgY29uc3Qge1xyXG4gICAgICBjb2RlXHJcbiAgICB9ID0gYXdhaXQgd2VweS5sb2dpbigpXHJcbiAgICBhd2FpdCB3ZXB5LnNldFN0b3JhZ2Uoe1xyXG4gICAgICBrZXk6ICd1c2VySW5mbycsXHJcbiAgICAgIGRhdGE6IHVzZXJJbmZvXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXNlckluZm86IHVzZXJJbmZvLFxyXG4gICAgICBjb2RlOiBjb2RlXHJcbiAgICB9XHJcbiAgfSxcclxuICAvLyDnmbvlvZVcclxuICBhc3luYyBsb2dpbigpIHtcclxuICAgIGxldCBkYXRhID0ge31cclxuICAgIGxldCB1c2VyaW5mbyA9IHt9XHJcbiAgICB0cnkge1xyXG4gICAgICBkYXRhID0gYXdhaXQgaW50ZXJmYWNlcy5nZXRVc2VySW5mbygpXHJcbiAgICAgIHVzZXJpbmZvID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IGFwaS51c2Vycy5sb2dpbi51cmwsXHJcbiAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICBtZXRob2Q6IGFwaS51c2Vycy5sb2dpbi5tZXRob2QsXHJcbiAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIGF3YWl0IHdlcHkuc2V0U3RvcmFnZSh7XHJcbiAgICAgICAga2V5OiAnX3Rva2VuJyxcclxuICAgICAgICBkYXRhOiB1c2VyaW5mby5kYXRhLmluZm8uX3Rva2VuXHJcbiAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgIGNvbnRlbnQ6IGDojrflj5bnlKjmiLfkv6Hmga/lpLHotKXvvIzor7flhbPpl63ph43mlrDov5vlhaXjgIIke2UubWVzc2FnZX1gXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICAvLyDkuIrkvKDlm77niYdcclxuICBhc3luYyB1cGxvYWRJbWcoKSB7XHJcbiAgICBjb25zdCB0ZW1wID0gYXdhaXQgd2VweS5jaG9vc2VJbWFnZSgpXHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGRhdGFcclxuICAgIH0gPSBhd2FpdCB3ZXB5LnVwbG9hZEZpbGUoe1xyXG4gICAgICB1cmw6IGFwaS5wdWJsaWMudXBsb2FkLnVybCxcclxuICAgICAgZmlsZVBhdGg6IHRlbXAudGVtcEZpbGVQYXRoc1swXSxcclxuICAgICAgbmFtZTogJ2ZpbGVuYW1lJ1xyXG4gICAgfSlcclxuICAgIHJldHVybiBkYXRhXHJcbiAgfSxcclxuICAvLyDmlK/ku5hcclxuICBhc3luYyBnZXRQYXlpbmZvKGRhdGEpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHdlcHkucmVxdWVzdFBheW1lbnQoe1xyXG4gICAgICAndGltZVN0YW1wJzogZGF0YS50aW1lU3RhbXAsXHJcbiAgICAgICdub25jZVN0cic6IGRhdGEubm9uY2VTdHIsXHJcbiAgICAgICdwYWNrYWdlJzogZGF0YS5wYWNrYWdlLFxyXG4gICAgICAnc2lnblR5cGUnOiAnTUQ1JyxcclxuICAgICAgJ3BheVNpZ24nOiBkYXRhLnBheVNpZ25cclxuICAgIH0pXHJcbiAgICByZXR1cm4gcmVzXHJcbiAgfSxcclxuICAvLyDliarotLTmnb9cclxuICBhc3luYyBjb3B5VGV4dChkYXRhKSB7XHJcbiAgICBhd2FpdCB3ZXB5LnNldENsaXBib2FyZERhdGEoe1xyXG4gICAgICBkYXRhOiBkYXRhXHJcbiAgICB9KVxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgd2VweS5nZXRDbGlwYm9hcmREYXRhKClcclxuICAgIGlmIChyZXMuZGF0YSkge1xyXG4gICAgICB3ZXB5LnNob3dUb2FzdCh7XHJcbiAgICAgICAgdGl0bGU6ICflpI3liLbmiJDlip8nXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzXHJcbiAgfSxcclxuICAvLyDlhajlsYDphY3nva5cclxuICBhc3luYyBnbG9iYWxDb25maWcoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGh0dHAoe1xyXG4gICAgICB1cmw6IGFwaS5wdWJsaWMuZ2xvYmFsLnVybCxcclxuICAgICAgbWV0aG9kOiBhcGkucHVibGljLmdsb2JhbC5tZXRob2RcclxuICAgIH0pXHJcbiAgICByZXR1cm4gZGF0YVxyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBpbnRlcmZhY2VzXHJcbiJdfQ==
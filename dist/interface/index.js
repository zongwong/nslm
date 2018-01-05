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
              console.log(userinfo);
              _context2.next = 17;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2['catch'](2);

              _wepy2.default.showModal({
                title: '提示',
                content: '\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u5931\u8D25\uFF0C\u8BF7\u5173\u95ED\u91CD\u65B0\u8FDB\u5165\u3002' + _context2.t0.message
              });

            case 17:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[2, 14]]);
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
  }(),

  // 图片预览
  previewImg: function previewImg(current, urls) {
    _wepy2.default.previewImage({
      current: current,
      urls: urls
    });
  },

  // 获取打卡记录
  getProgress: function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(id) {
      var _ref16, data;

      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return (0, _request2.default)({
                url: _config2.default.activity.myprogress.url,
                method: _config2.default.activity.myprogress.method,
                data: {
                  aid: id
                }
              }, true);

            case 2:
              _ref16 = _context9.sent;
              data = _ref16.data;
              return _context9.abrupt('return', data);

            case 5:
            case 'end':
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    function getProgress(_x4) {
      return _ref15.apply(this, arguments);
    }

    return getProgress;
  }(),

  // 下载图片
  downFile: function () {
    var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(url) {
      var data;
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return _wepy2.default.downloadFile({
                url: url
              });

            case 2:
              data = _context10.sent;
              return _context10.abrupt('return', data.tempFilePath);

            case 4:
            case 'end':
              return _context10.stop();
          }
        }
      }, _callee10, this);
    }));

    function downFile(_x5) {
      return _ref17.apply(this, arguments);
    }

    return downFile;
  }(),

  // 微信支付
  wxPay: function () {
    var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(data) {
      var res;
      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return _wepy2.default.requestPayment(data);

            case 2:
              res = _context11.sent;
              return _context11.abrupt('return', res);

            case 4:
            case 'end':
              return _context11.stop();
          }
        }
      }, _callee11, this);
    }));

    function wxPay(_x6) {
      return _ref18.apply(this, arguments);
    }

    return wxPay;
  }(),

  // 活动分享
  activityShare: function activityShare(title, id, url) {
    return {
      title: title,
      path: '/pages/index/pk?id=' + id,
      imageUrl: url,
      success: function success(res) {
        _wepy2.default.showToast({
          title: '分享成功'
        });
      }
    };
  }
};
exports.default = interfaces;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImludGVyZmFjZXMiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwibG9naW4iLCJjb2RlIiwic2V0U3RvcmFnZSIsImtleSIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlcmluZm8iLCJyZXF1ZXN0IiwidXJsIiwidXNlcnMiLCJtZXRob2QiLCJoZWFkZXIiLCJpbmZvIiwiX3Rva2VuIiwiY29uc29sZSIsImxvZyIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsIm1lc3NhZ2UiLCJ1cGxvYWRJbWciLCJjaG9vc2VJbWFnZSIsInRlbXAiLCJ1cGxvYWRGaWxlIiwiZmlsZVBhdGgiLCJ0ZW1wRmlsZVBhdGhzIiwibmFtZSIsImdldFBheWluZm8iLCJyZXF1ZXN0UGF5bWVudCIsInRpbWVTdGFtcCIsIm5vbmNlU3RyIiwicGFja2FnZSIsInBheVNpZ24iLCJyZXMiLCJjb3B5VGV4dCIsInNldENsaXBib2FyZERhdGEiLCJnZXRDbGlwYm9hcmREYXRhIiwic2hvd1RvYXN0IiwiZ2xvYmFsQ29uZmlnIiwicHVibGljIiwiZ2xvYmFsIiwiZ2V0TXlpbmZvIiwiZ2V0IiwiZ2V0QWN0aXZpdHlJbmZvIiwiaWQiLCJhY3Rpdml0eSIsImFpZCIsInByZXZpZXdJbWciLCJjdXJyZW50IiwidXJscyIsInByZXZpZXdJbWFnZSIsImdldFByb2dyZXNzIiwibXlwcm9ncmVzcyIsImRvd25GaWxlIiwiZG93bmxvYWRGaWxlIiwidGVtcEZpbGVQYXRoIiwid3hQYXkiLCJhY3Rpdml0eVNoYXJlIiwicGF0aCIsImltYWdlVXJsIiwic3VjY2VzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUNBLElBQU1BLGFBQWE7QUFDakI7QUFDTUMsYUFGVztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUtMLGVBQUtBLFdBQUwsRUFMSzs7QUFBQTtBQUFBO0FB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QUE7QUFBQTs7QUErSGpCO0FBQ01rRCxVQWhJVztBQUFBLDRGQWdJRjdDLEdBaElFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBaUlJLGVBQUs4QyxZQUFMLENBQWtCO0FBQ25DOUMscUJBQUtBO0FBRDhCLGVBQWxCLENBaklKOztBQUFBO0FBaUlUTCxrQkFqSVM7QUFBQSxpREF3SVJBLEtBQUtvRCxZQXhJRzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUEwSWpCO0FBQ01DLE9BM0lXO0FBQUEsNEZBMklMckQsSUEzSUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkE0SUcsZUFBS3lCLGNBQUwsQ0FBb0J6QixJQUFwQixDQTVJSDs7QUFBQTtBQTRJVDhCLGlCQTVJUztBQUFBLGlEQTZJUkEsR0E3SVE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBK0lqQjtBQUNBd0IsZUFoSmlCLHlCQWdKSHhDLEtBaEpHLEVBZ0pJMkIsRUFoSkosRUFnSlFwQyxHQWhKUixFQWdKYTtBQUM1QixXQUFPO0FBQ0xTLGFBQU9BLEtBREY7QUFFTHlDLG9DQUE0QmQsRUFGdkI7QUFHTGUsZ0JBQVVuRCxHQUhMO0FBSUxvRCxlQUFTLGlCQUFDM0IsR0FBRCxFQUFTO0FBQ2hCLHVCQUFLSSxTQUFMLENBQWU7QUFDYnBCLGlCQUFPO0FBRE0sU0FBZjtBQUdEO0FBUkksS0FBUDtBQVVEO0FBM0pnQixDQUFuQjtrQkE2SmVyQixVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IGFwaSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCBodHRwIGZyb20gJy4uL3V0aWxzL3JlcXVlc3QnXHJcbmNvbnN0IGludGVyZmFjZXMgPSB7XHJcbiAgLy8g6I635Y+W55So5oi35L+h5oGvXHJcbiAgYXN5bmMgZ2V0VXNlckluZm8oKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHVzZXJJbmZvXHJcbiAgICB9ID0gYXdhaXQgd2VweS5nZXRVc2VySW5mbygpXHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGNvZGVcclxuICAgIH0gPSBhd2FpdCB3ZXB5LmxvZ2luKClcclxuICAgIGF3YWl0IHdlcHkuc2V0U3RvcmFnZSh7XHJcbiAgICAgIGtleTogJ3VzZXJJbmZvJyxcclxuICAgICAgZGF0YTogdXNlckluZm9cclxuICAgIH0pXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1c2VySW5mbzogSlNPTi5zdHJpbmdpZnkodXNlckluZm8pLFxyXG4gICAgICBjb2RlOiBjb2RlXHJcbiAgICB9XHJcbiAgfSxcclxuICAvLyDnmbvlvZVcclxuICBhc3luYyBsb2dpbigpIHtcclxuICAgIGxldCBkYXRhID0ge31cclxuICAgIGxldCB1c2VyaW5mbyA9IHt9XHJcbiAgICB0cnkge1xyXG4gICAgICBkYXRhID0gYXdhaXQgaW50ZXJmYWNlcy5nZXRVc2VySW5mbygpXHJcbiAgICAgIHVzZXJpbmZvID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IGFwaS51c2Vycy5sb2dpbi51cmwsXHJcbiAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICBtZXRob2Q6IGFwaS51c2Vycy5sb2dpbi5tZXRob2QsXHJcbiAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIGF3YWl0IHdlcHkuc2V0U3RvcmFnZSh7XHJcbiAgICAgICAga2V5OiAnX3Rva2VuJyxcclxuICAgICAgICBkYXRhOiB1c2VyaW5mby5kYXRhLmluZm8uX3Rva2VuXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnNvbGUubG9nKHVzZXJpbmZvKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgIGNvbnRlbnQ6IGDojrflj5bnlKjmiLfkv6Hmga/lpLHotKXvvIzor7flhbPpl63ph43mlrDov5vlhaXjgIIke2UubWVzc2FnZX1gXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICAvLyDkuIrkvKDlm77niYdcclxuICBhc3luYyB1cGxvYWRJbWcoKSB7XHJcbiAgICBjb25zdCB0ZW1wID0gYXdhaXQgd2VweS5jaG9vc2VJbWFnZSgpXHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGRhdGFcclxuICAgIH0gPSBhd2FpdCB3ZXB5LnVwbG9hZEZpbGUoe1xyXG4gICAgICB1cmw6ICdodHRwOi8vd3d3LjJwOTguY24vYXBpL3B1YmxpYy91cGxvYWRJbWcnLFxyXG4gICAgICBmaWxlUGF0aDogdGVtcC50ZW1wRmlsZVBhdGhzWzBdLFxyXG4gICAgICBuYW1lOiAnZmlsZW5hbWUnXHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIHJldHVybiBkYXRhXHJcbiAgfSxcclxuICAvLyDmlK/ku5hcclxuICBhc3luYyBnZXRQYXlpbmZvKGRhdGEpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHdlcHkucmVxdWVzdFBheW1lbnQoe1xyXG4gICAgICAndGltZVN0YW1wJzogZGF0YS50aW1lU3RhbXAsXHJcbiAgICAgICdub25jZVN0cic6IGRhdGEubm9uY2VTdHIsXHJcbiAgICAgICdwYWNrYWdlJzogZGF0YS5wYWNrYWdlLFxyXG4gICAgICAnc2lnblR5cGUnOiAnTUQ1JyxcclxuICAgICAgJ3BheVNpZ24nOiBkYXRhLnBheVNpZ25cclxuICAgIH0pXHJcbiAgICByZXR1cm4gcmVzXHJcbiAgfSxcclxuICAvLyDliarotLTmnb9cclxuICBhc3luYyBjb3B5VGV4dChkYXRhKSB7XHJcbiAgICBhd2FpdCB3ZXB5LnNldENsaXBib2FyZERhdGEoe1xyXG4gICAgICBkYXRhOiBkYXRhXHJcbiAgICB9KVxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgd2VweS5nZXRDbGlwYm9hcmREYXRhKClcclxuICAgIGlmIChyZXMuZGF0YSkge1xyXG4gICAgICB3ZXB5LnNob3dUb2FzdCh7XHJcbiAgICAgICAgdGl0bGU6ICflpI3liLbmiJDlip8nXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzXHJcbiAgfSxcclxuICAvLyDlhajlsYDphY3nva5cclxuICBhc3luYyBnbG9iYWxDb25maWcoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGh0dHAoe1xyXG4gICAgICB1cmw6IGFwaS5wdWJsaWMuZ2xvYmFsLnVybCxcclxuICAgICAgbWV0aG9kOiBhcGkucHVibGljLmdsb2JhbC5tZXRob2RcclxuICAgIH0pXHJcbiAgICByZXR1cm4gZGF0YVxyXG4gIH0sXHJcbiAgLy8g6I635Y+W5Liq5Lq65L+h5oGvXHJcbiAgYXN5bmMgZ2V0TXlpbmZvKCkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBodHRwKHtcclxuICAgICAgdXJsOiBhcGkudXNlcnMuZ2V0LnVybCxcclxuICAgICAgbWV0aG9kOiBhcGkudXNlcnMuZ2V0Lm1ldGhvZCxcclxuICAgICAgZGF0YTogeyB9XHJcbiAgICB9LCB0cnVlKVxyXG4gICAgcmV0dXJuIGRhdGFcclxuICB9LFxyXG4gIC8vIOiOt+WPlua0u+WKqOivpuaDhVxyXG4gIGFzeW5jIGdldEFjdGl2aXR5SW5mbyhpZCkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBodHRwKHtcclxuICAgICAgdXJsOiBhcGkuYWN0aXZpdHkuaW5mby51cmwsXHJcbiAgICAgIG1ldGhvZDogYXBpLmFjdGl2aXR5LmluZm8ubWV0aG9kLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYWlkOiBpZFxyXG4gICAgICB9XHJcbiAgICB9LCB0cnVlKVxyXG4gICAgcmV0dXJuIGRhdGFcclxuICB9LFxyXG4gIC8vIOWbvueJh+mihOiniFxyXG4gIHByZXZpZXdJbWcoY3VycmVudCwgdXJscykge1xyXG4gICAgd2VweS5wcmV2aWV3SW1hZ2Uoe1xyXG4gICAgICBjdXJyZW50OiBjdXJyZW50LFxyXG4gICAgICB1cmxzOiB1cmxzXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgLy8g6I635Y+W5omT5Y2h6K6w5b2VXHJcbiAgYXN5bmMgZ2V0UHJvZ3Jlc3MoaWQpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgaHR0cCh7XHJcbiAgICAgIHVybDogYXBpLmFjdGl2aXR5Lm15cHJvZ3Jlc3MudXJsLFxyXG4gICAgICBtZXRob2Q6IGFwaS5hY3Rpdml0eS5teXByb2dyZXNzLm1ldGhvZCxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGFpZDogaWRcclxuICAgICAgfVxyXG4gICAgfSwgdHJ1ZSlcclxuICAgIHJldHVybiBkYXRhXHJcbiAgfSxcclxuICAvLyDkuIvovb3lm77niYdcclxuICBhc3luYyBkb3duRmlsZSh1cmwpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3ZXB5LmRvd25sb2FkRmlsZSh7XHJcbiAgICAgIHVybDogdXJsXHJcbiAgICB9KVxyXG4gICAgLy8gY29uc29sZS5sb2coZGF0YSlcclxuICAgIC8vIGRhdGEub25Qcm9ncmVzc1VwZGF0ZSgocmVzKSA9PiB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgIC8vIH0pXHJcbiAgICByZXR1cm4gZGF0YS50ZW1wRmlsZVBhdGhcclxuICB9LFxyXG4gIC8vIOW+ruS/oeaUr+S7mFxyXG4gIGFzeW5jIHd4UGF5KGRhdGEpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHdlcHkucmVxdWVzdFBheW1lbnQoZGF0YSlcclxuICAgIHJldHVybiByZXNcclxuICB9LFxyXG4gIC8vIOa0u+WKqOWIhuS6q1xyXG4gIGFjdGl2aXR5U2hhcmUodGl0bGUsIGlkLCB1cmwpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgcGF0aDogYC9wYWdlcy9pbmRleC9waz9pZD0ke2lkfWAsXHJcbiAgICAgIGltYWdlVXJsOiB1cmwsXHJcbiAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+WIhuS6q+aIkOWKnydcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGludGVyZmFjZXNcclxuIl19
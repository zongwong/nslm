"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _index = require('./interface/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ["pages/index/record", "pages/index/index", "pages/course/reply", "pages/course/doctor", "pages/course/mentality", "pages/user/user", "pages/user/success", "pages/course/coursedetail", "pages/course/courselist", "pages/user/editinfo", "pages/course/course", "pages/course/articlelist", "pages/course/articledetail", "pages/user/myvideo", "pages/user/mooddetail", "pages/user/mood", "pages/user/top", "pages/user/mypublish", "pages/user/myexchange", "pages/user/exchange", "pages/user/money", "pages/user/moneydetail", "pages/index/pk", "pages/index/start", "pages/index/detail"],
      window: {
        backgroundTextStyle: "light",
        navigationBarBackgroundColor: "#000",
        navigationBarTitleText: "女神课程表",
        navigationBarTextStyle: "white"
      },
      tabBar: {
        selectedColor: '#ff508a',
        list: [{
          pagePath: "pages/index/index",
          text: "首页",
          iconPath: "images/icon-list.png",
          selectedIconPath: "images/icon-list-on.png"
        }, {
          pagePath: "pages/course/course",
          text: "产后恢复课",
          iconPath: "images/icon-course.png",
          selectedIconPath: "images/icon-course-on.png"
        }, {
          pagePath: "pages/user/user",
          text: "我的",
          iconPath: "images/icon-user.png",
          selectedIconPath: "images/icon-user-on.png"
        }]
      }
    };
    _this.globalData = {
      userInfo: null,
      imgs: {
        'post': 'http://lady.zdgphp.cn/src/images/post.png',
        'cbone': 'http://lady.zdgphp.cn/src/images/course_banner1.png',
        'cbtwo': 'http://lady.zdgphp.cn/src/images/course_banner2.png',
        'cbthree': 'http://lady.zdgphp.cn/src/images/course_banner3.png',
        'cbfour': 'http://lady.zdgphp.cn/src/images/course_banner4.png',
        'fly': 'http://lady.zdgphp.cn/src/images/pkbg.png',
        'userbg': 'http://lady.zdgphp.cn/src/images/userbg.png',
        'coursebg': 'http://lady.zdgphp.cn/src/images/coursebg.png',
        'fmbg': 'http://lady.zdgphp.cn/src/images/fmbg.png',
        'testbg': 'http://lady.zdgphp.cn/src/images/testbg.png',
        'banner': 'http://lady.zdgphp.cn/src/images/banner.png',
        'editbg': 'http://lady.zdgphp.cn/src/images/editbg.png',
        'moodbg': 'http://lady.zdgphp.cn/src/images/moodbg.png',
        'pkpost': 'http://lady.zdgphp.cn/src/images/pkpost.png',
        'topbg': 'http://lady.zdgphp.cn/src/images/topbg.png',
        'vobg': 'http://lady.zdgphp.cn/src/images/vobg.png',
        'moneybg': 'http://lady.zdgphp.cn/src/images/moneybg.png',
        'doctor': 'http://lady.zdgphp.cn/src/images/doctor.png',
        'detailbg': 'http://lady.zdgphp.cn/src/images/detail_bg.png',
        'defaultlist': 'http://lady.zdgphp.cn/src/images/default-list.png',
        'articlepost': 'http://lady.zdgphp.cn/src/images/article_post.png',
        'mood': 'http://lady.zdgphp.cn/src/images/mood.png'
      }
    };

    _this.use("requestfix");
    _this.use("promisify");
    return _this;
  }

  _createClass(_default, [{
    key: "onLaunch",
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var userInfo;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _index2.default.login();
                userInfo = _wepy2.default.getStorageSync('userInfo');

                this.globalData.userInfo = userInfo;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLaunch() {
        return _ref.apply(this, arguments);
      }

      return onLaunch;
    }()
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJzZWxlY3RlZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwidGV4dCIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsImltZ3MiLCJ1c2UiLCJsb2dpbiIsImdldFN0b3JhZ2VTeW5jIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQXlGRSxzQkFBYztBQUFBOztBQUFBOztBQUFBLFVBdkZkQSxNQXVGYyxHQXZGTDtBQUNQQyxhQUFPLENBQ0wsb0JBREssRUFFTCxtQkFGSyxFQUdMLG9CQUhLLEVBSUwscUJBSkssRUFLTCx3QkFMSyxFQU1MLGlCQU5LLEVBT0wsb0JBUEssRUFRTCwyQkFSSyxFQVNMLHlCQVRLLEVBVUwscUJBVkssRUFXTCxxQkFYSyxFQVlMLDBCQVpLLEVBYUwsNEJBYkssRUFjTCxvQkFkSyxFQWVMLHVCQWZLLEVBZ0JMLGlCQWhCSyxFQWlCTCxnQkFqQkssRUFrQkwsc0JBbEJLLEVBbUJMLHVCQW5CSyxFQW9CTCxxQkFwQkssRUFxQkwsa0JBckJLLEVBc0JMLHdCQXRCSyxFQXVCTCxnQkF2QkssRUF3QkwsbUJBeEJLLEVBeUJMLG9CQXpCSyxDQURBO0FBNEJQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixNQUZ4QjtBQUdOQyxnQ0FBd0IsT0FIbEI7QUFJTkMsZ0NBQXdCO0FBSmxCLE9BNUJEO0FBa0NQQyxjQUFRO0FBQ05DLHVCQUFjLFNBRFI7QUFFTkMsY0FBTSxDQUNKO0FBQ0VDLG9CQUFVLG1CQURaO0FBRUVDLGdCQUFNLElBRlI7QUFHRUMsb0JBQVUsc0JBSFo7QUFJRUMsNEJBQWtCO0FBSnBCLFNBREksRUFPSjtBQUNFSCxvQkFBVSxxQkFEWjtBQUVFQyxnQkFBTSxPQUZSO0FBR0VDLG9CQUFVLHdCQUhaO0FBSUVDLDRCQUFrQjtBQUpwQixTQVBJLEVBYUo7QUFDRUgsb0JBQVUsaUJBRFo7QUFFRUMsZ0JBQU0sSUFGUjtBQUdFQyxvQkFBVSxzQkFIWjtBQUlFQyw0QkFBa0I7QUFKcEIsU0FiSTtBQUZBO0FBbENELEtBdUZLO0FBQUEsVUE1QmRDLFVBNEJjLEdBNUJEO0FBQ1hDLGdCQUFVLElBREM7QUFFWEMsWUFBTTtBQUNKLGdCQUFRLDJDQURKO0FBRUosaUJBQVMscURBRkw7QUFHSixpQkFBUyxxREFITDtBQUlKLG1CQUFXLHFEQUpQO0FBS0osa0JBQVUscURBTE47QUFNSixlQUFPLDJDQU5IO0FBT0osa0JBQVUsNkNBUE47QUFRSixvQkFBWSwrQ0FSUjtBQVNKLGdCQUFRLDJDQVRKO0FBVUosa0JBQVUsNkNBVk47QUFXSixrQkFBVSw2Q0FYTjtBQVlKLGtCQUFVLDZDQVpOO0FBYUosa0JBQVUsNkNBYk47QUFjSixrQkFBVSw2Q0FkTjtBQWVKLGlCQUFTLDRDQWZMO0FBZ0JKLGdCQUFRLDJDQWhCSjtBQWlCSixtQkFBVyw4Q0FqQlA7QUFrQkosa0JBQVUsNkNBbEJOO0FBbUJKLG9CQUFZLGdEQW5CUjtBQW9CSix1QkFBZSxtREFwQlg7QUFxQkosdUJBQWUsbURBckJYO0FBc0JKLGdCQUFRO0FBdEJKO0FBRkssS0E0QkM7O0FBRVosVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFDQSxVQUFLQSxHQUFMLENBQVMsV0FBVDtBQUhZO0FBSWI7Ozs7Ozs7Ozs7O0FBR0MsZ0NBQVdDLEtBQVg7QUFDSUgsd0IsR0FBVyxlQUFLSSxjQUFMLENBQW9CLFVBQXBCLEM7O0FBQ2YscUJBQUtMLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCQSxRQUEzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWpHeUIsZUFBS0ssRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcclxuaW1wb3J0IFwid2VweS1hc3luYy1mdW5jdGlvblwiO1xyXG5pbXBvcnQgaW50ZXJmYWNlcyBmcm9tIFwiLi9pbnRlcmZhY2UvaW5kZXhcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgcGFnZXM6IFtcclxuICAgICAgXCJwYWdlcy9pbmRleC9yZWNvcmRcIiwgXHJcbiAgICAgIFwicGFnZXMvaW5kZXgvaW5kZXhcIiwgXHJcbiAgICAgIFwicGFnZXMvY291cnNlL3JlcGx5XCIsXHJcbiAgICAgIFwicGFnZXMvY291cnNlL2RvY3RvclwiLFxyXG4gICAgICBcInBhZ2VzL2NvdXJzZS9tZW50YWxpdHlcIixcclxuICAgICAgXCJwYWdlcy91c2VyL3VzZXJcIixcclxuICAgICAgXCJwYWdlcy91c2VyL3N1Y2Nlc3NcIixcclxuICAgICAgXCJwYWdlcy9jb3Vyc2UvY291cnNlZGV0YWlsXCIsXHJcbiAgICAgIFwicGFnZXMvY291cnNlL2NvdXJzZWxpc3RcIixcclxuICAgICAgXCJwYWdlcy91c2VyL2VkaXRpbmZvXCIsIFxyXG4gICAgICBcInBhZ2VzL2NvdXJzZS9jb3Vyc2VcIiwgXHJcbiAgICAgIFwicGFnZXMvY291cnNlL2FydGljbGVsaXN0XCIsIFxyXG4gICAgICBcInBhZ2VzL2NvdXJzZS9hcnRpY2xlZGV0YWlsXCIsIFxyXG4gICAgICBcInBhZ2VzL3VzZXIvbXl2aWRlb1wiLCBcclxuICAgICAgXCJwYWdlcy91c2VyL21vb2RkZXRhaWxcIiwgXHJcbiAgICAgIFwicGFnZXMvdXNlci9tb29kXCIsIFxyXG4gICAgICBcInBhZ2VzL3VzZXIvdG9wXCIsIFxyXG4gICAgICBcInBhZ2VzL3VzZXIvbXlwdWJsaXNoXCIsIFxyXG4gICAgICBcInBhZ2VzL3VzZXIvbXlleGNoYW5nZVwiLCBcclxuICAgICAgXCJwYWdlcy91c2VyL2V4Y2hhbmdlXCIsIFxyXG4gICAgICBcInBhZ2VzL3VzZXIvbW9uZXlcIiwgXHJcbiAgICAgIFwicGFnZXMvdXNlci9tb25leWRldGFpbFwiLFxyXG4gICAgICBcInBhZ2VzL2luZGV4L3BrXCIsIFxyXG4gICAgICBcInBhZ2VzL2luZGV4L3N0YXJ0XCIsIFxyXG4gICAgICBcInBhZ2VzL2luZGV4L2RldGFpbFwiXHJcbiAgICBdLFxyXG4gICAgd2luZG93OiB7XHJcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6IFwibGlnaHRcIixcclxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogXCIjMDAwXCIsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6IFwi5aWz56We6K++56iL6KGoXCIsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6IFwid2hpdGVcIlxyXG4gICAgfSxcclxuICAgIHRhYkJhcjoge1xyXG4gICAgICBzZWxlY3RlZENvbG9yOicjZmY1MDhhJyxcclxuICAgICAgbGlzdDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBhZ2VQYXRoOiBcInBhZ2VzL2luZGV4L2luZGV4XCIsXHJcbiAgICAgICAgICB0ZXh0OiBcIummlumhtVwiLFxyXG4gICAgICAgICAgaWNvblBhdGg6IFwiaW1hZ2VzL2ljb24tbGlzdC5wbmdcIixcclxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6IFwiaW1hZ2VzL2ljb24tbGlzdC1vbi5wbmdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGFnZVBhdGg6IFwicGFnZXMvY291cnNlL2NvdXJzZVwiLFxyXG4gICAgICAgICAgdGV4dDogXCLkuqflkI7mgaLlpI3or75cIixcclxuICAgICAgICAgIGljb25QYXRoOiBcImltYWdlcy9pY29uLWNvdXJzZS5wbmdcIixcclxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6IFwiaW1hZ2VzL2ljb24tY291cnNlLW9uLnBuZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYWdlUGF0aDogXCJwYWdlcy91c2VyL3VzZXJcIixcclxuICAgICAgICAgIHRleHQ6IFwi5oiR55qEXCIsXHJcbiAgICAgICAgICBpY29uUGF0aDogXCJpbWFnZXMvaWNvbi11c2VyLnBuZ1wiLFxyXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogXCJpbWFnZXMvaWNvbi11c2VyLW9uLnBuZ1wiXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZ2xvYmFsRGF0YSA9IHtcclxuICAgIHVzZXJJbmZvOiBudWxsLFxyXG4gICAgaW1nczoge1xyXG4gICAgICAncG9zdCc6ICdodHRwOi8vbGFkeS56ZGdwaHAuY24vc3JjL2ltYWdlcy9wb3N0LnBuZycsXHJcbiAgICAgICdjYm9uZSc6ICdodHRwOi8vbGFkeS56ZGdwaHAuY24vc3JjL2ltYWdlcy9jb3Vyc2VfYmFubmVyMS5wbmcnLFxyXG4gICAgICAnY2J0d28nOiAnaHR0cDovL2xhZHkuemRncGhwLmNuL3NyYy9pbWFnZXMvY291cnNlX2Jhbm5lcjIucG5nJyxcclxuICAgICAgJ2NidGhyZWUnOiAnaHR0cDovL2xhZHkuemRncGhwLmNuL3NyYy9pbWFnZXMvY291cnNlX2Jhbm5lcjMucG5nJyxcclxuICAgICAgJ2NiZm91cic6ICdodHRwOi8vbGFkeS56ZGdwaHAuY24vc3JjL2ltYWdlcy9jb3Vyc2VfYmFubmVyNC5wbmcnLFxyXG4gICAgICAnZmx5JzogJ2h0dHA6Ly9sYWR5LnpkZ3BocC5jbi9zcmMvaW1hZ2VzL3BrYmcucG5nJyxcclxuICAgICAgJ3VzZXJiZyc6ICdodHRwOi8vbGFkeS56ZGdwaHAuY24vc3JjL2ltYWdlcy91c2VyYmcucG5nJyxcclxuICAgICAgJ2NvdXJzZWJnJzogJ2h0dHA6Ly9sYWR5LnpkZ3BocC5jbi9zcmMvaW1hZ2VzL2NvdXJzZWJnLnBuZycsXHJcbiAgICAgICdmbWJnJzogJ2h0dHA6Ly9sYWR5LnpkZ3BocC5jbi9zcmMvaW1hZ2VzL2ZtYmcucG5nJyxcclxuICAgICAgJ3Rlc3RiZyc6ICdodHRwOi8vbGFkeS56ZGdwaHAuY24vc3JjL2ltYWdlcy90ZXN0YmcucG5nJyxcclxuICAgICAgJ2Jhbm5lcic6ICdodHRwOi8vbGFkeS56ZGdwaHAuY24vc3JjL2ltYWdlcy9iYW5uZXIucG5nJyxcclxuICAgICAgJ2VkaXRiZyc6ICdodHRwOi8vbGFkeS56ZGdwaHAuY24vc3JjL2ltYWdlcy9lZGl0YmcucG5nJyxcclxuICAgICAgJ21vb2RiZyc6ICdodHRwOi8vbGFkeS56ZGdwaHAuY24vc3JjL2ltYWdlcy9tb29kYmcucG5nJyxcclxuICAgICAgJ3BrcG9zdCc6ICdodHRwOi8vbGFkeS56ZGdwaHAuY24vc3JjL2ltYWdlcy9wa3Bvc3QucG5nJyxcclxuICAgICAgJ3RvcGJnJzogJ2h0dHA6Ly9sYWR5LnpkZ3BocC5jbi9zcmMvaW1hZ2VzL3RvcGJnLnBuZycsXHJcbiAgICAgICd2b2JnJzogJ2h0dHA6Ly9sYWR5LnpkZ3BocC5jbi9zcmMvaW1hZ2VzL3ZvYmcucG5nJyxcclxuICAgICAgJ21vbmV5YmcnOiAnaHR0cDovL2xhZHkuemRncGhwLmNuL3NyYy9pbWFnZXMvbW9uZXliZy5wbmcnLFxyXG4gICAgICAnZG9jdG9yJzogJ2h0dHA6Ly9sYWR5LnpkZ3BocC5jbi9zcmMvaW1hZ2VzL2RvY3Rvci5wbmcnLFxyXG4gICAgICAnZGV0YWlsYmcnOiAnaHR0cDovL2xhZHkuemRncGhwLmNuL3NyYy9pbWFnZXMvZGV0YWlsX2JnLnBuZycsXHJcbiAgICAgICdkZWZhdWx0bGlzdCc6ICdodHRwOi8vbGFkeS56ZGdwaHAuY24vc3JjL2ltYWdlcy9kZWZhdWx0LWxpc3QucG5nJyxcclxuICAgICAgJ2FydGljbGVwb3N0JzogJ2h0dHA6Ly9sYWR5LnpkZ3BocC5jbi9zcmMvaW1hZ2VzL2FydGljbGVfcG9zdC5wbmcnLFxyXG4gICAgICAnbW9vZCc6ICdodHRwOi8vbGFkeS56ZGdwaHAuY24vc3JjL2ltYWdlcy9tb29kLnBuZydcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnVzZShcInJlcXVlc3RmaXhcIik7XHJcbiAgICB0aGlzLnVzZShcInByb21pc2lmeVwiKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIG9uTGF1bmNoKCkge1xyXG4gICAgaW50ZXJmYWNlcy5sb2dpbigpO1xyXG4gICAgbGV0IHVzZXJJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYygndXNlckluZm8nKVxyXG4gICAgdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvID0gdXNlckluZm9cclxuICB9XHJcbn1cclxuIl19
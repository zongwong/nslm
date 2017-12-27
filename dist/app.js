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
      pages: ["pages/index/index", "pages/index/pk", "pages/course/reply", "pages/course/clist", "pages/index/record", "pages/course/doctor", "pages/course/mentality", "pages/user/user", "pages/user/success", "pages/course/coursedetail", "pages/course/courselist", "pages/user/editinfo", "pages/course/course", "pages/course/articlelist", "pages/course/articledetail", "pages/user/myvideo", "pages/user/mooddetail", "pages/user/mood", "pages/user/top", "pages/user/mypublish", "pages/user/myexchange", "pages/user/exchange", "pages/user/money", "pages/user/moneydetail", "pages/index/start", "pages/index/detail"],
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
      config: null,
      imgs: {
        'post': 'https://www.2p98.cn/src/images/post.png',
        'cbone': 'https://www.2p98.cn/src/images/course_banner1.png',
        'cbtwo': 'https://www.2p98.cn/src/images/course_banner2.png',
        'cbthree': 'https://www.2p98.cn/src/images/course_banner3.png',
        'cbfour': 'https://www.2p98.cn/src/images/course_banner4.png',
        'fly': 'https://www.2p98.cn/src/images/pkbg.png',
        'userbg': 'https://www.2p98.cn/src/images/userbg.png',
        'coursebg': 'https://www.2p98.cn/src/images/coursebg.png',
        'fmbg': 'https://www.2p98.cn/src/images/fmbg.png',
        'testbg': 'https://www.2p98.cn/src/images/testbg.png',
        'banner': 'https://www.2p98.cn/src/images/banner.png',
        'editbg': 'https://www.2p98.cn/src/images/editbg.png',
        'moodbg': 'https://www.2p98.cn/src/images/moodbg.png',
        'pkpost': 'https://www.2p98.cn/src/images/pkpost.png',
        'topbg': 'https://www.2p98.cn/src/images/topbg.png',
        'vobg': 'https://www.2p98.cn/src/images/vobg.png',
        'moneybg': 'https://www.2p98.cn/src/images/moneybg.png',
        'doctor': 'https://www.2p98.cn/src/images/doctor.png',
        'detailbg': 'https://www.2p98.cn/src/images/detail_bg.png',
        'defaultlist': 'https://www.2p98.cn/src/images/default-list.png',
        'articlepost': 'https://www.2p98.cn/src/images/article_post.png',
        'mood': 'https://www.2p98.cn/src/images/mood.png'
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
        var userInfo, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _index2.default.login();

              case 2:
                userInfo = _wepy2.default.getStorageSync('userInfo');

                this.globalData.userInfo = userInfo;
                _context.next = 6;
                return _index2.default.globalConfig();

              case 6:
                data = _context.sent;

                if (data.code) {
                  this.globalData.config = data.info;
                }
                // console.log(this.globalData)

              case 8:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJzZWxlY3RlZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwidGV4dCIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsImltZ3MiLCJ1c2UiLCJsb2dpbiIsImdldFN0b3JhZ2VTeW5jIiwiZ2xvYmFsQ29uZmlnIiwiZGF0YSIsImNvZGUiLCJpbmZvIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQTJGRSxzQkFBYztBQUFBOztBQUFBOztBQUFBLFVBekZkQSxNQXlGYyxHQXpGTDtBQUNQQyxhQUFPLENBQ0wsbUJBREssRUFFTCxnQkFGSyxFQUdMLG9CQUhLLEVBSUwsb0JBSkssRUFLTCxvQkFMSyxFQU1MLHFCQU5LLEVBT0wsd0JBUEssRUFRTCxpQkFSSyxFQVNMLG9CQVRLLEVBVUwsMkJBVkssRUFXTCx5QkFYSyxFQVlMLHFCQVpLLEVBYUwscUJBYkssRUFjTCwwQkFkSyxFQWVMLDRCQWZLLEVBZ0JMLG9CQWhCSyxFQWlCTCx1QkFqQkssRUFrQkwsaUJBbEJLLEVBbUJMLGdCQW5CSyxFQW9CTCxzQkFwQkssRUFxQkwsdUJBckJLLEVBc0JMLHFCQXRCSyxFQXVCTCxrQkF2QkssRUF3Qkwsd0JBeEJLLEVBeUJMLG1CQXpCSyxFQTBCTCxvQkExQkssQ0FEQTtBQTZCUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsTUFGeEI7QUFHTkMsZ0NBQXdCLE9BSGxCO0FBSU5DLGdDQUF3QjtBQUpsQixPQTdCRDtBQW1DUEMsY0FBUTtBQUNOQyx1QkFBYyxTQURSO0FBRU5DLGNBQU0sQ0FDSjtBQUNFQyxvQkFBVSxtQkFEWjtBQUVFQyxnQkFBTSxJQUZSO0FBR0VDLG9CQUFVLHNCQUhaO0FBSUVDLDRCQUFrQjtBQUpwQixTQURJLEVBT0o7QUFDRUgsb0JBQVUscUJBRFo7QUFFRUMsZ0JBQU0sT0FGUjtBQUdFQyxvQkFBVSx3QkFIWjtBQUlFQyw0QkFBa0I7QUFKcEIsU0FQSSxFQWFKO0FBQ0VILG9CQUFVLGlCQURaO0FBRUVDLGdCQUFNLElBRlI7QUFHRUMsb0JBQVUsc0JBSFo7QUFJRUMsNEJBQWtCO0FBSnBCLFNBYkk7QUFGQTtBQW5DRCxLQXlGSztBQUFBLFVBN0JkQyxVQTZCYyxHQTdCRDtBQUNYQyxnQkFBVSxJQURDO0FBRVhmLGNBQVEsSUFGRztBQUdYZ0IsWUFBTTtBQUNKLGdCQUFRLHlDQURKO0FBRUosaUJBQVMsbURBRkw7QUFHSixpQkFBUyxtREFITDtBQUlKLG1CQUFXLG1EQUpQO0FBS0osa0JBQVUsbURBTE47QUFNSixlQUFPLHlDQU5IO0FBT0osa0JBQVUsMkNBUE47QUFRSixvQkFBWSw2Q0FSUjtBQVNKLGdCQUFRLHlDQVRKO0FBVUosa0JBQVUsMkNBVk47QUFXSixrQkFBVSwyQ0FYTjtBQVlKLGtCQUFVLDJDQVpOO0FBYUosa0JBQVUsMkNBYk47QUFjSixrQkFBVSwyQ0FkTjtBQWVKLGlCQUFTLDBDQWZMO0FBZ0JKLGdCQUFRLHlDQWhCSjtBQWlCSixtQkFBVyw0Q0FqQlA7QUFrQkosa0JBQVUsMkNBbEJOO0FBbUJKLG9CQUFZLDhDQW5CUjtBQW9CSix1QkFBZSxpREFwQlg7QUFxQkosdUJBQWUsaURBckJYO0FBc0JKLGdCQUFRO0FBdEJKO0FBSEssS0E2QkM7O0FBRVosVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFDQSxVQUFLQSxHQUFMLENBQVMsV0FBVDtBQUhZO0FBSWI7Ozs7Ozs7Ozs7Ozt1QkFHTyxnQkFBV0MsS0FBWCxFOzs7QUFDRkgsd0IsR0FBWSxlQUFLSSxjQUFMLENBQW9CLFVBQXBCLEM7O0FBQ2hCLHFCQUFLTCxVQUFMLENBQWdCQyxRQUFoQixHQUEyQkEsUUFBM0I7O3VCQUNpQixnQkFBV0ssWUFBWCxFOzs7QUFBYkMsb0I7O0FBQ0osb0JBQUtBLEtBQUtDLElBQVYsRUFBZ0I7QUFDZCx1QkFBS1IsVUFBTCxDQUFnQmQsTUFBaEIsR0FBeUJxQixLQUFLRSxJQUE5QjtBQUNEO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF4R3lCLGVBQUtDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XHJcbmltcG9ydCBcIndlcHktYXN5bmMtZnVuY3Rpb25cIjtcclxuaW1wb3J0IGludGVyZmFjZXMgZnJvbSBcIi4vaW50ZXJmYWNlL2luZGV4XCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIHBhZ2VzOiBbXHJcbiAgICAgIFwicGFnZXMvaW5kZXgvaW5kZXhcIiwgXHJcbiAgICAgIFwicGFnZXMvaW5kZXgvcGtcIiwgXHJcbiAgICAgIFwicGFnZXMvY291cnNlL3JlcGx5XCIsXHJcbiAgICAgIFwicGFnZXMvY291cnNlL2NsaXN0XCIsXHJcbiAgICAgIFwicGFnZXMvaW5kZXgvcmVjb3JkXCIsXHJcbiAgICAgIFwicGFnZXMvY291cnNlL2RvY3RvclwiLFxyXG4gICAgICBcInBhZ2VzL2NvdXJzZS9tZW50YWxpdHlcIixcclxuICAgICAgXCJwYWdlcy91c2VyL3VzZXJcIixcclxuICAgICAgXCJwYWdlcy91c2VyL3N1Y2Nlc3NcIixcclxuICAgICAgXCJwYWdlcy9jb3Vyc2UvY291cnNlZGV0YWlsXCIsXHJcbiAgICAgIFwicGFnZXMvY291cnNlL2NvdXJzZWxpc3RcIixcclxuICAgICAgXCJwYWdlcy91c2VyL2VkaXRpbmZvXCIsIFxyXG4gICAgICBcInBhZ2VzL2NvdXJzZS9jb3Vyc2VcIiwgXHJcbiAgICAgIFwicGFnZXMvY291cnNlL2FydGljbGVsaXN0XCIsIFxyXG4gICAgICBcInBhZ2VzL2NvdXJzZS9hcnRpY2xlZGV0YWlsXCIsIFxyXG4gICAgICBcInBhZ2VzL3VzZXIvbXl2aWRlb1wiLCBcclxuICAgICAgXCJwYWdlcy91c2VyL21vb2RkZXRhaWxcIiwgXHJcbiAgICAgIFwicGFnZXMvdXNlci9tb29kXCIsIFxyXG4gICAgICBcInBhZ2VzL3VzZXIvdG9wXCIsIFxyXG4gICAgICBcInBhZ2VzL3VzZXIvbXlwdWJsaXNoXCIsIFxyXG4gICAgICBcInBhZ2VzL3VzZXIvbXlleGNoYW5nZVwiLCBcclxuICAgICAgXCJwYWdlcy91c2VyL2V4Y2hhbmdlXCIsIFxyXG4gICAgICBcInBhZ2VzL3VzZXIvbW9uZXlcIiwgXHJcbiAgICAgIFwicGFnZXMvdXNlci9tb25leWRldGFpbFwiLFxyXG4gICAgICBcInBhZ2VzL2luZGV4L3N0YXJ0XCIsIFxyXG4gICAgICBcInBhZ2VzL2luZGV4L2RldGFpbFwiXHJcbiAgICBdLFxyXG4gICAgd2luZG93OiB7XHJcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6IFwibGlnaHRcIixcclxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogXCIjMDAwXCIsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6IFwi5aWz56We6K++56iL6KGoXCIsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6IFwid2hpdGVcIlxyXG4gICAgfSxcclxuICAgIHRhYkJhcjoge1xyXG4gICAgICBzZWxlY3RlZENvbG9yOicjZmY1MDhhJyxcclxuICAgICAgbGlzdDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBhZ2VQYXRoOiBcInBhZ2VzL2luZGV4L2luZGV4XCIsXHJcbiAgICAgICAgICB0ZXh0OiBcIummlumhtVwiLFxyXG4gICAgICAgICAgaWNvblBhdGg6IFwiaW1hZ2VzL2ljb24tbGlzdC5wbmdcIixcclxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6IFwiaW1hZ2VzL2ljb24tbGlzdC1vbi5wbmdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGFnZVBhdGg6IFwicGFnZXMvY291cnNlL2NvdXJzZVwiLFxyXG4gICAgICAgICAgdGV4dDogXCLkuqflkI7mgaLlpI3or75cIixcclxuICAgICAgICAgIGljb25QYXRoOiBcImltYWdlcy9pY29uLWNvdXJzZS5wbmdcIixcclxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6IFwiaW1hZ2VzL2ljb24tY291cnNlLW9uLnBuZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYWdlUGF0aDogXCJwYWdlcy91c2VyL3VzZXJcIixcclxuICAgICAgICAgIHRleHQ6IFwi5oiR55qEXCIsXHJcbiAgICAgICAgICBpY29uUGF0aDogXCJpbWFnZXMvaWNvbi11c2VyLnBuZ1wiLFxyXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogXCJpbWFnZXMvaWNvbi11c2VyLW9uLnBuZ1wiXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZ2xvYmFsRGF0YSA9IHtcclxuICAgIHVzZXJJbmZvOiBudWxsLFxyXG4gICAgY29uZmlnOiBudWxsLFxyXG4gICAgaW1nczoge1xyXG4gICAgICAncG9zdCc6ICdodHRwczovL3d3dy4ycDk4LmNuL3NyYy9pbWFnZXMvcG9zdC5wbmcnLFxyXG4gICAgICAnY2JvbmUnOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9zcmMvaW1hZ2VzL2NvdXJzZV9iYW5uZXIxLnBuZycsXHJcbiAgICAgICdjYnR3byc6ICdodHRwczovL3d3dy4ycDk4LmNuL3NyYy9pbWFnZXMvY291cnNlX2Jhbm5lcjIucG5nJyxcclxuICAgICAgJ2NidGhyZWUnOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9zcmMvaW1hZ2VzL2NvdXJzZV9iYW5uZXIzLnBuZycsXHJcbiAgICAgICdjYmZvdXInOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9zcmMvaW1hZ2VzL2NvdXJzZV9iYW5uZXI0LnBuZycsXHJcbiAgICAgICdmbHknOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9zcmMvaW1hZ2VzL3BrYmcucG5nJyxcclxuICAgICAgJ3VzZXJiZyc6ICdodHRwczovL3d3dy4ycDk4LmNuL3NyYy9pbWFnZXMvdXNlcmJnLnBuZycsXHJcbiAgICAgICdjb3Vyc2ViZyc6ICdodHRwczovL3d3dy4ycDk4LmNuL3NyYy9pbWFnZXMvY291cnNlYmcucG5nJyxcclxuICAgICAgJ2ZtYmcnOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9zcmMvaW1hZ2VzL2ZtYmcucG5nJyxcclxuICAgICAgJ3Rlc3RiZyc6ICdodHRwczovL3d3dy4ycDk4LmNuL3NyYy9pbWFnZXMvdGVzdGJnLnBuZycsXHJcbiAgICAgICdiYW5uZXInOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9zcmMvaW1hZ2VzL2Jhbm5lci5wbmcnLFxyXG4gICAgICAnZWRpdGJnJzogJ2h0dHBzOi8vd3d3LjJwOTguY24vc3JjL2ltYWdlcy9lZGl0YmcucG5nJyxcclxuICAgICAgJ21vb2RiZyc6ICdodHRwczovL3d3dy4ycDk4LmNuL3NyYy9pbWFnZXMvbW9vZGJnLnBuZycsXHJcbiAgICAgICdwa3Bvc3QnOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9zcmMvaW1hZ2VzL3BrcG9zdC5wbmcnLFxyXG4gICAgICAndG9wYmcnOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9zcmMvaW1hZ2VzL3RvcGJnLnBuZycsXHJcbiAgICAgICd2b2JnJzogJ2h0dHBzOi8vd3d3LjJwOTguY24vc3JjL2ltYWdlcy92b2JnLnBuZycsXHJcbiAgICAgICdtb25leWJnJzogJ2h0dHBzOi8vd3d3LjJwOTguY24vc3JjL2ltYWdlcy9tb25leWJnLnBuZycsXHJcbiAgICAgICdkb2N0b3InOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9zcmMvaW1hZ2VzL2RvY3Rvci5wbmcnLFxyXG4gICAgICAnZGV0YWlsYmcnOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9zcmMvaW1hZ2VzL2RldGFpbF9iZy5wbmcnLFxyXG4gICAgICAnZGVmYXVsdGxpc3QnOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9zcmMvaW1hZ2VzL2RlZmF1bHQtbGlzdC5wbmcnLFxyXG4gICAgICAnYXJ0aWNsZXBvc3QnOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9zcmMvaW1hZ2VzL2FydGljbGVfcG9zdC5wbmcnLFxyXG4gICAgICAnbW9vZCc6ICdodHRwczovL3d3dy4ycDk4LmNuL3NyYy9pbWFnZXMvbW9vZC5wbmcnXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy51c2UoXCJyZXF1ZXN0Zml4XCIpO1xyXG4gICAgdGhpcy51c2UoXCJwcm9taXNpZnlcIik7XHJcbiAgfVxyXG5cclxuICBhc3luYyBvbkxhdW5jaCgpIHtcclxuICAgIGF3YWl0IGludGVyZmFjZXMubG9naW4oKTtcclxuICAgIGxldCB1c2VySW5mbyA9ICB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd1c2VySW5mbycpXHJcbiAgICB0aGlzLmdsb2JhbERhdGEudXNlckluZm8gPSB1c2VySW5mb1xyXG4gICAgbGV0IGRhdGEgPSBhd2FpdCBpbnRlcmZhY2VzLmdsb2JhbENvbmZpZygpXHJcbiAgICBpZiAoIGRhdGEuY29kZSApe1xyXG4gICAgICB0aGlzLmdsb2JhbERhdGEuY29uZmlnID0gZGF0YS5pbmZvXHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmdsb2JhbERhdGEpXHJcbiAgfVxyXG59XHJcbiJdfQ==
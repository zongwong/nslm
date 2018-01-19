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
      pages: ["pages/index/index", "pages/index/post", "pages/user/money", "pages/user/exchange", "pages/index/start", "pages/user/editinfo", "pages/course/fmdetail", "pages/course/fm", "pages/index/pk", "pages/user/mymood", "pages/user/myjoin", "pages/user/mysc", "pages/course/reply", "pages/course/clist", "pages/index/record", "pages/course/doctor", "pages/course/mentality", "pages/user/user", "pages/user/success", "pages/course/coursedetail", "pages/course/courselist", "pages/course/course", "pages/course/articlelist", "pages/course/articledetail", "pages/user/mooddetail", "pages/user/mood", "pages/user/top", "pages/user/mypublish", "pages/user/myexchange", "pages/user/moneydetail", "pages/index/detail"],
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
          iconPath: "icon/aa.png",
          selectedIconPath: "icon/a.png"
        }, {
          pagePath: "pages/course/course",
          text: "产后恢复课",
          iconPath: "icon/bb.png",
          selectedIconPath: "icon/b.png"
        }, {
          pagePath: "pages/user/user",
          text: "我的",
          iconPath: "icon/cc.png",
          selectedIconPath: "icon/c.png"
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
                // this.$apply()

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJzZWxlY3RlZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwidGV4dCIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsImltZ3MiLCJ1c2UiLCJsb2dpbiIsImdldFN0b3JhZ2VTeW5jIiwiZ2xvYmFsQ29uZmlnIiwiZGF0YSIsImNvZGUiLCJpbmZvIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWdHRSxzQkFBYztBQUFBOztBQUFBOztBQUFBLFVBOUZkQSxNQThGYyxHQTlGTDtBQUNQQyxhQUFPLENBQ0wsbUJBREssRUFFTCxrQkFGSyxFQUdMLGtCQUhLLEVBSUwscUJBSkssRUFLTCxtQkFMSyxFQU1MLHFCQU5LLEVBT0wsdUJBUEssRUFRTCxpQkFSSyxFQVNMLGdCQVRLLEVBVUwsbUJBVkssRUFXTCxtQkFYSyxFQVlMLGlCQVpLLEVBYUwsb0JBYkssRUFjTCxvQkFkSyxFQWVMLG9CQWZLLEVBZ0JMLHFCQWhCSyxFQWlCTCx3QkFqQkssRUFrQkwsaUJBbEJLLEVBbUJMLG9CQW5CSyxFQW9CTCwyQkFwQkssRUFxQkwseUJBckJLLEVBc0JMLHFCQXRCSyxFQXVCTCwwQkF2QkssRUF3QkwsNEJBeEJLLEVBeUJMLHVCQXpCSyxFQTBCTCxpQkExQkssRUEyQkwsZ0JBM0JLLEVBNEJMLHNCQTVCSyxFQTZCTCx1QkE3QkssRUE4Qkwsd0JBOUJLLEVBK0JMLG9CQS9CSyxDQURBO0FBa0NQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixNQUZ4QjtBQUdOQyxnQ0FBd0IsT0FIbEI7QUFJTkMsZ0NBQXdCO0FBSmxCLE9BbENEO0FBd0NQQyxjQUFRO0FBQ05DLHVCQUFjLFNBRFI7QUFFTkMsY0FBTSxDQUNKO0FBQ0VDLG9CQUFVLG1CQURaO0FBRUVDLGdCQUFNLElBRlI7QUFHRUMsb0JBQVUsYUFIWjtBQUlFQyw0QkFBa0I7QUFKcEIsU0FESSxFQU9KO0FBQ0VILG9CQUFVLHFCQURaO0FBRUVDLGdCQUFNLE9BRlI7QUFHRUMsb0JBQVUsYUFIWjtBQUlFQyw0QkFBa0I7QUFKcEIsU0FQSSxFQWFKO0FBQ0VILG9CQUFVLGlCQURaO0FBRUVDLGdCQUFNLElBRlI7QUFHRUMsb0JBQVUsYUFIWjtBQUlFQyw0QkFBa0I7QUFKcEIsU0FiSTtBQUZBO0FBeENELEtBOEZLO0FBQUEsVUE3QmRDLFVBNkJjLEdBN0JEO0FBQ1hDLGdCQUFVLElBREM7QUFFWGYsY0FBUSxJQUZHO0FBR1hnQixZQUFNO0FBQ0osZ0JBQVEseUNBREo7QUFFSixpQkFBUyxtREFGTDtBQUdKLGlCQUFTLG1EQUhMO0FBSUosbUJBQVcsbURBSlA7QUFLSixrQkFBVSxtREFMTjtBQU1KLGVBQU8seUNBTkg7QUFPSixrQkFBVSwyQ0FQTjtBQVFKLG9CQUFZLDZDQVJSO0FBU0osZ0JBQVEseUNBVEo7QUFVSixrQkFBVSwyQ0FWTjtBQVdKLGtCQUFVLDJDQVhOO0FBWUosa0JBQVUsMkNBWk47QUFhSixrQkFBVSwyQ0FiTjtBQWNKLGtCQUFVLDJDQWROO0FBZUosaUJBQVMsMENBZkw7QUFnQkosZ0JBQVEseUNBaEJKO0FBaUJKLG1CQUFXLDRDQWpCUDtBQWtCSixrQkFBVSwyQ0FsQk47QUFtQkosb0JBQVksOENBbkJSO0FBb0JKLHVCQUFlLGlEQXBCWDtBQXFCSix1QkFBZSxpREFyQlg7QUFzQkosZ0JBQVE7QUF0Qko7QUFISyxLQTZCQzs7QUFFWixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUNBLFVBQUtBLEdBQUwsQ0FBUyxXQUFUO0FBSFk7QUFJYjs7Ozs7Ozs7Ozs7O3VCQUdPLGdCQUFXQyxLQUFYLEU7OztBQUNGSCx3QixHQUFZLGVBQUtJLGNBQUwsQ0FBb0IsVUFBcEIsQzs7QUFDaEIscUJBQUtMLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCQSxRQUEzQjs7dUJBQ2lCLGdCQUFXSyxZQUFYLEU7OztBQUFiQyxvQjs7QUFDSixvQkFBS0EsS0FBS0MsSUFBVixFQUFnQjtBQUNkLHVCQUFLUixVQUFMLENBQWdCZCxNQUFoQixHQUF5QnFCLEtBQUtFLElBQTlCO0FBQ0Q7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTdHeUIsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcclxuaW1wb3J0IFwid2VweS1hc3luYy1mdW5jdGlvblwiO1xyXG5pbXBvcnQgaW50ZXJmYWNlcyBmcm9tIFwiLi9pbnRlcmZhY2UvaW5kZXhcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgcGFnZXM6IFtcclxuICAgICAgXCJwYWdlcy9pbmRleC9pbmRleFwiLFxyXG4gICAgICBcInBhZ2VzL2luZGV4L3Bvc3RcIixcclxuICAgICAgXCJwYWdlcy91c2VyL21vbmV5XCIsIFxyXG4gICAgICBcInBhZ2VzL3VzZXIvZXhjaGFuZ2VcIiwgXHJcbiAgICAgIFwicGFnZXMvaW5kZXgvc3RhcnRcIixcclxuICAgICAgXCJwYWdlcy91c2VyL2VkaXRpbmZvXCIsXHJcbiAgICAgIFwicGFnZXMvY291cnNlL2ZtZGV0YWlsXCIsIFxyXG4gICAgICBcInBhZ2VzL2NvdXJzZS9mbVwiLCBcclxuICAgICAgXCJwYWdlcy9pbmRleC9wa1wiLFxyXG4gICAgICBcInBhZ2VzL3VzZXIvbXltb29kXCIsIFxyXG4gICAgICBcInBhZ2VzL3VzZXIvbXlqb2luXCIsIFxyXG4gICAgICBcInBhZ2VzL3VzZXIvbXlzY1wiLFxyXG4gICAgICBcInBhZ2VzL2NvdXJzZS9yZXBseVwiLFxyXG4gICAgICBcInBhZ2VzL2NvdXJzZS9jbGlzdFwiLFxyXG4gICAgICBcInBhZ2VzL2luZGV4L3JlY29yZFwiLFxyXG4gICAgICBcInBhZ2VzL2NvdXJzZS9kb2N0b3JcIixcclxuICAgICAgXCJwYWdlcy9jb3Vyc2UvbWVudGFsaXR5XCIsXHJcbiAgICAgIFwicGFnZXMvdXNlci91c2VyXCIsXHJcbiAgICAgIFwicGFnZXMvdXNlci9zdWNjZXNzXCIsXHJcbiAgICAgIFwicGFnZXMvY291cnNlL2NvdXJzZWRldGFpbFwiLFxyXG4gICAgICBcInBhZ2VzL2NvdXJzZS9jb3Vyc2VsaXN0XCIsXHJcbiAgICAgIFwicGFnZXMvY291cnNlL2NvdXJzZVwiLCBcclxuICAgICAgXCJwYWdlcy9jb3Vyc2UvYXJ0aWNsZWxpc3RcIiwgXHJcbiAgICAgIFwicGFnZXMvY291cnNlL2FydGljbGVkZXRhaWxcIiwgXHJcbiAgICAgIFwicGFnZXMvdXNlci9tb29kZGV0YWlsXCIsIFxyXG4gICAgICBcInBhZ2VzL3VzZXIvbW9vZFwiLCBcclxuICAgICAgXCJwYWdlcy91c2VyL3RvcFwiLCBcclxuICAgICAgXCJwYWdlcy91c2VyL215cHVibGlzaFwiLCBcclxuICAgICAgXCJwYWdlcy91c2VyL215ZXhjaGFuZ2VcIiwgXHJcbiAgICAgIFwicGFnZXMvdXNlci9tb25leWRldGFpbFwiLFxyXG4gICAgICBcInBhZ2VzL2luZGV4L2RldGFpbFwiXHJcbiAgICBdLFxyXG4gICAgd2luZG93OiB7XHJcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6IFwibGlnaHRcIixcclxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogXCIjMDAwXCIsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6IFwi5aWz56We6K++56iL6KGoXCIsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6IFwid2hpdGVcIlxyXG4gICAgfSxcclxuICAgIHRhYkJhcjoge1xyXG4gICAgICBzZWxlY3RlZENvbG9yOicjZmY1MDhhJyxcclxuICAgICAgbGlzdDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBhZ2VQYXRoOiBcInBhZ2VzL2luZGV4L2luZGV4XCIsXHJcbiAgICAgICAgICB0ZXh0OiBcIummlumhtVwiLFxyXG4gICAgICAgICAgaWNvblBhdGg6IFwiaWNvbi9hYS5wbmdcIixcclxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6IFwiaWNvbi9hLnBuZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYWdlUGF0aDogXCJwYWdlcy9jb3Vyc2UvY291cnNlXCIsXHJcbiAgICAgICAgICB0ZXh0OiBcIuS6p+WQjuaBouWkjeivvlwiLFxyXG4gICAgICAgICAgaWNvblBhdGg6IFwiaWNvbi9iYi5wbmdcIixcclxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6IFwiaWNvbi9iLnBuZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IFxyXG4gICAgICAgICAgcGFnZVBhdGg6IFwicGFnZXMvdXNlci91c2VyXCIsXHJcbiAgICAgICAgICB0ZXh0OiBcIuaIkeeahFwiLFxyXG4gICAgICAgICAgaWNvblBhdGg6IFwiaWNvbi9jYy5wbmdcIixcclxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6IFwiaWNvbi9jLnBuZ1wiXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZ2xvYmFsRGF0YSA9IHtcclxuICAgIHVzZXJJbmZvOiBudWxsLFxyXG4gICAgY29uZmlnOiBudWxsLFxyXG4gICAgaW1nczoge1xyXG4gICAgICAncG9zdCc6ICdodHRwczovL3d3dy4ycDk4LmNuL3NyYy9pbWFnZXMvcG9zdC5wbmcnLFxyXG4gICAgICAnY2JvbmUnOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9zcmMvaW1hZ2VzL2NvdXJzZV9iYW5uZXIxLnBuZycsXHJcbiAgICAgICdjYnR3byc6ICdodHRwczovL3d3dy4ycDk4LmNuL3NyYy9pbWFnZXMvY291cnNlX2Jhbm5lcjIucG5nJyxcclxuICAgICAgJ2NidGhyZWUnOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9zcmMvaW1hZ2VzL2NvdXJzZV9iYW5uZXIzLnBuZycsXHJcbiAgICAgICdjYmZvdXInOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9zcmMvaW1hZ2VzL2NvdXJzZV9iYW5uZXI0LnBuZycsXHJcbiAgICAgICdmbHknOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9zcmMvaW1hZ2VzL3BrYmcucG5nJyxcclxuICAgICAgJ3VzZXJiZyc6ICdodHRwczovL3d3dy4ycDk4LmNuL3NyYy9pbWFnZXMvdXNlcmJnLnBuZycsXHJcbiAgICAgICdjb3Vyc2ViZyc6ICdodHRwczovL3d3dy4ycDk4LmNuL3NyYy9pbWFnZXMvY291cnNlYmcucG5nJyxcclxuICAgICAgJ2ZtYmcnOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9zcmMvaW1hZ2VzL2ZtYmcucG5nJyxcclxuICAgICAgJ3Rlc3RiZyc6ICdodHRwczovL3d3dy4ycDk4LmNuL3NyYy9pbWFnZXMvdGVzdGJnLnBuZycsXHJcbiAgICAgICdiYW5uZXInOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9zcmMvaW1hZ2VzL2Jhbm5lci5wbmcnLFxyXG4gICAgICAnZWRpdGJnJzogJ2h0dHBzOi8vd3d3LjJwOTguY24vc3JjL2ltYWdlcy9lZGl0YmcucG5nJyxcclxuICAgICAgJ21vb2RiZyc6ICdodHRwczovL3d3dy4ycDk4LmNuL3NyYy9pbWFnZXMvbW9vZGJnLnBuZycsXHJcbiAgICAgICdwa3Bvc3QnOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9zcmMvaW1hZ2VzL3BrcG9zdC5wbmcnLFxyXG4gICAgICAndG9wYmcnOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9zcmMvaW1hZ2VzL3RvcGJnLnBuZycsXHJcbiAgICAgICd2b2JnJzogJ2h0dHBzOi8vd3d3LjJwOTguY24vc3JjL2ltYWdlcy92b2JnLnBuZycsXHJcbiAgICAgICdtb25leWJnJzogJ2h0dHBzOi8vd3d3LjJwOTguY24vc3JjL2ltYWdlcy9tb25leWJnLnBuZycsXHJcbiAgICAgICdkb2N0b3InOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9zcmMvaW1hZ2VzL2RvY3Rvci5wbmcnLFxyXG4gICAgICAnZGV0YWlsYmcnOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9zcmMvaW1hZ2VzL2RldGFpbF9iZy5wbmcnLFxyXG4gICAgICAnZGVmYXVsdGxpc3QnOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9zcmMvaW1hZ2VzL2RlZmF1bHQtbGlzdC5wbmcnLFxyXG4gICAgICAnYXJ0aWNsZXBvc3QnOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9zcmMvaW1hZ2VzL2FydGljbGVfcG9zdC5wbmcnLFxyXG4gICAgICAnbW9vZCc6ICdodHRwczovL3d3dy4ycDk4LmNuL3NyYy9pbWFnZXMvbW9vZC5wbmcnXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy51c2UoXCJyZXF1ZXN0Zml4XCIpO1xyXG4gICAgdGhpcy51c2UoXCJwcm9taXNpZnlcIik7XHJcbiAgfVxyXG5cclxuICBhc3luYyBvbkxhdW5jaCgpIHtcclxuICAgIGF3YWl0IGludGVyZmFjZXMubG9naW4oKTtcclxuICAgIGxldCB1c2VySW5mbyA9ICB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd1c2VySW5mbycpXHJcbiAgICB0aGlzLmdsb2JhbERhdGEudXNlckluZm8gPSB1c2VySW5mb1xyXG4gICAgbGV0IGRhdGEgPSBhd2FpdCBpbnRlcmZhY2VzLmdsb2JhbENvbmZpZygpXHJcbiAgICBpZiAoIGRhdGEuY29kZSApe1xyXG4gICAgICB0aGlzLmdsb2JhbERhdGEuY29uZmlnID0gZGF0YS5pbmZvXHJcbiAgICB9XHJcbiAgICAvLyB0aGlzLiRhcHBseSgpXHJcbiAgfVxyXG59XHJcbiJdfQ==
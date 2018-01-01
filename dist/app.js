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
      pages: ["pages/index/index", "pages/user/mymood", "pages/user/myjoin", "pages/user/mysc", "pages/index/pk", "pages/course/reply", "pages/course/clist", "pages/index/record", "pages/course/doctor", "pages/course/mentality", "pages/user/user", "pages/user/success", "pages/course/coursedetail", "pages/course/courselist", "pages/user/editinfo", "pages/course/course", "pages/course/articlelist", "pages/course/articledetail", "pages/user/mooddetail", "pages/user/mood", "pages/user/top", "pages/user/mypublish", "pages/user/myexchange", "pages/user/exchange", "pages/user/money", "pages/user/moneydetail", "pages/index/start", "pages/index/detail"],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJzZWxlY3RlZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwidGV4dCIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsImltZ3MiLCJ1c2UiLCJsb2dpbiIsImdldFN0b3JhZ2VTeW5jIiwiZ2xvYmFsQ29uZmlnIiwiZGF0YSIsImNvZGUiLCJpbmZvIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQTZGRSxzQkFBYztBQUFBOztBQUFBOztBQUFBLFVBM0ZkQSxNQTJGYyxHQTNGTDtBQUNQQyxhQUFPLENBQ0wsbUJBREssRUFFTCxtQkFGSyxFQUdMLG1CQUhLLEVBSUwsaUJBSkssRUFLTCxnQkFMSyxFQU1MLG9CQU5LLEVBT0wsb0JBUEssRUFRTCxvQkFSSyxFQVNMLHFCQVRLLEVBVUwsd0JBVkssRUFXTCxpQkFYSyxFQVlMLG9CQVpLLEVBYUwsMkJBYkssRUFjTCx5QkFkSyxFQWVMLHFCQWZLLEVBZ0JMLHFCQWhCSyxFQWlCTCwwQkFqQkssRUFrQkwsNEJBbEJLLEVBbUJMLHVCQW5CSyxFQW9CTCxpQkFwQkssRUFxQkwsZ0JBckJLLEVBc0JMLHNCQXRCSyxFQXVCTCx1QkF2QkssRUF3QkwscUJBeEJLLEVBeUJMLGtCQXpCSyxFQTBCTCx3QkExQkssRUEyQkwsbUJBM0JLLEVBNEJMLG9CQTVCSyxDQURBO0FBK0JQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixNQUZ4QjtBQUdOQyxnQ0FBd0IsT0FIbEI7QUFJTkMsZ0NBQXdCO0FBSmxCLE9BL0JEO0FBcUNQQyxjQUFRO0FBQ05DLHVCQUFjLFNBRFI7QUFFTkMsY0FBTSxDQUNKO0FBQ0VDLG9CQUFVLG1CQURaO0FBRUVDLGdCQUFNLElBRlI7QUFHRUMsb0JBQVUsYUFIWjtBQUlFQyw0QkFBa0I7QUFKcEIsU0FESSxFQU9KO0FBQ0VILG9CQUFVLHFCQURaO0FBRUVDLGdCQUFNLE9BRlI7QUFHRUMsb0JBQVUsYUFIWjtBQUlFQyw0QkFBa0I7QUFKcEIsU0FQSSxFQWFKO0FBQ0VILG9CQUFVLGlCQURaO0FBRUVDLGdCQUFNLElBRlI7QUFHRUMsb0JBQVUsYUFIWjtBQUlFQyw0QkFBa0I7QUFKcEIsU0FiSTtBQUZBO0FBckNELEtBMkZLO0FBQUEsVUE3QmRDLFVBNkJjLEdBN0JEO0FBQ1hDLGdCQUFVLElBREM7QUFFWGYsY0FBUSxJQUZHO0FBR1hnQixZQUFNO0FBQ0osZ0JBQVEseUNBREo7QUFFSixpQkFBUyxtREFGTDtBQUdKLGlCQUFTLG1EQUhMO0FBSUosbUJBQVcsbURBSlA7QUFLSixrQkFBVSxtREFMTjtBQU1KLGVBQU8seUNBTkg7QUFPSixrQkFBVSwyQ0FQTjtBQVFKLG9CQUFZLDZDQVJSO0FBU0osZ0JBQVEseUNBVEo7QUFVSixrQkFBVSwyQ0FWTjtBQVdKLGtCQUFVLDJDQVhOO0FBWUosa0JBQVUsMkNBWk47QUFhSixrQkFBVSwyQ0FiTjtBQWNKLGtCQUFVLDJDQWROO0FBZUosaUJBQVMsMENBZkw7QUFnQkosZ0JBQVEseUNBaEJKO0FBaUJKLG1CQUFXLDRDQWpCUDtBQWtCSixrQkFBVSwyQ0FsQk47QUFtQkosb0JBQVksOENBbkJSO0FBb0JKLHVCQUFlLGlEQXBCWDtBQXFCSix1QkFBZSxpREFyQlg7QUFzQkosZ0JBQVE7QUF0Qko7QUFISyxLQTZCQzs7QUFFWixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUNBLFVBQUtBLEdBQUwsQ0FBUyxXQUFUO0FBSFk7QUFJYjs7Ozs7Ozs7Ozs7O3VCQUdPLGdCQUFXQyxLQUFYLEU7OztBQUNGSCx3QixHQUFZLGVBQUtJLGNBQUwsQ0FBb0IsVUFBcEIsQzs7QUFDaEIscUJBQUtMLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCQSxRQUEzQjs7dUJBQ2lCLGdCQUFXSyxZQUFYLEU7OztBQUFiQyxvQjs7QUFDSixvQkFBS0EsS0FBS0MsSUFBVixFQUFnQjtBQUNkLHVCQUFLUixVQUFMLENBQWdCZCxNQUFoQixHQUF5QnFCLEtBQUtFLElBQTlCO0FBQ0Q7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTFHeUIsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcclxuaW1wb3J0IFwid2VweS1hc3luYy1mdW5jdGlvblwiO1xyXG5pbXBvcnQgaW50ZXJmYWNlcyBmcm9tIFwiLi9pbnRlcmZhY2UvaW5kZXhcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgcGFnZXM6IFtcclxuICAgICAgXCJwYWdlcy9pbmRleC9pbmRleFwiLCBcclxuICAgICAgXCJwYWdlcy91c2VyL215bW9vZFwiLCBcclxuICAgICAgXCJwYWdlcy91c2VyL215am9pblwiLCBcclxuICAgICAgXCJwYWdlcy91c2VyL215c2NcIixcclxuICAgICAgXCJwYWdlcy9pbmRleC9wa1wiLCBcclxuICAgICAgXCJwYWdlcy9jb3Vyc2UvcmVwbHlcIixcclxuICAgICAgXCJwYWdlcy9jb3Vyc2UvY2xpc3RcIixcclxuICAgICAgXCJwYWdlcy9pbmRleC9yZWNvcmRcIixcclxuICAgICAgXCJwYWdlcy9jb3Vyc2UvZG9jdG9yXCIsXHJcbiAgICAgIFwicGFnZXMvY291cnNlL21lbnRhbGl0eVwiLFxyXG4gICAgICBcInBhZ2VzL3VzZXIvdXNlclwiLFxyXG4gICAgICBcInBhZ2VzL3VzZXIvc3VjY2Vzc1wiLFxyXG4gICAgICBcInBhZ2VzL2NvdXJzZS9jb3Vyc2VkZXRhaWxcIixcclxuICAgICAgXCJwYWdlcy9jb3Vyc2UvY291cnNlbGlzdFwiLFxyXG4gICAgICBcInBhZ2VzL3VzZXIvZWRpdGluZm9cIiwgXHJcbiAgICAgIFwicGFnZXMvY291cnNlL2NvdXJzZVwiLCBcclxuICAgICAgXCJwYWdlcy9jb3Vyc2UvYXJ0aWNsZWxpc3RcIiwgXHJcbiAgICAgIFwicGFnZXMvY291cnNlL2FydGljbGVkZXRhaWxcIiwgXHJcbiAgICAgIFwicGFnZXMvdXNlci9tb29kZGV0YWlsXCIsIFxyXG4gICAgICBcInBhZ2VzL3VzZXIvbW9vZFwiLCBcclxuICAgICAgXCJwYWdlcy91c2VyL3RvcFwiLCBcclxuICAgICAgXCJwYWdlcy91c2VyL215cHVibGlzaFwiLCBcclxuICAgICAgXCJwYWdlcy91c2VyL215ZXhjaGFuZ2VcIiwgXHJcbiAgICAgIFwicGFnZXMvdXNlci9leGNoYW5nZVwiLCBcclxuICAgICAgXCJwYWdlcy91c2VyL21vbmV5XCIsIFxyXG4gICAgICBcInBhZ2VzL3VzZXIvbW9uZXlkZXRhaWxcIixcclxuICAgICAgXCJwYWdlcy9pbmRleC9zdGFydFwiLCBcclxuICAgICAgXCJwYWdlcy9pbmRleC9kZXRhaWxcIlxyXG4gICAgXSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiBcImxpZ2h0XCIsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMFwiLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBcIuWls+elnuivvueoi+ihqFwiLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiBcIndoaXRlXCJcclxuICAgIH0sXHJcbiAgICB0YWJCYXI6IHtcclxuICAgICAgc2VsZWN0ZWRDb2xvcjonI2ZmNTA4YScsXHJcbiAgICAgIGxpc3Q6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYWdlUGF0aDogXCJwYWdlcy9pbmRleC9pbmRleFwiLFxyXG4gICAgICAgICAgdGV4dDogXCLpppbpobVcIixcclxuICAgICAgICAgIGljb25QYXRoOiBcImljb24vYWEucG5nXCIsXHJcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiBcImljb24vYS5wbmdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGFnZVBhdGg6IFwicGFnZXMvY291cnNlL2NvdXJzZVwiLFxyXG4gICAgICAgICAgdGV4dDogXCLkuqflkI7mgaLlpI3or75cIixcclxuICAgICAgICAgIGljb25QYXRoOiBcImljb24vYmIucG5nXCIsXHJcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiBcImljb24vYi5wbmdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBcclxuICAgICAgICAgIHBhZ2VQYXRoOiBcInBhZ2VzL3VzZXIvdXNlclwiLFxyXG4gICAgICAgICAgdGV4dDogXCLmiJHnmoRcIixcclxuICAgICAgICAgIGljb25QYXRoOiBcImljb24vY2MucG5nXCIsXHJcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiBcImljb24vYy5wbmdcIlxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGdsb2JhbERhdGEgPSB7XHJcbiAgICB1c2VySW5mbzogbnVsbCxcclxuICAgIGNvbmZpZzogbnVsbCxcclxuICAgIGltZ3M6IHtcclxuICAgICAgJ3Bvc3QnOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9zcmMvaW1hZ2VzL3Bvc3QucG5nJyxcclxuICAgICAgJ2Nib25lJzogJ2h0dHBzOi8vd3d3LjJwOTguY24vc3JjL2ltYWdlcy9jb3Vyc2VfYmFubmVyMS5wbmcnLFxyXG4gICAgICAnY2J0d28nOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9zcmMvaW1hZ2VzL2NvdXJzZV9iYW5uZXIyLnBuZycsXHJcbiAgICAgICdjYnRocmVlJzogJ2h0dHBzOi8vd3d3LjJwOTguY24vc3JjL2ltYWdlcy9jb3Vyc2VfYmFubmVyMy5wbmcnLFxyXG4gICAgICAnY2Jmb3VyJzogJ2h0dHBzOi8vd3d3LjJwOTguY24vc3JjL2ltYWdlcy9jb3Vyc2VfYmFubmVyNC5wbmcnLFxyXG4gICAgICAnZmx5JzogJ2h0dHBzOi8vd3d3LjJwOTguY24vc3JjL2ltYWdlcy9wa2JnLnBuZycsXHJcbiAgICAgICd1c2VyYmcnOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9zcmMvaW1hZ2VzL3VzZXJiZy5wbmcnLFxyXG4gICAgICAnY291cnNlYmcnOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9zcmMvaW1hZ2VzL2NvdXJzZWJnLnBuZycsXHJcbiAgICAgICdmbWJnJzogJ2h0dHBzOi8vd3d3LjJwOTguY24vc3JjL2ltYWdlcy9mbWJnLnBuZycsXHJcbiAgICAgICd0ZXN0YmcnOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9zcmMvaW1hZ2VzL3Rlc3RiZy5wbmcnLFxyXG4gICAgICAnYmFubmVyJzogJ2h0dHBzOi8vd3d3LjJwOTguY24vc3JjL2ltYWdlcy9iYW5uZXIucG5nJyxcclxuICAgICAgJ2VkaXRiZyc6ICdodHRwczovL3d3dy4ycDk4LmNuL3NyYy9pbWFnZXMvZWRpdGJnLnBuZycsXHJcbiAgICAgICdtb29kYmcnOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9zcmMvaW1hZ2VzL21vb2RiZy5wbmcnLFxyXG4gICAgICAncGtwb3N0JzogJ2h0dHBzOi8vd3d3LjJwOTguY24vc3JjL2ltYWdlcy9wa3Bvc3QucG5nJyxcclxuICAgICAgJ3RvcGJnJzogJ2h0dHBzOi8vd3d3LjJwOTguY24vc3JjL2ltYWdlcy90b3BiZy5wbmcnLFxyXG4gICAgICAndm9iZyc6ICdodHRwczovL3d3dy4ycDk4LmNuL3NyYy9pbWFnZXMvdm9iZy5wbmcnLFxyXG4gICAgICAnbW9uZXliZyc6ICdodHRwczovL3d3dy4ycDk4LmNuL3NyYy9pbWFnZXMvbW9uZXliZy5wbmcnLFxyXG4gICAgICAnZG9jdG9yJzogJ2h0dHBzOi8vd3d3LjJwOTguY24vc3JjL2ltYWdlcy9kb2N0b3IucG5nJyxcclxuICAgICAgJ2RldGFpbGJnJzogJ2h0dHBzOi8vd3d3LjJwOTguY24vc3JjL2ltYWdlcy9kZXRhaWxfYmcucG5nJyxcclxuICAgICAgJ2RlZmF1bHRsaXN0JzogJ2h0dHBzOi8vd3d3LjJwOTguY24vc3JjL2ltYWdlcy9kZWZhdWx0LWxpc3QucG5nJyxcclxuICAgICAgJ2FydGljbGVwb3N0JzogJ2h0dHBzOi8vd3d3LjJwOTguY24vc3JjL2ltYWdlcy9hcnRpY2xlX3Bvc3QucG5nJyxcclxuICAgICAgJ21vb2QnOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9zcmMvaW1hZ2VzL21vb2QucG5nJ1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMudXNlKFwicmVxdWVzdGZpeFwiKTtcclxuICAgIHRoaXMudXNlKFwicHJvbWlzaWZ5XCIpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgb25MYXVuY2goKSB7XHJcbiAgICBhd2FpdCBpbnRlcmZhY2VzLmxvZ2luKCk7XHJcbiAgICBsZXQgdXNlckluZm8gPSAgd2VweS5nZXRTdG9yYWdlU3luYygndXNlckluZm8nKVxyXG4gICAgdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvID0gdXNlckluZm9cclxuICAgIGxldCBkYXRhID0gYXdhaXQgaW50ZXJmYWNlcy5nbG9iYWxDb25maWcoKVxyXG4gICAgaWYgKCBkYXRhLmNvZGUgKXtcclxuICAgICAgdGhpcy5nbG9iYWxEYXRhLmNvbmZpZyA9IGRhdGEuaW5mb1xyXG4gICAgfVxyXG4gICAgLy8gdGhpcy4kYXBwbHkoKVxyXG4gIH1cclxufVxyXG4iXX0=
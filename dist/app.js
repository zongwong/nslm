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
      pages: ["pages/index/index", "pages/index/post", "pages/index/pk", "pages/user/mymood", "pages/user/myjoin", "pages/user/mysc", "pages/course/reply", "pages/course/clist", "pages/index/record", "pages/course/doctor", "pages/course/mentality", "pages/user/user", "pages/user/success", "pages/course/coursedetail", "pages/course/courselist", "pages/user/editinfo", "pages/course/course", "pages/course/articlelist", "pages/course/articledetail", "pages/user/mooddetail", "pages/user/mood", "pages/user/top", "pages/user/mypublish", "pages/user/myexchange", "pages/user/exchange", "pages/user/money", "pages/user/moneydetail", "pages/index/start", "pages/index/detail"],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJzZWxlY3RlZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwidGV4dCIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsImltZ3MiLCJ1c2UiLCJsb2dpbiIsImdldFN0b3JhZ2VTeW5jIiwiZ2xvYmFsQ29uZmlnIiwiZGF0YSIsImNvZGUiLCJpbmZvIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQThGRSxzQkFBYztBQUFBOztBQUFBOztBQUFBLFVBNUZkQSxNQTRGYyxHQTVGTDtBQUNQQyxhQUFPLENBQ0wsbUJBREssRUFFTCxrQkFGSyxFQUdMLGdCQUhLLEVBSUwsbUJBSkssRUFLTCxtQkFMSyxFQU1MLGlCQU5LLEVBT0wsb0JBUEssRUFRTCxvQkFSSyxFQVNMLG9CQVRLLEVBVUwscUJBVkssRUFXTCx3QkFYSyxFQVlMLGlCQVpLLEVBYUwsb0JBYkssRUFjTCwyQkFkSyxFQWVMLHlCQWZLLEVBZ0JMLHFCQWhCSyxFQWlCTCxxQkFqQkssRUFrQkwsMEJBbEJLLEVBbUJMLDRCQW5CSyxFQW9CTCx1QkFwQkssRUFxQkwsaUJBckJLLEVBc0JMLGdCQXRCSyxFQXVCTCxzQkF2QkssRUF3QkwsdUJBeEJLLEVBeUJMLHFCQXpCSyxFQTBCTCxrQkExQkssRUEyQkwsd0JBM0JLLEVBNEJMLG1CQTVCSyxFQTZCTCxvQkE3QkssQ0FEQTtBQWdDUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsTUFGeEI7QUFHTkMsZ0NBQXdCLE9BSGxCO0FBSU5DLGdDQUF3QjtBQUpsQixPQWhDRDtBQXNDUEMsY0FBUTtBQUNOQyx1QkFBYyxTQURSO0FBRU5DLGNBQU0sQ0FDSjtBQUNFQyxvQkFBVSxtQkFEWjtBQUVFQyxnQkFBTSxJQUZSO0FBR0VDLG9CQUFVLGFBSFo7QUFJRUMsNEJBQWtCO0FBSnBCLFNBREksRUFPSjtBQUNFSCxvQkFBVSxxQkFEWjtBQUVFQyxnQkFBTSxPQUZSO0FBR0VDLG9CQUFVLGFBSFo7QUFJRUMsNEJBQWtCO0FBSnBCLFNBUEksRUFhSjtBQUNFSCxvQkFBVSxpQkFEWjtBQUVFQyxnQkFBTSxJQUZSO0FBR0VDLG9CQUFVLGFBSFo7QUFJRUMsNEJBQWtCO0FBSnBCLFNBYkk7QUFGQTtBQXRDRCxLQTRGSztBQUFBLFVBN0JkQyxVQTZCYyxHQTdCRDtBQUNYQyxnQkFBVSxJQURDO0FBRVhmLGNBQVEsSUFGRztBQUdYZ0IsWUFBTTtBQUNKLGdCQUFRLHlDQURKO0FBRUosaUJBQVMsbURBRkw7QUFHSixpQkFBUyxtREFITDtBQUlKLG1CQUFXLG1EQUpQO0FBS0osa0JBQVUsbURBTE47QUFNSixlQUFPLHlDQU5IO0FBT0osa0JBQVUsMkNBUE47QUFRSixvQkFBWSw2Q0FSUjtBQVNKLGdCQUFRLHlDQVRKO0FBVUosa0JBQVUsMkNBVk47QUFXSixrQkFBVSwyQ0FYTjtBQVlKLGtCQUFVLDJDQVpOO0FBYUosa0JBQVUsMkNBYk47QUFjSixrQkFBVSwyQ0FkTjtBQWVKLGlCQUFTLDBDQWZMO0FBZ0JKLGdCQUFRLHlDQWhCSjtBQWlCSixtQkFBVyw0Q0FqQlA7QUFrQkosa0JBQVUsMkNBbEJOO0FBbUJKLG9CQUFZLDhDQW5CUjtBQW9CSix1QkFBZSxpREFwQlg7QUFxQkosdUJBQWUsaURBckJYO0FBc0JKLGdCQUFRO0FBdEJKO0FBSEssS0E2QkM7O0FBRVosVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFDQSxVQUFLQSxHQUFMLENBQVMsV0FBVDtBQUhZO0FBSWI7Ozs7Ozs7Ozs7Ozt1QkFHTyxnQkFBV0MsS0FBWCxFOzs7QUFDRkgsd0IsR0FBWSxlQUFLSSxjQUFMLENBQW9CLFVBQXBCLEM7O0FBQ2hCLHFCQUFLTCxVQUFMLENBQWdCQyxRQUFoQixHQUEyQkEsUUFBM0I7O3VCQUNpQixnQkFBV0ssWUFBWCxFOzs7QUFBYkMsb0I7O0FBQ0osb0JBQUtBLEtBQUtDLElBQVYsRUFBZ0I7QUFDZCx1QkFBS1IsVUFBTCxDQUFnQmQsTUFBaEIsR0FBeUJxQixLQUFLRSxJQUE5QjtBQUNEO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEzR3lCLGVBQUtDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XHJcbmltcG9ydCBcIndlcHktYXN5bmMtZnVuY3Rpb25cIjtcclxuaW1wb3J0IGludGVyZmFjZXMgZnJvbSBcIi4vaW50ZXJmYWNlL2luZGV4XCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIHBhZ2VzOiBbXHJcbiAgICAgIFwicGFnZXMvaW5kZXgvaW5kZXhcIiwgXHJcbiAgICAgIFwicGFnZXMvaW5kZXgvcG9zdFwiLFxyXG4gICAgICBcInBhZ2VzL2luZGV4L3BrXCIsXHJcbiAgICAgIFwicGFnZXMvdXNlci9teW1vb2RcIiwgXHJcbiAgICAgIFwicGFnZXMvdXNlci9teWpvaW5cIiwgXHJcbiAgICAgIFwicGFnZXMvdXNlci9teXNjXCIsXHJcbiAgICAgIFwicGFnZXMvY291cnNlL3JlcGx5XCIsXHJcbiAgICAgIFwicGFnZXMvY291cnNlL2NsaXN0XCIsXHJcbiAgICAgIFwicGFnZXMvaW5kZXgvcmVjb3JkXCIsXHJcbiAgICAgIFwicGFnZXMvY291cnNlL2RvY3RvclwiLFxyXG4gICAgICBcInBhZ2VzL2NvdXJzZS9tZW50YWxpdHlcIixcclxuICAgICAgXCJwYWdlcy91c2VyL3VzZXJcIixcclxuICAgICAgXCJwYWdlcy91c2VyL3N1Y2Nlc3NcIixcclxuICAgICAgXCJwYWdlcy9jb3Vyc2UvY291cnNlZGV0YWlsXCIsXHJcbiAgICAgIFwicGFnZXMvY291cnNlL2NvdXJzZWxpc3RcIixcclxuICAgICAgXCJwYWdlcy91c2VyL2VkaXRpbmZvXCIsIFxyXG4gICAgICBcInBhZ2VzL2NvdXJzZS9jb3Vyc2VcIiwgXHJcbiAgICAgIFwicGFnZXMvY291cnNlL2FydGljbGVsaXN0XCIsIFxyXG4gICAgICBcInBhZ2VzL2NvdXJzZS9hcnRpY2xlZGV0YWlsXCIsIFxyXG4gICAgICBcInBhZ2VzL3VzZXIvbW9vZGRldGFpbFwiLCBcclxuICAgICAgXCJwYWdlcy91c2VyL21vb2RcIiwgXHJcbiAgICAgIFwicGFnZXMvdXNlci90b3BcIiwgXHJcbiAgICAgIFwicGFnZXMvdXNlci9teXB1Ymxpc2hcIiwgXHJcbiAgICAgIFwicGFnZXMvdXNlci9teWV4Y2hhbmdlXCIsIFxyXG4gICAgICBcInBhZ2VzL3VzZXIvZXhjaGFuZ2VcIiwgXHJcbiAgICAgIFwicGFnZXMvdXNlci9tb25leVwiLCBcclxuICAgICAgXCJwYWdlcy91c2VyL21vbmV5ZGV0YWlsXCIsXHJcbiAgICAgIFwicGFnZXMvaW5kZXgvc3RhcnRcIiwgXHJcbiAgICAgIFwicGFnZXMvaW5kZXgvZGV0YWlsXCJcclxuICAgIF0sXHJcbiAgICB3aW5kb3c6IHtcclxuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogXCJsaWdodFwiLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiBcIiMwMDBcIixcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogXCLlpbPnpZ7or77nqIvooahcIixcclxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogXCJ3aGl0ZVwiXHJcbiAgICB9LFxyXG4gICAgdGFiQmFyOiB7XHJcbiAgICAgIHNlbGVjdGVkQ29sb3I6JyNmZjUwOGEnLFxyXG4gICAgICBsaXN0OiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGFnZVBhdGg6IFwicGFnZXMvaW5kZXgvaW5kZXhcIixcclxuICAgICAgICAgIHRleHQ6IFwi6aaW6aG1XCIsXHJcbiAgICAgICAgICBpY29uUGF0aDogXCJpY29uL2FhLnBuZ1wiLFxyXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogXCJpY29uL2EucG5nXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBhZ2VQYXRoOiBcInBhZ2VzL2NvdXJzZS9jb3Vyc2VcIixcclxuICAgICAgICAgIHRleHQ6IFwi5Lqn5ZCO5oGi5aSN6K++XCIsXHJcbiAgICAgICAgICBpY29uUGF0aDogXCJpY29uL2JiLnBuZ1wiLFxyXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogXCJpY29uL2IucG5nXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICBwYWdlUGF0aDogXCJwYWdlcy91c2VyL3VzZXJcIixcclxuICAgICAgICAgIHRleHQ6IFwi5oiR55qEXCIsXHJcbiAgICAgICAgICBpY29uUGF0aDogXCJpY29uL2NjLnBuZ1wiLFxyXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogXCJpY29uL2MucG5nXCJcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBnbG9iYWxEYXRhID0ge1xyXG4gICAgdXNlckluZm86IG51bGwsXHJcbiAgICBjb25maWc6IG51bGwsXHJcbiAgICBpbWdzOiB7XHJcbiAgICAgICdwb3N0JzogJ2h0dHBzOi8vd3d3LjJwOTguY24vc3JjL2ltYWdlcy9wb3N0LnBuZycsXHJcbiAgICAgICdjYm9uZSc6ICdodHRwczovL3d3dy4ycDk4LmNuL3NyYy9pbWFnZXMvY291cnNlX2Jhbm5lcjEucG5nJyxcclxuICAgICAgJ2NidHdvJzogJ2h0dHBzOi8vd3d3LjJwOTguY24vc3JjL2ltYWdlcy9jb3Vyc2VfYmFubmVyMi5wbmcnLFxyXG4gICAgICAnY2J0aHJlZSc6ICdodHRwczovL3d3dy4ycDk4LmNuL3NyYy9pbWFnZXMvY291cnNlX2Jhbm5lcjMucG5nJyxcclxuICAgICAgJ2NiZm91cic6ICdodHRwczovL3d3dy4ycDk4LmNuL3NyYy9pbWFnZXMvY291cnNlX2Jhbm5lcjQucG5nJyxcclxuICAgICAgJ2ZseSc6ICdodHRwczovL3d3dy4ycDk4LmNuL3NyYy9pbWFnZXMvcGtiZy5wbmcnLFxyXG4gICAgICAndXNlcmJnJzogJ2h0dHBzOi8vd3d3LjJwOTguY24vc3JjL2ltYWdlcy91c2VyYmcucG5nJyxcclxuICAgICAgJ2NvdXJzZWJnJzogJ2h0dHBzOi8vd3d3LjJwOTguY24vc3JjL2ltYWdlcy9jb3Vyc2ViZy5wbmcnLFxyXG4gICAgICAnZm1iZyc6ICdodHRwczovL3d3dy4ycDk4LmNuL3NyYy9pbWFnZXMvZm1iZy5wbmcnLFxyXG4gICAgICAndGVzdGJnJzogJ2h0dHBzOi8vd3d3LjJwOTguY24vc3JjL2ltYWdlcy90ZXN0YmcucG5nJyxcclxuICAgICAgJ2Jhbm5lcic6ICdodHRwczovL3d3dy4ycDk4LmNuL3NyYy9pbWFnZXMvYmFubmVyLnBuZycsXHJcbiAgICAgICdlZGl0YmcnOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9zcmMvaW1hZ2VzL2VkaXRiZy5wbmcnLFxyXG4gICAgICAnbW9vZGJnJzogJ2h0dHBzOi8vd3d3LjJwOTguY24vc3JjL2ltYWdlcy9tb29kYmcucG5nJyxcclxuICAgICAgJ3BrcG9zdCc6ICdodHRwczovL3d3dy4ycDk4LmNuL3NyYy9pbWFnZXMvcGtwb3N0LnBuZycsXHJcbiAgICAgICd0b3BiZyc6ICdodHRwczovL3d3dy4ycDk4LmNuL3NyYy9pbWFnZXMvdG9wYmcucG5nJyxcclxuICAgICAgJ3ZvYmcnOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9zcmMvaW1hZ2VzL3ZvYmcucG5nJyxcclxuICAgICAgJ21vbmV5YmcnOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9zcmMvaW1hZ2VzL21vbmV5YmcucG5nJyxcclxuICAgICAgJ2RvY3Rvcic6ICdodHRwczovL3d3dy4ycDk4LmNuL3NyYy9pbWFnZXMvZG9jdG9yLnBuZycsXHJcbiAgICAgICdkZXRhaWxiZyc6ICdodHRwczovL3d3dy4ycDk4LmNuL3NyYy9pbWFnZXMvZGV0YWlsX2JnLnBuZycsXHJcbiAgICAgICdkZWZhdWx0bGlzdCc6ICdodHRwczovL3d3dy4ycDk4LmNuL3NyYy9pbWFnZXMvZGVmYXVsdC1saXN0LnBuZycsXHJcbiAgICAgICdhcnRpY2xlcG9zdCc6ICdodHRwczovL3d3dy4ycDk4LmNuL3NyYy9pbWFnZXMvYXJ0aWNsZV9wb3N0LnBuZycsXHJcbiAgICAgICdtb29kJzogJ2h0dHBzOi8vd3d3LjJwOTguY24vc3JjL2ltYWdlcy9tb29kLnBuZydcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnVzZShcInJlcXVlc3RmaXhcIik7XHJcbiAgICB0aGlzLnVzZShcInByb21pc2lmeVwiKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIG9uTGF1bmNoKCkge1xyXG4gICAgYXdhaXQgaW50ZXJmYWNlcy5sb2dpbigpO1xyXG4gICAgbGV0IHVzZXJJbmZvID0gIHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJbmZvJylcclxuICAgIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHVzZXJJbmZvXHJcbiAgICBsZXQgZGF0YSA9IGF3YWl0IGludGVyZmFjZXMuZ2xvYmFsQ29uZmlnKClcclxuICAgIGlmICggZGF0YS5jb2RlICl7XHJcbiAgICAgIHRoaXMuZ2xvYmFsRGF0YS5jb25maWcgPSBkYXRhLmluZm9cclxuICAgIH1cclxuICAgIC8vIHRoaXMuJGFwcGx5KClcclxuICB9XHJcbn1cclxuIl19
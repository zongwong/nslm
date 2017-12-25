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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ["pages/index/index", "pages/course/reply", "pages/course/doctor", "pages/course/mentality", "pages/user/user", "pages/user/success", "pages/course/coursedetail", "pages/course/courselist", "pages/user/editinfo", "pages/course/course", "pages/course/articlelist", "pages/course/articledetail", "pages/user/myvideo", "pages/user/mooddetail", "pages/user/mood", "pages/user/top", "pages/user/mypublish", "pages/user/myexchange", "pages/user/exchange", "pages/user/money", "pages/user/moneydetail", "pages/index/record", "pages/index/pk", "pages/index/start", "pages/index/detail"],
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
          text: "日志",
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
      userInfo: null
    };

    _this.use("requestfix");
    _this.use("promisify");
    return _this;
  }

  _createClass(_default, [{
    key: "onLaunch",
    value: function onLaunch() {
      _index2.default.login();
      var userInfo = _wepy2.default.getStorageSync('userInfo');
      this.globalData.userInfo = userInfo;
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJzZWxlY3RlZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwidGV4dCIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZSIsImxvZ2luIiwiZ2V0U3RvcmFnZVN5bmMiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQWlFRSxzQkFBYztBQUFBOztBQUFBOztBQUFBLFVBL0RkQSxNQStEYyxHQS9ETDtBQUNQQyxhQUFPLENBQ0wsbUJBREssRUFFTCxvQkFGSyxFQUdMLHFCQUhLLEVBSUwsd0JBSkssRUFLTCxpQkFMSyxFQU1MLG9CQU5LLEVBT0wsMkJBUEssRUFRTCx5QkFSSyxFQVNMLHFCQVRLLEVBVUwscUJBVkssRUFXTCwwQkFYSyxFQVlMLDRCQVpLLEVBYUwsb0JBYkssRUFjTCx1QkFkSyxFQWVMLGlCQWZLLEVBZ0JMLGdCQWhCSyxFQWlCTCxzQkFqQkssRUFrQkwsdUJBbEJLLEVBbUJMLHFCQW5CSyxFQW9CTCxrQkFwQkssRUFxQkwsd0JBckJLLEVBc0JMLG9CQXRCSyxFQXVCTCxnQkF2QkssRUF3QkwsbUJBeEJLLEVBeUJMLG9CQXpCSyxDQURBO0FBNEJQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixNQUZ4QjtBQUdOQyxnQ0FBd0IsT0FIbEI7QUFJTkMsZ0NBQXdCO0FBSmxCLE9BNUJEO0FBa0NQQyxjQUFRO0FBQ05DLHVCQUFjLFNBRFI7QUFFTkMsY0FBTSxDQUNKO0FBQ0VDLG9CQUFVLG1CQURaO0FBRUVDLGdCQUFNLElBRlI7QUFHRUMsb0JBQVUsc0JBSFo7QUFJRUMsNEJBQWtCO0FBSnBCLFNBREksRUFPSjtBQUNFSCxvQkFBVSxxQkFEWjtBQUVFQyxnQkFBTSxJQUZSO0FBR0VDLG9CQUFVLHdCQUhaO0FBSUVDLDRCQUFrQjtBQUpwQixTQVBJLEVBYUo7QUFDRUgsb0JBQVUsaUJBRFo7QUFFRUMsZ0JBQU0sSUFGUjtBQUdFQyxvQkFBVSxzQkFIWjtBQUlFQyw0QkFBa0I7QUFKcEIsU0FiSTtBQUZBO0FBbENELEtBK0RLO0FBQUEsVUFKZEMsVUFJYyxHQUpEO0FBQ1hDLGdCQUFVO0FBREMsS0FJQzs7QUFFWixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUNBLFVBQUtBLEdBQUwsQ0FBUyxXQUFUO0FBSFk7QUFJYjs7OzsrQkFFVTtBQUNULHNCQUFXQyxLQUFYO0FBQ0EsVUFBSUYsV0FBVyxlQUFLRyxjQUFMLENBQW9CLFVBQXBCLENBQWY7QUFDQSxXQUFLSixVQUFMLENBQWdCQyxRQUFoQixHQUEyQkEsUUFBM0I7QUFDRDs7OztFQTFFMEIsZUFBS0ksRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcclxuaW1wb3J0IFwid2VweS1hc3luYy1mdW5jdGlvblwiO1xyXG5pbXBvcnQgaW50ZXJmYWNlcyBmcm9tIFwiLi9pbnRlcmZhY2UvaW5kZXhcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgcGFnZXM6IFtcclxuICAgICAgXCJwYWdlcy9pbmRleC9pbmRleFwiLCBcclxuICAgICAgXCJwYWdlcy9jb3Vyc2UvcmVwbHlcIixcclxuICAgICAgXCJwYWdlcy9jb3Vyc2UvZG9jdG9yXCIsXHJcbiAgICAgIFwicGFnZXMvY291cnNlL21lbnRhbGl0eVwiLFxyXG4gICAgICBcInBhZ2VzL3VzZXIvdXNlclwiLFxyXG4gICAgICBcInBhZ2VzL3VzZXIvc3VjY2Vzc1wiLFxyXG4gICAgICBcInBhZ2VzL2NvdXJzZS9jb3Vyc2VkZXRhaWxcIixcclxuICAgICAgXCJwYWdlcy9jb3Vyc2UvY291cnNlbGlzdFwiLFxyXG4gICAgICBcInBhZ2VzL3VzZXIvZWRpdGluZm9cIiwgXHJcbiAgICAgIFwicGFnZXMvY291cnNlL2NvdXJzZVwiLCBcclxuICAgICAgXCJwYWdlcy9jb3Vyc2UvYXJ0aWNsZWxpc3RcIiwgXHJcbiAgICAgIFwicGFnZXMvY291cnNlL2FydGljbGVkZXRhaWxcIiwgXHJcbiAgICAgIFwicGFnZXMvdXNlci9teXZpZGVvXCIsIFxyXG4gICAgICBcInBhZ2VzL3VzZXIvbW9vZGRldGFpbFwiLCBcclxuICAgICAgXCJwYWdlcy91c2VyL21vb2RcIiwgXHJcbiAgICAgIFwicGFnZXMvdXNlci90b3BcIiwgXHJcbiAgICAgIFwicGFnZXMvdXNlci9teXB1Ymxpc2hcIiwgXHJcbiAgICAgIFwicGFnZXMvdXNlci9teWV4Y2hhbmdlXCIsIFxyXG4gICAgICBcInBhZ2VzL3VzZXIvZXhjaGFuZ2VcIiwgXHJcbiAgICAgIFwicGFnZXMvdXNlci9tb25leVwiLCBcclxuICAgICAgXCJwYWdlcy91c2VyL21vbmV5ZGV0YWlsXCIsXHJcbiAgICAgIFwicGFnZXMvaW5kZXgvcmVjb3JkXCIsIFxyXG4gICAgICBcInBhZ2VzL2luZGV4L3BrXCIsIFxyXG4gICAgICBcInBhZ2VzL2luZGV4L3N0YXJ0XCIsIFxyXG4gICAgICBcInBhZ2VzL2luZGV4L2RldGFpbFwiXHJcbiAgICBdLFxyXG4gICAgd2luZG93OiB7XHJcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6IFwibGlnaHRcIixcclxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogXCIjMDAwXCIsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6IFwi5aWz56We6K++56iL6KGoXCIsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6IFwid2hpdGVcIlxyXG4gICAgfSxcclxuICAgIHRhYkJhcjoge1xyXG4gICAgICBzZWxlY3RlZENvbG9yOicjZmY1MDhhJyxcclxuICAgICAgbGlzdDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBhZ2VQYXRoOiBcInBhZ2VzL2luZGV4L2luZGV4XCIsXHJcbiAgICAgICAgICB0ZXh0OiBcIummlumhtVwiLFxyXG4gICAgICAgICAgaWNvblBhdGg6IFwiaW1hZ2VzL2ljb24tbGlzdC5wbmdcIixcclxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6IFwiaW1hZ2VzL2ljb24tbGlzdC1vbi5wbmdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGFnZVBhdGg6IFwicGFnZXMvY291cnNlL2NvdXJzZVwiLFxyXG4gICAgICAgICAgdGV4dDogXCLml6Xlv5dcIixcclxuICAgICAgICAgIGljb25QYXRoOiBcImltYWdlcy9pY29uLWNvdXJzZS5wbmdcIixcclxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6IFwiaW1hZ2VzL2ljb24tY291cnNlLW9uLnBuZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYWdlUGF0aDogXCJwYWdlcy91c2VyL3VzZXJcIixcclxuICAgICAgICAgIHRleHQ6IFwi5oiR55qEXCIsXHJcbiAgICAgICAgICBpY29uUGF0aDogXCJpbWFnZXMvaWNvbi11c2VyLnBuZ1wiLFxyXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogXCJpbWFnZXMvaWNvbi11c2VyLW9uLnBuZ1wiXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZ2xvYmFsRGF0YSA9IHtcclxuICAgIHVzZXJJbmZvOiBudWxsXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy51c2UoXCJyZXF1ZXN0Zml4XCIpO1xyXG4gICAgdGhpcy51c2UoXCJwcm9taXNpZnlcIik7XHJcbiAgfVxyXG5cclxuICBvbkxhdW5jaCgpIHtcclxuICAgIGludGVyZmFjZXMubG9naW4oKTtcclxuICAgIGxldCB1c2VySW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJbmZvJylcclxuICAgIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHVzZXJJbmZvXHJcbiAgfVxyXG59XHJcbiJdfQ==
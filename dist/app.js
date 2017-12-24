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
      pages: ["pages/course/doctor", "pages/course/mentality", "pages/user/user", "pages/user/success", "pages/course/coursedetail", "pages/course/courselist", "pages/user/editinfo", "pages/index/index", "pages/course/course", "pages/course/articlelist", "pages/course/articledetail", "pages/user/myvideo", "pages/user/mooddetail", "pages/user/mood", "pages/user/top", "pages/user/mypublish", "pages/user/myexchange", "pages/user/exchange", "pages/user/money", "pages/user/moneydetail", "pages/index/record", "pages/index/pk", "pages/index/start", "pages/index/detail"],
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
      userInfo: null,
      test: 1
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJzZWxlY3RlZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwidGV4dCIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInRlc3QiLCJ1c2UiLCJsb2dpbiIsImdldFN0b3JhZ2VTeW5jIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFpRUUsc0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxVQS9EZEEsTUErRGMsR0EvREw7QUFDUEMsYUFBTyxDQUNMLHFCQURLLEVBRUwsd0JBRkssRUFHTCxpQkFISyxFQUlMLG9CQUpLLEVBS0wsMkJBTEssRUFNTCx5QkFOSyxFQU9MLHFCQVBLLEVBUUwsbUJBUkssRUFTTCxxQkFUSyxFQVVMLDBCQVZLLEVBV0wsNEJBWEssRUFZTCxvQkFaSyxFQWFMLHVCQWJLLEVBY0wsaUJBZEssRUFlTCxnQkFmSyxFQWdCTCxzQkFoQkssRUFpQkwsdUJBakJLLEVBa0JMLHFCQWxCSyxFQW1CTCxrQkFuQkssRUFvQkwsd0JBcEJLLEVBcUJMLG9CQXJCSyxFQXNCTCxnQkF0QkssRUF1QkwsbUJBdkJLLEVBd0JMLG9CQXhCSyxDQURBO0FBMkJQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixNQUZ4QjtBQUdOQyxnQ0FBd0IsT0FIbEI7QUFJTkMsZ0NBQXdCO0FBSmxCLE9BM0JEO0FBaUNQQyxjQUFRO0FBQ05DLHVCQUFjLFNBRFI7QUFFTkMsY0FBTSxDQUNKO0FBQ0VDLG9CQUFVLG1CQURaO0FBRUVDLGdCQUFNLElBRlI7QUFHRUMsb0JBQVUsc0JBSFo7QUFJRUMsNEJBQWtCO0FBSnBCLFNBREksRUFPSjtBQUNFSCxvQkFBVSxxQkFEWjtBQUVFQyxnQkFBTSxJQUZSO0FBR0VDLG9CQUFVLHdCQUhaO0FBSUVDLDRCQUFrQjtBQUpwQixTQVBJLEVBYUo7QUFDRUgsb0JBQVUsaUJBRFo7QUFFRUMsZ0JBQU0sSUFGUjtBQUdFQyxvQkFBVSxzQkFIWjtBQUlFQyw0QkFBa0I7QUFKcEIsU0FiSTtBQUZBO0FBakNELEtBK0RLO0FBQUEsVUFMZEMsVUFLYyxHQUxEO0FBQ1hDLGdCQUFVLElBREM7QUFFWEMsWUFBSztBQUZNLEtBS0M7O0FBRVosVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFDQSxVQUFLQSxHQUFMLENBQVMsV0FBVDtBQUhZO0FBSWI7Ozs7K0JBRVU7QUFDVCxzQkFBV0MsS0FBWDtBQUNBLFVBQUlILFdBQVcsZUFBS0ksY0FBTCxDQUFvQixVQUFwQixDQUFmO0FBQ0EsV0FBS0wsVUFBTCxDQUFnQkMsUUFBaEIsR0FBMkJBLFFBQTNCO0FBQ0Q7Ozs7RUExRTBCLGVBQUtLLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XHJcbmltcG9ydCBcIndlcHktYXN5bmMtZnVuY3Rpb25cIjtcclxuaW1wb3J0IGludGVyZmFjZXMgZnJvbSBcIi4vaW50ZXJmYWNlL2luZGV4XCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIHBhZ2VzOiBbXHJcbiAgICAgIFwicGFnZXMvY291cnNlL2RvY3RvclwiLFxyXG4gICAgICBcInBhZ2VzL2NvdXJzZS9tZW50YWxpdHlcIixcclxuICAgICAgXCJwYWdlcy91c2VyL3VzZXJcIixcclxuICAgICAgXCJwYWdlcy91c2VyL3N1Y2Nlc3NcIixcclxuICAgICAgXCJwYWdlcy9jb3Vyc2UvY291cnNlZGV0YWlsXCIsXHJcbiAgICAgIFwicGFnZXMvY291cnNlL2NvdXJzZWxpc3RcIixcclxuICAgICAgXCJwYWdlcy91c2VyL2VkaXRpbmZvXCIsIFxyXG4gICAgICBcInBhZ2VzL2luZGV4L2luZGV4XCIsIFxyXG4gICAgICBcInBhZ2VzL2NvdXJzZS9jb3Vyc2VcIiwgXHJcbiAgICAgIFwicGFnZXMvY291cnNlL2FydGljbGVsaXN0XCIsIFxyXG4gICAgICBcInBhZ2VzL2NvdXJzZS9hcnRpY2xlZGV0YWlsXCIsIFxyXG4gICAgICBcInBhZ2VzL3VzZXIvbXl2aWRlb1wiLCBcclxuICAgICAgXCJwYWdlcy91c2VyL21vb2RkZXRhaWxcIiwgXHJcbiAgICAgIFwicGFnZXMvdXNlci9tb29kXCIsIFxyXG4gICAgICBcInBhZ2VzL3VzZXIvdG9wXCIsIFxyXG4gICAgICBcInBhZ2VzL3VzZXIvbXlwdWJsaXNoXCIsIFxyXG4gICAgICBcInBhZ2VzL3VzZXIvbXlleGNoYW5nZVwiLCBcclxuICAgICAgXCJwYWdlcy91c2VyL2V4Y2hhbmdlXCIsIFxyXG4gICAgICBcInBhZ2VzL3VzZXIvbW9uZXlcIiwgXHJcbiAgICAgIFwicGFnZXMvdXNlci9tb25leWRldGFpbFwiLFxyXG4gICAgICBcInBhZ2VzL2luZGV4L3JlY29yZFwiLCBcclxuICAgICAgXCJwYWdlcy9pbmRleC9wa1wiLCBcclxuICAgICAgXCJwYWdlcy9pbmRleC9zdGFydFwiLCBcclxuICAgICAgXCJwYWdlcy9pbmRleC9kZXRhaWxcIlxyXG4gICAgXSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiBcImxpZ2h0XCIsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMFwiLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBcIuWls+elnuivvueoi+ihqFwiLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiBcIndoaXRlXCJcclxuICAgIH0sXHJcbiAgICB0YWJCYXI6IHtcclxuICAgICAgc2VsZWN0ZWRDb2xvcjonI2ZmNTA4YScsXHJcbiAgICAgIGxpc3Q6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYWdlUGF0aDogXCJwYWdlcy9pbmRleC9pbmRleFwiLFxyXG4gICAgICAgICAgdGV4dDogXCLpppbpobVcIixcclxuICAgICAgICAgIGljb25QYXRoOiBcImltYWdlcy9pY29uLWxpc3QucG5nXCIsXHJcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiBcImltYWdlcy9pY29uLWxpc3Qtb24ucG5nXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBhZ2VQYXRoOiBcInBhZ2VzL2NvdXJzZS9jb3Vyc2VcIixcclxuICAgICAgICAgIHRleHQ6IFwi5pel5b+XXCIsXHJcbiAgICAgICAgICBpY29uUGF0aDogXCJpbWFnZXMvaWNvbi1jb3Vyc2UucG5nXCIsXHJcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiBcImltYWdlcy9pY29uLWNvdXJzZS1vbi5wbmdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGFnZVBhdGg6IFwicGFnZXMvdXNlci91c2VyXCIsXHJcbiAgICAgICAgICB0ZXh0OiBcIuaIkeeahFwiLFxyXG4gICAgICAgICAgaWNvblBhdGg6IFwiaW1hZ2VzL2ljb24tdXNlci5wbmdcIixcclxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6IFwiaW1hZ2VzL2ljb24tdXNlci1vbi5wbmdcIlxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGdsb2JhbERhdGEgPSB7XHJcbiAgICB1c2VySW5mbzogbnVsbCxcclxuICAgIHRlc3Q6MVxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMudXNlKFwicmVxdWVzdGZpeFwiKTtcclxuICAgIHRoaXMudXNlKFwicHJvbWlzaWZ5XCIpO1xyXG4gIH1cclxuXHJcbiAgb25MYXVuY2goKSB7XHJcbiAgICBpbnRlcmZhY2VzLmxvZ2luKCk7XHJcbiAgICBsZXQgdXNlckluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd1c2VySW5mbycpXHJcbiAgICB0aGlzLmdsb2JhbERhdGEudXNlckluZm8gPSB1c2VySW5mb1xyXG4gIH1cclxufVxyXG4iXX0=
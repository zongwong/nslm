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
      pages: ["pages/course/reply", "pages/course/doctor", "pages/course/mentality", "pages/user/user", "pages/user/success", "pages/course/coursedetail", "pages/course/courselist", "pages/user/editinfo", "pages/index/index", "pages/course/course", "pages/course/articlelist", "pages/course/articledetail", "pages/user/myvideo", "pages/user/mooddetail", "pages/user/mood", "pages/user/top", "pages/user/mypublish", "pages/user/myexchange", "pages/user/exchange", "pages/user/money", "pages/user/moneydetail", "pages/index/record", "pages/index/pk", "pages/index/start", "pages/index/detail"],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJzZWxlY3RlZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwidGV4dCIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInRlc3QiLCJ1c2UiLCJsb2dpbiIsImdldFN0b3JhZ2VTeW5jIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFrRUUsc0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxVQWhFZEEsTUFnRWMsR0FoRUw7QUFDUEMsYUFBTyxDQUNMLG9CQURLLEVBRUwscUJBRkssRUFHTCx3QkFISyxFQUlMLGlCQUpLLEVBS0wsb0JBTEssRUFNTCwyQkFOSyxFQU9MLHlCQVBLLEVBUUwscUJBUkssRUFTTCxtQkFUSyxFQVVMLHFCQVZLLEVBV0wsMEJBWEssRUFZTCw0QkFaSyxFQWFMLG9CQWJLLEVBY0wsdUJBZEssRUFlTCxpQkFmSyxFQWdCTCxnQkFoQkssRUFpQkwsc0JBakJLLEVBa0JMLHVCQWxCSyxFQW1CTCxxQkFuQkssRUFvQkwsa0JBcEJLLEVBcUJMLHdCQXJCSyxFQXNCTCxvQkF0QkssRUF1QkwsZ0JBdkJLLEVBd0JMLG1CQXhCSyxFQXlCTCxvQkF6QkssQ0FEQTtBQTRCUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsTUFGeEI7QUFHTkMsZ0NBQXdCLE9BSGxCO0FBSU5DLGdDQUF3QjtBQUpsQixPQTVCRDtBQWtDUEMsY0FBUTtBQUNOQyx1QkFBYyxTQURSO0FBRU5DLGNBQU0sQ0FDSjtBQUNFQyxvQkFBVSxtQkFEWjtBQUVFQyxnQkFBTSxJQUZSO0FBR0VDLG9CQUFVLHNCQUhaO0FBSUVDLDRCQUFrQjtBQUpwQixTQURJLEVBT0o7QUFDRUgsb0JBQVUscUJBRFo7QUFFRUMsZ0JBQU0sSUFGUjtBQUdFQyxvQkFBVSx3QkFIWjtBQUlFQyw0QkFBa0I7QUFKcEIsU0FQSSxFQWFKO0FBQ0VILG9CQUFVLGlCQURaO0FBRUVDLGdCQUFNLElBRlI7QUFHRUMsb0JBQVUsc0JBSFo7QUFJRUMsNEJBQWtCO0FBSnBCLFNBYkk7QUFGQTtBQWxDRCxLQWdFSztBQUFBLFVBTGRDLFVBS2MsR0FMRDtBQUNYQyxnQkFBVSxJQURDO0FBRVhDLFlBQUs7QUFGTSxLQUtDOztBQUVaLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBQ0EsVUFBS0EsR0FBTCxDQUFTLFdBQVQ7QUFIWTtBQUliOzs7OytCQUVVO0FBQ1Qsc0JBQVdDLEtBQVg7QUFDQSxVQUFJSCxXQUFXLGVBQUtJLGNBQUwsQ0FBb0IsVUFBcEIsQ0FBZjtBQUNBLFdBQUtMLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCQSxRQUEzQjtBQUNEOzs7O0VBM0UwQixlQUFLSyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xyXG5pbXBvcnQgXCJ3ZXB5LWFzeW5jLWZ1bmN0aW9uXCI7XHJcbmltcG9ydCBpbnRlcmZhY2VzIGZyb20gXCIuL2ludGVyZmFjZS9pbmRleFwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBwYWdlczogW1xyXG4gICAgICBcInBhZ2VzL2NvdXJzZS9yZXBseVwiLFxyXG4gICAgICBcInBhZ2VzL2NvdXJzZS9kb2N0b3JcIixcclxuICAgICAgXCJwYWdlcy9jb3Vyc2UvbWVudGFsaXR5XCIsXHJcbiAgICAgIFwicGFnZXMvdXNlci91c2VyXCIsXHJcbiAgICAgIFwicGFnZXMvdXNlci9zdWNjZXNzXCIsXHJcbiAgICAgIFwicGFnZXMvY291cnNlL2NvdXJzZWRldGFpbFwiLFxyXG4gICAgICBcInBhZ2VzL2NvdXJzZS9jb3Vyc2VsaXN0XCIsXHJcbiAgICAgIFwicGFnZXMvdXNlci9lZGl0aW5mb1wiLCBcclxuICAgICAgXCJwYWdlcy9pbmRleC9pbmRleFwiLCBcclxuICAgICAgXCJwYWdlcy9jb3Vyc2UvY291cnNlXCIsIFxyXG4gICAgICBcInBhZ2VzL2NvdXJzZS9hcnRpY2xlbGlzdFwiLCBcclxuICAgICAgXCJwYWdlcy9jb3Vyc2UvYXJ0aWNsZWRldGFpbFwiLCBcclxuICAgICAgXCJwYWdlcy91c2VyL215dmlkZW9cIiwgXHJcbiAgICAgIFwicGFnZXMvdXNlci9tb29kZGV0YWlsXCIsIFxyXG4gICAgICBcInBhZ2VzL3VzZXIvbW9vZFwiLCBcclxuICAgICAgXCJwYWdlcy91c2VyL3RvcFwiLCBcclxuICAgICAgXCJwYWdlcy91c2VyL215cHVibGlzaFwiLCBcclxuICAgICAgXCJwYWdlcy91c2VyL215ZXhjaGFuZ2VcIiwgXHJcbiAgICAgIFwicGFnZXMvdXNlci9leGNoYW5nZVwiLCBcclxuICAgICAgXCJwYWdlcy91c2VyL21vbmV5XCIsIFxyXG4gICAgICBcInBhZ2VzL3VzZXIvbW9uZXlkZXRhaWxcIixcclxuICAgICAgXCJwYWdlcy9pbmRleC9yZWNvcmRcIiwgXHJcbiAgICAgIFwicGFnZXMvaW5kZXgvcGtcIiwgXHJcbiAgICAgIFwicGFnZXMvaW5kZXgvc3RhcnRcIiwgXHJcbiAgICAgIFwicGFnZXMvaW5kZXgvZGV0YWlsXCJcclxuICAgIF0sXHJcbiAgICB3aW5kb3c6IHtcclxuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogXCJsaWdodFwiLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiBcIiMwMDBcIixcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogXCLlpbPnpZ7or77nqIvooahcIixcclxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogXCJ3aGl0ZVwiXHJcbiAgICB9LFxyXG4gICAgdGFiQmFyOiB7XHJcbiAgICAgIHNlbGVjdGVkQ29sb3I6JyNmZjUwOGEnLFxyXG4gICAgICBsaXN0OiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGFnZVBhdGg6IFwicGFnZXMvaW5kZXgvaW5kZXhcIixcclxuICAgICAgICAgIHRleHQ6IFwi6aaW6aG1XCIsXHJcbiAgICAgICAgICBpY29uUGF0aDogXCJpbWFnZXMvaWNvbi1saXN0LnBuZ1wiLFxyXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogXCJpbWFnZXMvaWNvbi1saXN0LW9uLnBuZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYWdlUGF0aDogXCJwYWdlcy9jb3Vyc2UvY291cnNlXCIsXHJcbiAgICAgICAgICB0ZXh0OiBcIuaXpeW/l1wiLFxyXG4gICAgICAgICAgaWNvblBhdGg6IFwiaW1hZ2VzL2ljb24tY291cnNlLnBuZ1wiLFxyXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogXCJpbWFnZXMvaWNvbi1jb3Vyc2Utb24ucG5nXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBhZ2VQYXRoOiBcInBhZ2VzL3VzZXIvdXNlclwiLFxyXG4gICAgICAgICAgdGV4dDogXCLmiJHnmoRcIixcclxuICAgICAgICAgIGljb25QYXRoOiBcImltYWdlcy9pY29uLXVzZXIucG5nXCIsXHJcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiBcImltYWdlcy9pY29uLXVzZXItb24ucG5nXCJcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBnbG9iYWxEYXRhID0ge1xyXG4gICAgdXNlckluZm86IG51bGwsXHJcbiAgICB0ZXN0OjFcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnVzZShcInJlcXVlc3RmaXhcIik7XHJcbiAgICB0aGlzLnVzZShcInByb21pc2lmeVwiKTtcclxuICB9XHJcblxyXG4gIG9uTGF1bmNoKCkge1xyXG4gICAgaW50ZXJmYWNlcy5sb2dpbigpO1xyXG4gICAgbGV0IHVzZXJJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYygndXNlckluZm8nKVxyXG4gICAgdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvID0gdXNlckluZm9cclxuICB9XHJcbn1cclxuIl19
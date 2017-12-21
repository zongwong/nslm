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
      pages: ["pages/user/success", "pages/course/coursedetail", "pages/course/courselist", "pages/user/user", "pages/user/editinfo", "pages/index/index", "pages/course/course", "pages/course/articlelist", "pages/course/articledetail", "pages/user/myvideo", "pages/user/mooddetail", "pages/user/mood", "pages/user/top", "pages/user/mypublish", "pages/user/myexchange", "pages/user/exchange", "pages/user/money", "pages/user/moneydetail", "pages/index/record", "pages/index/pk", "pages/index/start", "pages/index/detail", "pages/course/logs"],
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
      // let res = interfaces.login();
      // console.log(res)
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJzZWxlY3RlZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwidGV4dCIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZSIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBK0RFLHNCQUFjO0FBQUE7O0FBQUE7O0FBQUEsVUE3RGRBLE1BNkRjLEdBN0RMO0FBQ1BDLGFBQU8sQ0FDTCxvQkFESyxFQUVMLDJCQUZLLEVBR0wseUJBSEssRUFJTCxpQkFKSyxFQUtMLHFCQUxLLEVBTUwsbUJBTkssRUFPTCxxQkFQSyxFQVFMLDBCQVJLLEVBU0wsNEJBVEssRUFVTCxvQkFWSyxFQVdMLHVCQVhLLEVBWUwsaUJBWkssRUFhTCxnQkFiSyxFQWNMLHNCQWRLLEVBZUwsdUJBZkssRUFnQkwscUJBaEJLLEVBaUJMLGtCQWpCSyxFQWtCTCx3QkFsQkssRUFtQkwsb0JBbkJLLEVBb0JMLGdCQXBCSyxFQXFCTCxtQkFyQkssRUFzQkwsb0JBdEJLLEVBdUJMLG1CQXZCSyxDQURBO0FBMEJQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixNQUZ4QjtBQUdOQyxnQ0FBd0IsT0FIbEI7QUFJTkMsZ0NBQXdCO0FBSmxCLE9BMUJEO0FBZ0NQQyxjQUFRO0FBQ05DLHVCQUFjLFNBRFI7QUFFTkMsY0FBTSxDQUNKO0FBQ0VDLG9CQUFVLG1CQURaO0FBRUVDLGdCQUFNLElBRlI7QUFHRUMsb0JBQVUsc0JBSFo7QUFJRUMsNEJBQWtCO0FBSnBCLFNBREksRUFPSjtBQUNFSCxvQkFBVSxxQkFEWjtBQUVFQyxnQkFBTSxJQUZSO0FBR0VDLG9CQUFVLHdCQUhaO0FBSUVDLDRCQUFrQjtBQUpwQixTQVBJLEVBYUo7QUFDRUgsb0JBQVUsaUJBRFo7QUFFRUMsZ0JBQU0sSUFGUjtBQUdFQyxvQkFBVSxzQkFIWjtBQUlFQyw0QkFBa0I7QUFKcEIsU0FiSTtBQUZBO0FBaENELEtBNkRLO0FBQUEsVUFKZEMsVUFJYyxHQUpEO0FBQ1hDLGdCQUFVO0FBREMsS0FJQzs7QUFFWixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUNBLFVBQUtBLEdBQUwsQ0FBUyxXQUFUO0FBSFk7QUFJYjs7OzsrQkFFVTtBQUNUO0FBQ0E7QUFDRDs7OztFQXZFMEIsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcclxuaW1wb3J0IFwid2VweS1hc3luYy1mdW5jdGlvblwiO1xyXG5pbXBvcnQgaW50ZXJmYWNlcyBmcm9tIFwiLi9pbnRlcmZhY2UvaW5kZXhcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgcGFnZXM6IFtcclxuICAgICAgXCJwYWdlcy91c2VyL3N1Y2Nlc3NcIixcclxuICAgICAgXCJwYWdlcy9jb3Vyc2UvY291cnNlZGV0YWlsXCIsXHJcbiAgICAgIFwicGFnZXMvY291cnNlL2NvdXJzZWxpc3RcIixcclxuICAgICAgXCJwYWdlcy91c2VyL3VzZXJcIiwgXHJcbiAgICAgIFwicGFnZXMvdXNlci9lZGl0aW5mb1wiLCBcclxuICAgICAgXCJwYWdlcy9pbmRleC9pbmRleFwiLCBcclxuICAgICAgXCJwYWdlcy9jb3Vyc2UvY291cnNlXCIsIFxyXG4gICAgICBcInBhZ2VzL2NvdXJzZS9hcnRpY2xlbGlzdFwiLCBcclxuICAgICAgXCJwYWdlcy9jb3Vyc2UvYXJ0aWNsZWRldGFpbFwiLCBcclxuICAgICAgXCJwYWdlcy91c2VyL215dmlkZW9cIiwgXHJcbiAgICAgIFwicGFnZXMvdXNlci9tb29kZGV0YWlsXCIsIFxyXG4gICAgICBcInBhZ2VzL3VzZXIvbW9vZFwiLCBcclxuICAgICAgXCJwYWdlcy91c2VyL3RvcFwiLCBcclxuICAgICAgXCJwYWdlcy91c2VyL215cHVibGlzaFwiLCBcclxuICAgICAgXCJwYWdlcy91c2VyL215ZXhjaGFuZ2VcIiwgXHJcbiAgICAgIFwicGFnZXMvdXNlci9leGNoYW5nZVwiLCBcclxuICAgICAgXCJwYWdlcy91c2VyL21vbmV5XCIsIFxyXG4gICAgICBcInBhZ2VzL3VzZXIvbW9uZXlkZXRhaWxcIixcclxuICAgICAgXCJwYWdlcy9pbmRleC9yZWNvcmRcIiwgXHJcbiAgICAgIFwicGFnZXMvaW5kZXgvcGtcIiwgXHJcbiAgICAgIFwicGFnZXMvaW5kZXgvc3RhcnRcIiwgXHJcbiAgICAgIFwicGFnZXMvaW5kZXgvZGV0YWlsXCIsIFxyXG4gICAgICBcInBhZ2VzL2NvdXJzZS9sb2dzXCJcclxuICAgIF0sXHJcbiAgICB3aW5kb3c6IHtcclxuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogXCJsaWdodFwiLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiBcIiMwMDBcIixcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogXCLlpbPnpZ7or77nqIvooahcIixcclxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogXCJ3aGl0ZVwiXHJcbiAgICB9LFxyXG4gICAgdGFiQmFyOiB7XHJcbiAgICAgIHNlbGVjdGVkQ29sb3I6JyNmZjUwOGEnLFxyXG4gICAgICBsaXN0OiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGFnZVBhdGg6IFwicGFnZXMvaW5kZXgvaW5kZXhcIixcclxuICAgICAgICAgIHRleHQ6IFwi6aaW6aG1XCIsXHJcbiAgICAgICAgICBpY29uUGF0aDogXCJpbWFnZXMvaWNvbi1saXN0LnBuZ1wiLFxyXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogXCJpbWFnZXMvaWNvbi1saXN0LW9uLnBuZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYWdlUGF0aDogXCJwYWdlcy9jb3Vyc2UvY291cnNlXCIsXHJcbiAgICAgICAgICB0ZXh0OiBcIuaXpeW/l1wiLFxyXG4gICAgICAgICAgaWNvblBhdGg6IFwiaW1hZ2VzL2ljb24tY291cnNlLnBuZ1wiLFxyXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogXCJpbWFnZXMvaWNvbi1jb3Vyc2Utb24ucG5nXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBhZ2VQYXRoOiBcInBhZ2VzL3VzZXIvdXNlclwiLFxyXG4gICAgICAgICAgdGV4dDogXCLmiJHnmoRcIixcclxuICAgICAgICAgIGljb25QYXRoOiBcImltYWdlcy9pY29uLXVzZXIucG5nXCIsXHJcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiBcImltYWdlcy9pY29uLXVzZXItb24ucG5nXCJcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBnbG9iYWxEYXRhID0ge1xyXG4gICAgdXNlckluZm86IG51bGxcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnVzZShcInJlcXVlc3RmaXhcIik7XHJcbiAgICB0aGlzLnVzZShcInByb21pc2lmeVwiKTtcclxuICB9XHJcblxyXG4gIG9uTGF1bmNoKCkge1xyXG4gICAgLy8gbGV0IHJlcyA9IGludGVyZmFjZXMubG9naW4oKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHJlcylcclxuICB9XHJcbn1cclxuIl19
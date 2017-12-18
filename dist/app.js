"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

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
      pages: ["pages/course/course", "pages/course/articlelist", "pages/course/articledetail", "pages/user/myvideo", "pages/user/mooddetail", "pages/user/mood", "pages/user/top", "pages/user/mypublish", "pages/user/myexchange", "pages/user/exchange", "pages/user/user", "pages/user/money", "pages/user/moneydetail", "pages/index/record", "pages/index/pk", "pages/index/start", "pages/index/detail", "pages/index/index", "pages/course/logs"],
      window: {
        backgroundTextStyle: "light",
        navigationBarBackgroundColor: "#000",
        navigationBarTitleText: "女神课程表",
        navigationBarTextStyle: "white"
      }
      // tabBar: {
      //   list: [
      //     {
      //       pagePath: "pages/index",
      //       text: "首页",
      //       iconPath: "images/icon-list.png",
      //       selectedIconPath: "images/icon-list-on.png"
      //     },
      //     {
      //       pagePath: "pages/logs",
      //       text: "日志",
      //       iconPath: "images/icon-course.png",
      //       selectedIconPath: "images/icon-course-on.png"
      //     },
      //     {
      //       pagePath: "pages/user",
      //       text: "我的",
      //       iconPath: "images/icon-user.png",
      //       selectedIconPath: "images/icon-user-on.png"
      //     }
      //   ]
      // }
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
    value: function onLaunch() {}
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUEyREUsc0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxVQXhEZEEsTUF3RGMsR0F4REw7QUFDUEMsYUFBTyxDQUNMLHFCQURLLEVBRUwsMEJBRkssRUFHTCw0QkFISyxFQUlMLG9CQUpLLEVBS0wsdUJBTEssRUFNTCxpQkFOSyxFQU9MLGdCQVBLLEVBUUwsc0JBUkssRUFTTCx1QkFUSyxFQVVMLHFCQVZLLEVBV0wsaUJBWEssRUFZTCxrQkFaSyxFQWFMLHdCQWJLLEVBY0wsb0JBZEssRUFlTCxnQkFmSyxFQWdCTCxtQkFoQkssRUFpQkwsb0JBakJLLEVBa0JMLG1CQWxCSyxFQW1CTCxtQkFuQkssQ0FEQTtBQXNCUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsTUFGeEI7QUFHTkMsZ0NBQXdCLE9BSGxCO0FBSU5DLGdDQUF3QjtBQUpsQjtBQU1SO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakRPLEtBd0RLO0FBQUEsVUFKZEMsVUFJYyxHQUpEO0FBQ1hDLGdCQUFVO0FBREMsS0FJQzs7QUFFWixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUNBLFVBQUtBLEdBQUwsQ0FBUyxXQUFUO0FBSFk7QUFJYjs7OzsrQkFFVSxDQUFFOzs7O0VBL0RjLGVBQUtDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XHJcbmltcG9ydCBcIndlcHktYXN5bmMtZnVuY3Rpb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIHBhZ2VzOiBbXHJcbiAgICAgIFwicGFnZXMvY291cnNlL2NvdXJzZVwiLCBcclxuICAgICAgXCJwYWdlcy9jb3Vyc2UvYXJ0aWNsZWxpc3RcIiwgXHJcbiAgICAgIFwicGFnZXMvY291cnNlL2FydGljbGVkZXRhaWxcIiwgXHJcbiAgICAgIFwicGFnZXMvdXNlci9teXZpZGVvXCIsIFxyXG4gICAgICBcInBhZ2VzL3VzZXIvbW9vZGRldGFpbFwiLCBcclxuICAgICAgXCJwYWdlcy91c2VyL21vb2RcIiwgXHJcbiAgICAgIFwicGFnZXMvdXNlci90b3BcIiwgXHJcbiAgICAgIFwicGFnZXMvdXNlci9teXB1Ymxpc2hcIiwgXHJcbiAgICAgIFwicGFnZXMvdXNlci9teWV4Y2hhbmdlXCIsIFxyXG4gICAgICBcInBhZ2VzL3VzZXIvZXhjaGFuZ2VcIiwgXHJcbiAgICAgIFwicGFnZXMvdXNlci91c2VyXCIsIFxyXG4gICAgICBcInBhZ2VzL3VzZXIvbW9uZXlcIiwgXHJcbiAgICAgIFwicGFnZXMvdXNlci9tb25leWRldGFpbFwiLFxyXG4gICAgICBcInBhZ2VzL2luZGV4L3JlY29yZFwiLCBcclxuICAgICAgXCJwYWdlcy9pbmRleC9wa1wiLCBcclxuICAgICAgXCJwYWdlcy9pbmRleC9zdGFydFwiLCBcclxuICAgICAgXCJwYWdlcy9pbmRleC9kZXRhaWxcIiwgXHJcbiAgICAgIFwicGFnZXMvaW5kZXgvaW5kZXhcIiwgXHJcbiAgICAgIFwicGFnZXMvY291cnNlL2xvZ3NcIlxyXG4gICAgXSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiBcImxpZ2h0XCIsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMFwiLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBcIuWls+elnuivvueoi+ihqFwiLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiBcIndoaXRlXCJcclxuICAgIH0sXHJcbiAgICAvLyB0YWJCYXI6IHtcclxuICAgIC8vICAgbGlzdDogW1xyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgIHBhZ2VQYXRoOiBcInBhZ2VzL2luZGV4XCIsXHJcbiAgICAvLyAgICAgICB0ZXh0OiBcIummlumhtVwiLFxyXG4gICAgLy8gICAgICAgaWNvblBhdGg6IFwiaW1hZ2VzL2ljb24tbGlzdC5wbmdcIixcclxuICAgIC8vICAgICAgIHNlbGVjdGVkSWNvblBhdGg6IFwiaW1hZ2VzL2ljb24tbGlzdC1vbi5wbmdcIlxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgcGFnZVBhdGg6IFwicGFnZXMvbG9nc1wiLFxyXG4gICAgLy8gICAgICAgdGV4dDogXCLml6Xlv5dcIixcclxuICAgIC8vICAgICAgIGljb25QYXRoOiBcImltYWdlcy9pY29uLWNvdXJzZS5wbmdcIixcclxuICAgIC8vICAgICAgIHNlbGVjdGVkSWNvblBhdGg6IFwiaW1hZ2VzL2ljb24tY291cnNlLW9uLnBuZ1wiXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICBwYWdlUGF0aDogXCJwYWdlcy91c2VyXCIsXHJcbiAgICAvLyAgICAgICB0ZXh0OiBcIuaIkeeahFwiLFxyXG4gICAgLy8gICAgICAgaWNvblBhdGg6IFwiaW1hZ2VzL2ljb24tdXNlci5wbmdcIixcclxuICAgIC8vICAgICAgIHNlbGVjdGVkSWNvblBhdGg6IFwiaW1hZ2VzL2ljb24tdXNlci1vbi5wbmdcIlxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgXVxyXG4gICAgLy8gfVxyXG4gIH07XHJcblxyXG4gIGdsb2JhbERhdGEgPSB7XHJcbiAgICB1c2VySW5mbzogbnVsbFxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMudXNlKFwicmVxdWVzdGZpeFwiKTtcclxuICAgIHRoaXMudXNlKFwicHJvbWlzaWZ5XCIpO1xyXG4gIH1cclxuXHJcbiAgb25MYXVuY2goKSB7fVxyXG59XHJcbiJdfQ==
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../interface/index.js');

var _index2 = _interopRequireDefault(_index);

var _searchBar = require('./../components/searchBar.js');

var _searchBar2 = _interopRequireDefault(_searchBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '首页'
    }, _this.components = {
      searchBar: _searchBar2.default
    }, _this.data = {}, _this.computed = {
      now: function now() {
        return +new Date();
      }
    }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      // interfaces.login()
      // this.$parent.getUserInfo(function (code,userInfo) {
      //   if (userInfo) {
      //     self.userInfo = userInfo
      //         wepy.request({
      //           url: api.users.login.url,
      //           method: api.users.login.method,
      //           data: {
      //             code: code,
      //             userInfo: userInfo
      //           }
      //         });
      //   }
      //   self.normalTitle = '标题已被修改'

      //   self.setTimeoutTitle = '标题三秒后会被修改'
      //   setTimeout(() => {
      //     self.setTimeoutTitle = '到三秒了'
      //     self.$apply()
      //   }, 3000)

      //   self.$apply()
      // })
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJzZWFyY2hCYXIiLCJkYXRhIiwiY29tcHV0ZWQiLCJub3ciLCJEYXRlIiwibWV0aG9kcyIsImV2ZW50cyIsInNlbGYiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhO0FBQ1hDO0FBRFcsSyxRQUliQyxJLEdBQU8sRSxRQUlQQyxRLEdBQVc7QUFDVEMsU0FEUyxpQkFDRjtBQUNMLGVBQU8sQ0FBQyxJQUFJQyxJQUFKLEVBQVI7QUFDRDtBQUhRLEssUUFNWEMsTyxHQUFVLEUsUUFJVkMsTSxHQUFTLEU7Ozs7OzZCQUlBO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDRDs7OztFQW5EZ0MsZUFBS0MsSTs7a0JBQW5CWixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgaW50ZXJmYWNlcyBmcm9tICcuLi9pbnRlcmZhY2UvaW5kZXgnXHJcbiAgaW1wb3J0IHNlYXJjaEJhciBmcm9tICcuLi9jb21wb25lbnRzL3NlYXJjaEJhcidcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpppbpobUnXHJcbiAgICB9XHJcbiAgICBjb21wb25lbnRzID0ge1xyXG4gICAgICBzZWFyY2hCYXI6c2VhcmNoQmFyXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZWQgPSB7XHJcbiAgICAgIG5vdyAoKSB7XHJcbiAgICAgICAgcmV0dXJuICtuZXcgRGF0ZSgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICBcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMgPSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzXHJcbiAgICAgIC8vIGludGVyZmFjZXMubG9naW4oKVxyXG4gICAgICAvLyB0aGlzLiRwYXJlbnQuZ2V0VXNlckluZm8oZnVuY3Rpb24gKGNvZGUsdXNlckluZm8pIHtcclxuICAgICAgLy8gICBpZiAodXNlckluZm8pIHtcclxuICAgICAgLy8gICAgIHNlbGYudXNlckluZm8gPSB1c2VySW5mb1xyXG4gICAgICAvLyAgICAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgIC8vICAgICAgICAgICB1cmw6IGFwaS51c2Vycy5sb2dpbi51cmwsXHJcbiAgICAgIC8vICAgICAgICAgICBtZXRob2Q6IGFwaS51c2Vycy5sb2dpbi5tZXRob2QsXHJcbiAgICAgIC8vICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgIC8vICAgICAgICAgICAgIGNvZGU6IGNvZGUsXHJcbiAgICAgIC8vICAgICAgICAgICAgIHVzZXJJbmZvOiB1c2VySW5mb1xyXG4gICAgICAvLyAgICAgICAgICAgfVxyXG4gICAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gICBzZWxmLm5vcm1hbFRpdGxlID0gJ+agh+mimOW3suiiq+S/ruaUuSdcclxuXHJcbiAgICAgIC8vICAgc2VsZi5zZXRUaW1lb3V0VGl0bGUgPSAn5qCH6aKY5LiJ56eS5ZCO5Lya6KKr5L+u5pS5J1xyXG4gICAgICAvLyAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAvLyAgICAgc2VsZi5zZXRUaW1lb3V0VGl0bGUgPSAn5Yiw5LiJ56eS5LqGJ1xyXG4gICAgICAvLyAgICAgc2VsZi4kYXBwbHkoKVxyXG4gICAgICAvLyAgIH0sIDMwMDApXHJcblxyXG4gICAgICAvLyAgIHNlbGYuJGFwcGx5KClcclxuICAgICAgLy8gfSlcclxuICAgIH1cclxuICB9XHJcbiJdfQ==
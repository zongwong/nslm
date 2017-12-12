"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../interface/index.js');

var _index2 = _interopRequireDefault(_index);

var _activityList = require('./../components/activityList.js');

var _activityList2 = _interopRequireDefault(_activityList);

var _searchBar = require('./../components/searchBar.js');

var _searchBar2 = _interopRequireDefault(_searchBar);

var _tabNav = require('./../components/tabNav.js');

var _tabNav2 = _interopRequireDefault(_tabNav);

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
      navigationBarTitleText: "首页"
    }, _this.components = {
      searchBar: _searchBar2.default,
      tabNav: _tabNav2.default,
      activityList: _activityList2.default
    }, _this.data = {}, _this.computed = {
      now: function now() {
        return +new Date();
      }
    }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "onLoad",
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJzZWFyY2hCYXIiLCJ0YWJOYXYiLCJhY3Rpdml0eUxpc3QiLCJkYXRhIiwiY29tcHV0ZWQiLCJub3ciLCJEYXRlIiwibWV0aG9kcyIsImV2ZW50cyIsInNlbGYiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYTtBQUNYQyxvQ0FEVztBQUVYQyw4QkFGVztBQUdYQztBQUhXLEssUUFNYkMsSSxHQUFPLEUsUUFFUEMsUSxHQUFXO0FBQ1RDLFNBRFMsaUJBQ0g7QUFDSixlQUFPLENBQUMsSUFBSUMsSUFBSixFQUFSO0FBQ0Q7QUFIUSxLLFFBTVhDLE8sR0FBVSxFLFFBRVZDLE0sR0FBUyxFOzs7Ozs2QkFFQTtBQUNQLFVBQUlDLE9BQU8sSUFBWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Q7Ozs7RUEvQ2dDLGVBQUtDLEk7O2tCQUFuQmQsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xyXG5pbXBvcnQgaW50ZXJmYWNlcyBmcm9tIFwiLi4vaW50ZXJmYWNlL2luZGV4XCI7XHJcblxyXG5pbXBvcnQgYWN0aXZpdHlMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL2FjdGl2aXR5TGlzdFwiO1xyXG5pbXBvcnQgc2VhcmNoQmFyIGZyb20gXCIuLi9jb21wb25lbnRzL3NlYXJjaEJhclwiO1xyXG5pbXBvcnQgdGFiTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL3RhYk5hdlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6IFwi6aaW6aG1XCJcclxuICB9O1xyXG4gIGNvbXBvbmVudHMgPSB7XHJcbiAgICBzZWFyY2hCYXI6IHNlYXJjaEJhcixcclxuICAgIHRhYk5hdjp0YWJOYXYsXHJcbiAgICBhY3Rpdml0eUxpc3Q6YWN0aXZpdHlMaXN0LFxyXG4gIH07XHJcblxyXG4gIGRhdGEgPSB7fTtcclxuXHJcbiAgY29tcHV0ZWQgPSB7XHJcbiAgICBub3coKSB7XHJcbiAgICAgIHJldHVybiArbmV3IERhdGUoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBtZXRob2RzID0ge307XHJcblxyXG4gIGV2ZW50cyA9IHt9O1xyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAvLyBpbnRlcmZhY2VzLmxvZ2luKClcclxuICAgIC8vIHRoaXMuJHBhcmVudC5nZXRVc2VySW5mbyhmdW5jdGlvbiAoY29kZSx1c2VySW5mbykge1xyXG4gICAgLy8gICBpZiAodXNlckluZm8pIHtcclxuICAgIC8vICAgICBzZWxmLnVzZXJJbmZvID0gdXNlckluZm9cclxuICAgIC8vICAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgIC8vICAgICAgICAgICB1cmw6IGFwaS51c2Vycy5sb2dpbi51cmwsXHJcbiAgICAvLyAgICAgICAgICAgbWV0aG9kOiBhcGkudXNlcnMubG9naW4ubWV0aG9kLFxyXG4gICAgLy8gICAgICAgICAgIGRhdGE6IHtcclxuICAgIC8vICAgICAgICAgICAgIGNvZGU6IGNvZGUsXHJcbiAgICAvLyAgICAgICAgICAgICB1c2VySW5mbzogdXNlckluZm9cclxuICAgIC8vICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyAgIHNlbGYubm9ybWFsVGl0bGUgPSAn5qCH6aKY5bey6KKr5L+u5pS5J1xyXG5cclxuICAgIC8vICAgc2VsZi5zZXRUaW1lb3V0VGl0bGUgPSAn5qCH6aKY5LiJ56eS5ZCO5Lya6KKr5L+u5pS5J1xyXG4gICAgLy8gICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIC8vICAgICBzZWxmLnNldFRpbWVvdXRUaXRsZSA9ICfliLDkuInnp5LkuoYnXHJcbiAgICAvLyAgICAgc2VsZi4kYXBwbHkoKVxyXG4gICAgLy8gICB9LCAzMDAwKVxyXG5cclxuICAgIC8vICAgc2VsZi4kYXBwbHkoKVxyXG4gICAgLy8gfSlcclxuICB9XHJcbn1cclxuIl19
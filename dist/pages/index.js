'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../config.js');

var _config2 = _interopRequireDefault(_config);

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
    }, _this.components = {}, _this.data = {
      mynum: 20,
      userInfo: {
        nickName: '加载中...'
      },
      normalTitle: '原始标题',
      setTimeoutTitle: '标题三秒后会被修改',
      count: 0,
      netrst: '',
      groupList: [{
        id: 1,
        name: '点击改变',
        list: [{
          childid: '1.1',
          childname: '子项，点我改变'
        }, {
          childid: '1.2',
          childname: '子项，点我改变'
        }, {
          childid: '1.3',
          childname: '子项，点我改变'
        }]
      }, {
        id: 2,
        name: '点击改变',
        list: [{
          childid: '2.1',
          childname: '子项，点我改变'
        }, {
          childid: '2.2',
          childname: '子项，点我改变'
        }, {
          childid: '2.3',
          childname: '子项，点我改变'
        }]
      }, {
        id: 3,
        name: '点击改变',
        list: [{
          childid: '3.1',
          childname: '子项，点我改变'
        }]
      }]
    }, _this.computed = {
      now: function now() {
        return +new Date();
      }
    }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      this.$parent.getUserInfo(function (code, userInfo) {
        if (userInfo) {
          self.userInfo = userInfo;
          _wepy2.default.request({
            url: _config2.default.users.login.url,
            method: _config2.default.users.login.method,
            data: {
              code: code,
              userInfo: userInfo
            }
          });
        }
        self.normalTitle = '标题已被修改';

        self.setTimeoutTitle = '标题三秒后会被修改';
        setTimeout(function () {
          self.setTimeoutTitle = '到三秒了';
          self.$apply();
        }, 3000);

        self.$apply();
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwibXludW0iLCJ1c2VySW5mbyIsIm5pY2tOYW1lIiwibm9ybWFsVGl0bGUiLCJzZXRUaW1lb3V0VGl0bGUiLCJjb3VudCIsIm5ldHJzdCIsImdyb3VwTGlzdCIsImlkIiwibmFtZSIsImxpc3QiLCJjaGlsZGlkIiwiY2hpbGRuYW1lIiwiY29tcHV0ZWQiLCJub3ciLCJEYXRlIiwibWV0aG9kcyIsImV2ZW50cyIsInNlbGYiLCIkcGFyZW50IiwiZ2V0VXNlckluZm8iLCJjb2RlIiwicmVxdWVzdCIsInVybCIsInVzZXJzIiwibG9naW4iLCJtZXRob2QiLCJzZXRUaW1lb3V0IiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUliQyxJLEdBQU87QUFDTEMsYUFBTyxFQURGO0FBRUxDLGdCQUFVO0FBQ1JDLGtCQUFVO0FBREYsT0FGTDtBQUtMQyxtQkFBYSxNQUxSO0FBTUxDLHVCQUFpQixXQU5aO0FBT0xDLGFBQU8sQ0FQRjtBQVFMQyxjQUFRLEVBUkg7QUFTTEMsaUJBQVcsQ0FDVDtBQUNFQyxZQUFJLENBRE47QUFFRUMsY0FBTSxNQUZSO0FBR0VDLGNBQU0sQ0FDSjtBQUNFQyxtQkFBUyxLQURYO0FBRUVDLHFCQUFXO0FBRmIsU0FESSxFQUlEO0FBQ0RELG1CQUFTLEtBRFI7QUFFREMscUJBQVc7QUFGVixTQUpDLEVBT0Q7QUFDREQsbUJBQVMsS0FEUjtBQUVEQyxxQkFBVztBQUZWLFNBUEM7QUFIUixPQURTLEVBaUJUO0FBQ0VKLFlBQUksQ0FETjtBQUVFQyxjQUFNLE1BRlI7QUFHRUMsY0FBTSxDQUNKO0FBQ0VDLG1CQUFTLEtBRFg7QUFFRUMscUJBQVc7QUFGYixTQURJLEVBSUQ7QUFDREQsbUJBQVMsS0FEUjtBQUVEQyxxQkFBVztBQUZWLFNBSkMsRUFPRDtBQUNERCxtQkFBUyxLQURSO0FBRURDLHFCQUFXO0FBRlYsU0FQQztBQUhSLE9BakJTLEVBaUNUO0FBQ0VKLFlBQUksQ0FETjtBQUVFQyxjQUFNLE1BRlI7QUFHRUMsY0FBTSxDQUNKO0FBQ0VDLG1CQUFTLEtBRFg7QUFFRUMscUJBQVc7QUFGYixTQURJO0FBSFIsT0FqQ1M7QUFUTixLLFFBdURQQyxRLEdBQVc7QUFDVEMsU0FEUyxpQkFDRjtBQUNMLGVBQU8sQ0FBQyxJQUFJQyxJQUFKLEVBQVI7QUFDRDtBQUhRLEssUUFNWEMsTyxHQUFVLEUsUUFJVkMsTSxHQUFTLEU7Ozs7OzZCQUlBO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FBQ0EsV0FBS0MsT0FBTCxDQUFhQyxXQUFiLENBQXlCLFVBQVVDLElBQVYsRUFBZXBCLFFBQWYsRUFBeUI7QUFDaEQsWUFBSUEsUUFBSixFQUFjO0FBQ1ppQixlQUFLakIsUUFBTCxHQUFnQkEsUUFBaEI7QUFDSSx5QkFBS3FCLE9BQUwsQ0FBYTtBQUNYQyxpQkFBSyxpQkFBSUMsS0FBSixDQUFVQyxLQUFWLENBQWdCRixHQURWO0FBRVhHLG9CQUFRLGlCQUFJRixLQUFKLENBQVVDLEtBQVYsQ0FBZ0JDLE1BRmI7QUFHWDNCLGtCQUFNO0FBQ0pzQixvQkFBTUEsSUFERjtBQUVKcEIsd0JBQVVBO0FBRk47QUFISyxXQUFiO0FBUUw7QUFDRGlCLGFBQUtmLFdBQUwsR0FBbUIsUUFBbkI7O0FBRUFlLGFBQUtkLGVBQUwsR0FBdUIsV0FBdkI7QUFDQXVCLG1CQUFXLFlBQU07QUFDZlQsZUFBS2QsZUFBTCxHQUF1QixNQUF2QjtBQUNBYyxlQUFLVSxNQUFMO0FBQ0QsU0FIRCxFQUdHLElBSEg7O0FBS0FWLGFBQUtVLE1BQUw7QUFDRCxPQXJCRDtBQXNCRDs7OztFQXJHZ0MsZUFBS0MsSTs7a0JBQW5CbEMsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi9jb25maWcnXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6aaW6aG1J1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50cyA9IHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgbXludW06IDIwLFxyXG4gICAgICB1c2VySW5mbzoge1xyXG4gICAgICAgIG5pY2tOYW1lOiAn5Yqg6L295LitLi4uJ1xyXG4gICAgICB9LFxyXG4gICAgICBub3JtYWxUaXRsZTogJ+WOn+Wni+agh+mimCcsXHJcbiAgICAgIHNldFRpbWVvdXRUaXRsZTogJ+agh+mimOS4ieenkuWQjuS8muiiq+S/ruaUuScsXHJcbiAgICAgIGNvdW50OiAwLFxyXG4gICAgICBuZXRyc3Q6ICcnLFxyXG4gICAgICBncm91cExpc3Q6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgIG5hbWU6ICfngrnlh7vmlLnlj5gnLFxyXG4gICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY2hpbGRpZDogJzEuMScsXHJcbiAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgY2hpbGRpZDogJzEuMicsXHJcbiAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgY2hpbGRpZDogJzEuMycsXHJcbiAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMixcclxuICAgICAgICAgIG5hbWU6ICfngrnlh7vmlLnlj5gnLFxyXG4gICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY2hpbGRpZDogJzIuMScsXHJcbiAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgY2hpbGRpZDogJzIuMicsXHJcbiAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgY2hpbGRpZDogJzIuMycsXHJcbiAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgIG5hbWU6ICfngrnlh7vmlLnlj5gnLFxyXG4gICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY2hpbGRpZDogJzMuMScsXHJcbiAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZWQgPSB7XHJcbiAgICAgIG5vdyAoKSB7XHJcbiAgICAgICAgcmV0dXJuICtuZXcgRGF0ZSgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICBcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMgPSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzXHJcbiAgICAgIHRoaXMuJHBhcmVudC5nZXRVc2VySW5mbyhmdW5jdGlvbiAoY29kZSx1c2VySW5mbykge1xyXG4gICAgICAgIGlmICh1c2VySW5mbykge1xyXG4gICAgICAgICAgc2VsZi51c2VySW5mbyA9IHVzZXJJbmZvXHJcbiAgICAgICAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIHVybDogYXBpLnVzZXJzLmxvZ2luLnVybCxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogYXBpLnVzZXJzLmxvZ2luLm1ldGhvZCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgY29kZTogY29kZSxcclxuICAgICAgICAgICAgICAgICAgdXNlckluZm86IHVzZXJJbmZvXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGYubm9ybWFsVGl0bGUgPSAn5qCH6aKY5bey6KKr5L+u5pS5J1xyXG5cclxuICAgICAgICBzZWxmLnNldFRpbWVvdXRUaXRsZSA9ICfmoIfpopjkuInnp5LlkI7kvJrooqvkv67mlLknXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBzZWxmLnNldFRpbWVvdXRUaXRsZSA9ICfliLDkuInnp5LkuoYnXHJcbiAgICAgICAgICBzZWxmLiRhcHBseSgpXHJcbiAgICAgICAgfSwgMzAwMClcclxuXHJcbiAgICAgICAgc2VsZi4kYXBwbHkoKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuIl19
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActivityList = function (_wepy$component) {
    _inherits(ActivityList, _wepy$component);

    function ActivityList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ActivityList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ActivityList.__proto__ || Object.getPrototypeOf(ActivityList)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            navs: [{
                text: '按热度',
                selected: true
            }, {
                text: '按时间',
                selected: false
            }, {
                text: '按热度',
                selected: false
            }]
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return ActivityList;
}(_wepy2.default.component);

exports.default = ActivityList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXR5LmpzIl0sIm5hbWVzIjpbIkFjdGl2aXR5TGlzdCIsImRhdGEiLCJuYXZzIiwidGV4dCIsInNlbGVjdGVkIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUNxQkEsWTs7Ozs7Ozs7Ozs7Ozs7c01BQ2pCQyxJLEdBQUs7QUFDREMsa0JBQUssQ0FDRDtBQUNJQyxzQkFBSyxLQURUO0FBRUlDLDBCQUFTO0FBRmIsYUFEQyxFQUlDO0FBQ0VELHNCQUFLLEtBRFA7QUFFRUMsMEJBQVM7QUFGWCxhQUpELEVBT0M7QUFDRUQsc0JBQUssS0FEUDtBQUVFQywwQkFBUztBQUZYLGFBUEQ7QUFESixTOzs7O0VBRGlDLGVBQUtDLFM7O2tCQUExQkwsWSIsImZpbGUiOiJhY3Rpdml0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aXZpdHlMaXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnR7XHJcbiAgICAgIGRhdGE9e1xyXG4gICAgICAgICAgbmF2czpbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0OifmjInng63luqYnLFxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZDp0cnVlLFxyXG4gICAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0OifmjInml7bpl7QnLFxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZDpmYWxzZSxcclxuICAgICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgICAgdGV4dDon5oyJ54Ot5bqmJyxcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgfVxyXG4iXX0=
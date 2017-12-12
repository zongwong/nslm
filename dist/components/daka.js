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

var DakaList = function (_wepy$component) {
    _inherits(DakaList, _wepy$component);

    function DakaList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, DakaList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DakaList.__proto__ || Object.getPrototypeOf(DakaList)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
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

    return DakaList;
}(_wepy2.default.component);

exports.default = DakaList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRha2EuanMiXSwibmFtZXMiOlsiRGFrYUxpc3QiLCJkYXRhIiwibmF2cyIsInRleHQiLCJzZWxlY3RlZCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFDcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzhMQUNqQkMsSSxHQUFLO0FBQ0RDLGtCQUFLLENBQ0Q7QUFDSUMsc0JBQUssS0FEVDtBQUVJQywwQkFBUztBQUZiLGFBREMsRUFJQztBQUNFRCxzQkFBSyxLQURQO0FBRUVDLDBCQUFTO0FBRlgsYUFKRCxFQU9DO0FBQ0VELHNCQUFLLEtBRFA7QUFFRUMsMEJBQVM7QUFGWCxhQVBEO0FBREosUzs7OztFQUQ2QixlQUFLQyxTOztrQkFBdEJMLFEiLCJmaWxlIjoiZGFrYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFrYUxpc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudHtcclxuICAgICAgZGF0YT17XHJcbiAgICAgICAgICBuYXZzOltcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQ6J+aMieeDreW6picsXHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOnRydWUsXHJcbiAgICAgICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQ6J+aMieaXtumXtCcsXHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOmZhbHNlLFxyXG4gICAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0OifmjInng63luqYnLFxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZDpmYWxzZSxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgIH1cclxuICB9XHJcbiJdfQ==
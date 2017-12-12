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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRha2FMaXN0LmpzIl0sIm5hbWVzIjpbIkRha2FMaXN0IiwiZGF0YSIsIm5hdnMiLCJ0ZXh0Iiwic2VsZWN0ZWQiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxROzs7Ozs7Ozs7Ozs7Ozs4TEFDakJDLEksR0FBSztBQUNEQyxrQkFBSyxDQUNEO0FBQ0lDLHNCQUFLLEtBRFQ7QUFFSUMsMEJBQVM7QUFGYixhQURDLEVBSUM7QUFDRUQsc0JBQUssS0FEUDtBQUVFQywwQkFBUztBQUZYLGFBSkQsRUFPQztBQUNFRCxzQkFBSyxLQURQO0FBRUVDLDBCQUFTO0FBRlgsYUFQRDtBQURKLFM7Ozs7RUFENkIsZUFBS0MsUzs7a0JBQXRCTCxRIiwiZmlsZSI6ImRha2FMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBEYWthTGlzdCBleHRlbmRzIHdlcHkuY29tcG9uZW50e1xyXG4gICAgICBkYXRhPXtcclxuICAgICAgICAgIG5hdnM6W1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgdGV4dDon5oyJ54Ot5bqmJyxcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6dHJ1ZSxcclxuICAgICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgICAgdGV4dDon5oyJ5pe26Ze0JyxcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQ6J+aMieeDreW6picsXHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOmZhbHNlLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgfVxyXG4gIH1cclxuIl19
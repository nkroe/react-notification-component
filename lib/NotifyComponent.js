"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _NotifyHandler = _interopRequireDefault(require("./NotifyHandler"));

var _Notification = _interopRequireDefault(require("./Notification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TestComp =
/*#__PURE__*/
function (_Component) {
  _inherits(TestComp, _Component);

  function TestComp(props) {
    var _this;

    _classCallCheck(this, TestComp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TestComp).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "changeCallback", function (data) {
      if (_this.props.maxNotify > 0 && data.length > _this.props.maxNotify) {
        _NotifyHandler["default"].remove(data[data.length - 1].id);
      } else {
        _this.setState({
          comp: data
        });

        setTimeout(function () {
          _this.forceUpdate();
        }, 0);
      }
    });

    _this.state = {
      comp: []
    };
    return _this;
  }

  _createClass(TestComp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _NotifyHandler["default"].addChangeListener(this.changeCallback);
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement(_react["default"].Fragment, null, this.state.comp.map(function (w, e) {
        var id = w.id,
            title = w.title,
            message = w.message,
            callback = w.callback,
            callbackAfter = w.callbackAfter,
            funcs = w.funcs,
            styles = w.styles;
        var time = funcs.time,
            animationDelay = funcs.animationDelay,
            animationTimeFunc = funcs.animationTimeFunc,
            hide = funcs.hide,
            progress = funcs.progress,
            position = funcs.position;
        var width = styles.width,
            height = styles.height,
            mainBackground = styles.mainBackground,
            mainBackgroundHover = styles.mainBackgroundHover,
            mainBackgroundHoverTime = styles.mainBackgroundHoverTime,
            styleBlock = styles.styleBlock,
            styleMain = styles.styleMain,
            styleTitle = styles.styleTitle,
            styleMessage = styles.styleMessage,
            styleProgress = styles.styleProgress;
        return _react["default"].createElement(_Notification["default"], {
          key: id,
          id: id,
          title: title,
          message: message,
          time: time,
          animationDelay: animationDelay,
          animationTimeFunc: animationTimeFunc,
          hide: hide,
          progress: progress,
          width: width,
          height: height,
          position: position,
          mainBackground: mainBackground,
          mainBackgroundHover: mainBackgroundHover,
          mainBackgroundHoverTime: mainBackgroundHoverTime,
          styleBlock: styleBlock,
          styleMain: styleMain,
          styleTitle: styleTitle,
          styleMessage: styleMessage,
          styleProgress: styleProgress,
          callback: callback,
          callbackAfter: callbackAfter
        });
      }));
    }
  }]);

  return TestComp;
}(_react.Component);

var _default = TestComp;
exports["default"] = _default;
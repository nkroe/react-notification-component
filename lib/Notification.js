"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _NotifyHandler = _interopRequireDefault(require("./NotifyHandler"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

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

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 4px;\n    border-bottom-left-radius: 2px;\n    border-bottom-right-radius: 2px;\n    background: #82ccdd;\n    box-shadow: 0 -1px 20px 1px rgba(128, 152, 190, 0.8);\n    transition-timing-function: linear;\n    position: absolute;\n    bottom: 0;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    text-align: start;\n    width: 100%;\n    height: auto;\n    font-family: sans-serif;\n    font-size: 11px;\n    font-weight: 500;\n    user-select: none;\n    margin-bottom: 12px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    width: 100%;\n    height: auto;\n    font-family: sans-serif;\n    font-size: 12px;\n    font-weight: 700;\n    user-select: none;\n    margin-top: 10px;\n    overflow: hidden;\n    word-break: break-all;\n    text-align: start;\n    color: #fff;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    align-self: center;\n    width: 90%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    color: #fff;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    border-radius: 2px;\n    box-shadow: 1px 7px 14px -3px rgba(0,0,0,0.2);\n    position: relative;\n\n    &:hover {\n        cursor: pointer;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    height: auto;\n    position: fixed;\n    display: flex;\n    justify-content: center;\n    justify-content: center;\n    opacity: 0;\n    z-index: 99999;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// import { string, number, bool, func } from 'prop-types';
var Notification__block = _styledComponents["default"].div(_templateObject());

var Notification__main = _styledComponents["default"].div(_templateObject2());

var Notification__cont = _styledComponents["default"].div(_templateObject3());

var Notification__contText = _styledComponents["default"].div(_templateObject4());

var Notification__title = _styledComponents["default"].div(_templateObject5());

var Notification__message = _styledComponents["default"].div(_templateObject6());

var Notification__progress = _styledComponents["default"].div(_templateObject7());

var Notification =
/*#__PURE__*/
function (_Component) {
  _inherits(Notification, _Component);

  function Notification(props) {
    var _this;

    _classCallCheck(this, Notification);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Notification).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "removeNotify", function () {
      var _this$props = _this.props,
          animationDelay = _this$props.animationDelay,
          id = _this$props.id,
          callback = _this$props.callback;

      if (document.getElementById(id)) {
        callback();
        document.getElementById(id).style.opacity = 0;
        setTimeout(function () {
          _NotifyHandler["default"].remove(id);
        }, animationDelay * 1000);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setPosition", function (pos) {
      var _this$props2 = _this.props,
          id = _this$props2.id,
          position = _this$props2.position;

      var getOffset = function getOffset(a) {
        var arr = Array.from(document.querySelectorAll('.notification__block')).filter(function (w) {
          return w.dataset.pos === a;
        });
        var number = arr.includes(document.getElementById(id)) ? arr.indexOf(document.getElementById(id)) : 0;
        return document.querySelector('.notification__block') ? Math.round(arr.slice(0, number).map(function (w) {
          return parseFloat(getComputedStyle(w).height.slice(0, -2));
        }).reduce(function (a, c) {
          return a + c;
        }, 0) + number * 10) : 0;
      };

      switch (pos) {
        case 'LT':
          return {
            left: 12,
            top: 12 + getOffset('LT')
          };

        case 'LB':
          return {
            left: 12,
            bottom: 12 + getOffset('LB')
          };

        case 'RT':
          return {
            right: 12,
            top: 12 + getOffset('RT')
          };

        case 'RB':
          return {
            right: 12,
            bottom: 12 + getOffset('RB')
          };

        default:
          return {
            right: 12,
            top: 12 + getOffset('RT')
          };
      }
    });

    _this.state = {};
    return _this;
  }

  _createClass(Notification, [{
    key: "hoverMain",
    value: function hoverMain(a) {
      a === 1 ? document.getElementById(this.props.id).children[0].style.background = this.props.mainBackgroundHover : document.getElementById(this.props.id).children[0].style.background = this.props.mainBackground;
    }
  }, {
    key: "start",
    value: function start() {
      this.props.mainBackground = '#fff';
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props3 = this.props,
          time = _this$props3.time,
          animationDelay = _this$props3.animationDelay,
          hide = _this$props3.hide,
          id = _this$props3.id,
          callbackAfter = _this$props3.callbackAfter;
      setTimeout(function () {
        if (document.getElementById(id)) document.getElementById(id).style.opacity = 1;
      }, 0);
      setTimeout(function () {
        if (document.getElementById(id)) document.getElementById(id).children[0].children[1].style.width = 0;
      }, animationDelay * 1000);

      if (hide) {
        setTimeout(function () {
          if (document.getElementById(id)) {
            callbackAfter();
            document.getElementById(id).style.opacity = 0;
            setTimeout(function () {
              _NotifyHandler["default"].remove(id);
            }, animationDelay * 1000);
          }
        }, time * 1000 + animationDelay * 1000);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          width = _this$props4.width,
          height = _this$props4.height,
          mainBackground = _this$props4.mainBackground,
          time = _this$props4.time,
          animationDelay = _this$props4.animationDelay,
          animationTimeFunc = _this$props4.animationTimeFunc,
          progress = _this$props4.progress,
          mainBackgroundHoverTime = _this$props4.mainBackgroundHoverTime,
          progressBackground = _this$props4.progressBackground,
          title = _this$props4.title,
          message = _this$props4.message,
          position = _this$props4.position,
          styleBlock = _this$props4.styleBlock,
          styleMain = _this$props4.styleMain,
          styleTitle = _this$props4.styleTitle,
          styleMessage = _this$props4.styleMessage,
          styleProgress = _this$props4.styleProgress;
      var pos = this.setPosition(position);
      return _react["default"].createElement(Notification__block, {
        className: "notification__block",
        id: this.props.id,
        "data-pos": this.props.position,
        onClick: function onClick() {
          _this2.removeNotify();
        },
        style: Object.assign({
          width: width,
          minHeight: height,
          transition: "all ".concat(animationDelay, "s ").concat(animationTimeFunc, " 0s")
        }, pos, styleBlock)
      }, _react["default"].createElement(Notification__main, {
        onMouseOver: function onMouseOver(_) {
          _this2.hoverMain(1);
        },
        onMouseLeave: function onMouseLeave(_) {
          _this2.hoverMain(2);
        },
        style: Object.assign({
          background: mainBackground,
          transition: "".concat(mainBackgroundHoverTime, "s")
        }, styleMain)
      }, _react["default"].createElement(Notification__cont, null, _react["default"].createElement(Notification__contText, null, _react["default"].createElement(Notification__title, {
        style: styleTitle
      }, _react["default"].createElement("span", null, title)), _react["default"].createElement(Notification__message, {
        style: styleMessage
      }, _react["default"].createElement("span", null, message)))), _react["default"].createElement(Notification__progress, {
        style: Object.assign({
          transitionDuration: "".concat(time, "s"),
          opacity: progress ? '1' : '0',
          background: progressBackground
        }, styleProgress)
      })));
    }
  }]);

  return Notification;
}(_react.Component);

exports["default"] = Notification;
Notification.defaultProps = {
  width: 220,
  height: 54,
  mainBackground: '#2980b9',
  mainBackgroundHover: '#3498db',
  mainBackgroundHoverTime: 0.2,
  time: 2,
  animationDelay: 0.3,
  animationTimeFunc: 'linear',
  position: 'RT',
  hide: true,
  progress: true,
  title: 'Notification',
  message: 'Some message text :)',
  styleBlock: {},
  styleMain: {},
  styleTitle: {},
  styleMessage: {},
  styleProgress: {}
};
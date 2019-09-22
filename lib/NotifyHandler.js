"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _events = require("events");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var createUUID = function createUUID() {
  var pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  return pattern.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0;
    var v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
};

var Events = {
  change: 'change'
};

var CompManager =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(CompManager, _EventEmitter);

  function CompManager() {
    var _this;

    _classCallCheck(this, CompManager);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CompManager).call(this));
    _this.listComp = [];
    return _this;
  }

  _createClass(CompManager, [{
    key: "add",
    value: function add() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Notification';
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'This is notification';
      var funcs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var styles = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var callback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};
      var callbackAfter = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : function () {};
      var data = {
        id: createUUID(),
        title: title,
        message: message,
        funcs: funcs,
        styles: styles,
        callback: callback,
        callbackAfter: callbackAfter
      };
      this.listComp.unshift(data);
      this.emitChange();
    }
  }, {
    key: "remove",
    value: function remove(id) {
      this.listComp = this.listComp.filter(function (w) {
        return w.id !== id;
      });
      this.emitChange();
    }
  }, {
    key: "emitChange",
    value: function emitChange() {
      this.emit(Events.change, this.listComp);
    }
  }, {
    key: "addChangeListener",
    value: function addChangeListener(callback) {
      this.addListener(Events.change, callback);
    }
  }]);

  return CompManager;
}(_events.EventEmitter);

var _default = new CompManager();

exports["default"] = _default;
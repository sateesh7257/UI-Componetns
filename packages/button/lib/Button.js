"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Button.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//create button component

var Button = function Button(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick,
    disabled = _ref.disabled;
  return /*#__PURE__*/_react["default"].createElement("button", {
    className: "button",
    onClick: onClick,
    disabled: disabled
  }, children);
};
Button.propTypes = {
  children: _propTypes["default"].node.isRequired,
  onClick: _propTypes["default"].func,
  disabled: _propTypes["default"].bool
};
Button.defaultProps = {
  onClick: function onClick() {},
  disabled: false
};
var _default = Button;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Checkbox.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//create Checkbox component

var Checkbox = function Checkbox(_ref) {
  var onClick = _ref.onClick,
    disabled = _ref.disabled;
  return /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    className: "Checkbox",
    onClick: onClick,
    disabled: disabled
  });
};
Checkbox.propTypes = {
  onClick: _propTypes["default"].func,
  disabled: _propTypes["default"].bool
};
Checkbox.defaultProps = {
  onClick: function onClick() {},
  disabled: false
};
var _default = Checkbox;
exports["default"] = _default;
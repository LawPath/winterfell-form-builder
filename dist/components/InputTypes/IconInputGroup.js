"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Tooltip = _interopRequireDefault(require("../Tooltip"));

require("./style.scss");

var IconInput = function IconInput(_ref) {
  var children = _ref.children,
      active = _ref.active,
      onClick = _ref.onClick,
      tooltipContent = _ref.tooltipContent,
      iconImg = _ref.iconImg;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "input-group"
  }, children, active ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "input-group-append ",
    "data-img": iconImg
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "input-group-text ",
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "prefill-icon"
  }))) : null);
};

var _default = IconInput;
exports["default"] = _default;
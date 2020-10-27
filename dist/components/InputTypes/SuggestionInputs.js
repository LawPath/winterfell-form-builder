"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var SuggestionInputs = function SuggestionInputs(_ref) {
  var questionId = _ref.questionId,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data,
      onChange = _ref.onChange;
  return data ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("label", null, "Suggestions")), /*#__PURE__*/_react["default"].createElement("div", null, data.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("span", {
      onClick: function onClick(e) {
        return onChange(item.id);
      },
      className: "badge badge-primary m-1"
    }, item.text);
  }))) : null;
};

var _default = SuggestionInputs;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var SuggestionInputs = function SuggestionInputs(_ref) {
  var questionId = _ref.questionId,
      data = _ref.data,
      _onClick = _ref.onClick;
  return data ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("label", null, "Suggestions")), /*#__PURE__*/_react["default"].createElement("div", null, data.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("span", {
      onClick: function onClick(e) {
        return _onClick(e, {
          questionId: questionId,
          item: item,
          data: data
        });
      },
      className: "badge badge-primary m-1"
    }, item.text);
  }))) : null;
};

var _default = SuggestionInputs;
exports["default"] = _default;
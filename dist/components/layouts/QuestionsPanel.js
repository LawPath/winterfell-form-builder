"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _FieldSelector = _interopRequireDefault(require("../FieldSelector"));

var QuestionPanels = function QuestionPanels(_ref) {
  var title = _ref.title,
      schema = _ref.schema,
      currentQuestionPanelIndex = _ref.currentQuestionPanelIndex;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("h3", null, title), schema && currentQuestionPanelIndex >= 0 && /*#__PURE__*/_react["default"].createElement(_FieldSelector["default"], {
    currentQuestionPanelIndex: currentQuestionPanelIndex
  }));
};

var _default = QuestionPanels;
exports["default"] = _default;
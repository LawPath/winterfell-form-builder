"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var DeleteQuestionOptionButton = function DeleteQuestionOptionButton(props) {
  var questionOptionIndex = props.questionOptionIndex,
      onDeleteQuestionOption = props.onDeleteQuestionOption;

  var onConfirmDelete = function onConfirmDelete(e) {
    e.preventDefault();
    onDeleteQuestionOption(questionOptionIndex);
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn btn-delete",
    "data-toggle": "modal",
    "data-target": "#deleteQuestionOptionButton-".concat(questionOptionIndex)
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "material-icons"
  }, "delete")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal fade",
    id: "deleteQuestionOptionButton-".concat(questionOptionIndex),
    tabIndex: "-1",
    key: "deleteQuestionOptionButtonModal"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-dialog bg-white"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-title"
  }, "Delete Option Confirmation")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-body"
  }, "Are you sure you want to delete this option?"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "btn btn-danger",
    "data-dismiss": "modal"
  }, "Cancel"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn btn-dark",
    "data-dismiss": "modal",
    onClick: onConfirmDelete
  }, "Confirm Delete"))))));
};

DeleteQuestionOptionButton.propTypes = {
  onDeleteQuestionOption: _propTypes["default"].func.isRequired
};
var _default = DeleteQuestionOptionButton;
exports["default"] = _default;
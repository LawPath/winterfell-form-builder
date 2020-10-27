"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _reactTagInput = require("react-tag-input");

var _reactRedux = require("react-redux");

var _winterfellFormBuilderActions = require("../../actions/winterfellFormBuilderActions");

var _immutable = require("immutable");

var KeyCodes = {
  comma: 188,
  enter: 13
};
var delimiters = [KeyCodes.comma, KeyCodes.enter];
var defaultPlaceholder = 'Enter suggestions';
var defaultClassnames = {
  tagInputField: 'form-control'
};
var SUGGESTION_COMPONENT = 'suggestion';

var setData = function setData(data) {
  return (0, _immutable.List)(data);
};

var InputTags = function InputTags(_ref) {
  var currentQuestionSetIndex = _ref.currentQuestionSetIndex,
      currentQuestionIndex = _ref.currentQuestionIndex,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? defaultPlaceholder : _ref$placeholder;
  var path = ['form', 'schema', 'questionSets', currentQuestionSetIndex, 'questions', currentQuestionIndex, 'suggestions'];
  var tags = (0, _reactRedux.useSelector)(function (state) {
    var results = state.getIn(path);
    return !results ? [] : _immutable.List.isList(results) ? results.toJS() : results;
  });
  var dispatch = (0, _reactRedux.useDispatch)();

  var handleDelete = function handleDelete(i) {
    var updatedTags = tags.filter(function (tag, index) {
      return index !== i;
    });
    dispatch((0, _winterfellFormBuilderActions.changeSuggestedAnswers)(currentQuestionSetIndex, currentQuestionIndex, setData(updatedTags)));
  };

  var handleAddition = function handleAddition(tag) {
    var updatedTags = [].concat((0, _toConsumableArray2["default"])(tags), [tag]);
    dispatch((0, _winterfellFormBuilderActions.changeSuggestedAnswers)(currentQuestionSetIndex, currentQuestionIndex, setData(updatedTags)));
  };

  var handleDrag = function handleDrag(tag, currPos, newPos) {
    var currentTags = (0, _toConsumableArray2["default"])(tags);
    var newTags = currentTags.slice();
    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    dispatch((0, _winterfellFormBuilderActions.changeSuggestedAnswers)(currentQuestionSetIndex, currentQuestionIndex, setData(newTags)));
  };

  return /*#__PURE__*/_react["default"].createElement(_reactTagInput.WithContext, {
    inline: true,
    placeholder: placeholder,
    classNames: defaultClassnames,
    tags: tags,
    handleDelete: handleDelete,
    handleAddition: handleAddition,
    handleDrag: handleDrag,
    delimiters: delimiters,
    autofocus: false
  });
};

var _default = InputTags;
exports["default"] = _default;
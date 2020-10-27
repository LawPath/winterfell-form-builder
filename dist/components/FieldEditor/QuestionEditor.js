"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _immutable = require("immutable");

var _winterfellFormBuilderActions = require("../../actions/winterfellFormBuilderActions");

var _FieldGroup = _interopRequireDefault(require("../InputTypes/FieldGroup"));

var _DeleteQuestionButton = _interopRequireDefault(require("../FormMenu/DeleteQuestionButton"));

var _AddQuestionButton = _interopRequireDefault(require("../FormMenu/AddQuestionButton"));

var _SelectInput = _interopRequireDefault(require("../InputTypes/SelectInput"));

var _ButtonBarEditor = _interopRequireDefault(require("./ButtonBarEditor"));

var _constants = require("../../common/constants");

var _QuestionOptionEditor = _interopRequireDefault(require("./QuestionOptionEditor"));

var _InputTags = _interopRequireDefault(require("../InputTypes/InputTags"));

var QuestionEditor = function QuestionEditor(_ref) {
  var currentQuestionPanelIndex = _ref.currentQuestionPanelIndex,
      currentQuestionSetIndex = _ref.currentQuestionSetIndex,
      currentQuestionIndex = _ref.currentQuestionIndex;
  var questionSetQueryPath = ['form', 'schema', 'questionSets', currentQuestionSetIndex, 'questions', currentQuestionIndex];
  var dispatch = (0, _reactRedux.useDispatch)();
  var questionSetId = (0, _reactRedux.useSelector)(function (state) {
    return state.getIn([].concat(questionSetQueryPath, ['questionSetId']));
  });
  var questionId = (0, _reactRedux.useSelector)(function (state) {
    return state.getIn([].concat(questionSetQueryPath, ['questionId']));
  });
  var question = (0, _reactRedux.useSelector)(function (state) {
    return state.getIn([].concat(questionSetQueryPath, ['question']));
  });
  var questionText = (0, _reactRedux.useSelector)(function (state) {
    return state.getIn([].concat(questionSetQueryPath, ['text']));
  });
  var questionLabelType = (0, _reactRedux.useSelector)(function (state) {
    return state.getIn([].concat(questionSetQueryPath, ['label']));
  });
  var questionPostText = (0, _reactRedux.useSelector)(function (state) {
    return state.getIn([].concat(questionSetQueryPath, ['postText']));
  });
  var questionInputType = (0, _reactRedux.useSelector)(function (state) {
    return state.getIn([].concat(questionSetQueryPath, ['input', 'type']));
  });
  var questionInputOptions = (0, _reactRedux.useSelector)(function (state) {
    return state.getIn([].concat(questionSetQueryPath, ['input', 'options']));
  });

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      editQuestionId = _useState2[0],
      setEditQuestionId = _useState2[1];

  var onChange = function onChange(event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;

    switch (name) {
      case 'questionId':
        dispatch(editQuestionId(currentQuestionSetIndex, currentQuestionIndex, value));
        break;

      case 'question':
        dispatch((0, _winterfellFormBuilderActions.editQuestion)(currentQuestionSetIndex, currentQuestionIndex, value));
        break;

      case 'questionText':
        dispatch((0, _winterfellFormBuilderActions.editQuestionText)(currentQuestionSetIndex, currentQuestionIndex, value));
        break;

      case 'questionPostText':
        dispatch((0, _winterfellFormBuilderActions.editQuestionPostText)(currentQuestionSetIndex, currentQuestionIndex, value));
        break;

      default:
    }
  };

  var onSelect = function onSelect(questionType, event) {
    var name = event.target.name;

    switch (name) {
      case 'questionInputType':
        if (questionType !== '') {
          dispatch((0, _winterfellFormBuilderActions.changeQuestionType)(currentQuestionSetIndex, currentQuestionIndex, questionType));
        }

        break;

      case 'questionLabelType':
        dispatch((0, _winterfellFormBuilderActions.changeQuestionLabel)(currentQuestionSetIndex, currentQuestionIndex, questionType));
        break;

      default:
        break;
    }
  };

  var onEditQuestionIdClick = function onEditQuestionIdClick() {
    setEditQuestionId(!editQuestionId);
  };

  return /*#__PURE__*/_react["default"].createElement("form", null, currentQuestionIndex > -1 && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react["default"].createElement(_FieldGroup["default"], {
    id: "questionSetId",
    name: "questionSetId",
    label: "Question Set ID",
    onChange: onChange,
    placeholder: questionSetId,
    value: questionSetId,
    disabled: true
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react["default"].createElement(_FieldGroup["default"], {
    id: "questionId",
    name: "questionId",
    label: "Question ID",
    onChange: onChange,
    placeholder: questionId,
    value: questionId,
    disabled: editQuestionId
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "edit-question-id",
    id: "edit-question-id-label"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    id: "edit-question-id",
    type: "checkbox",
    onClick: onEditQuestionIdClick
  }), "\xA0edit question id (not recommended)")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react["default"].createElement(_FieldGroup["default"], {
    id: "question",
    name: "question",
    label: "Question",
    onChange: onChange,
    placeholder: question,
    value: question
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react["default"].createElement(_FieldGroup["default"], {
    id: "questionText",
    name: "questionText",
    label: "Question Pre Text",
    placeholder: questionText,
    onChange: onChange,
    value: questionText
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react["default"].createElement(_FieldGroup["default"], {
    id: "questionPostText",
    name: "questionPostText",
    label: "Question Post Text",
    placeholder: questionPostText,
    onChange: onChange,
    value: questionPostText
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "questionInputType"
  }, "Question Type"), /*#__PURE__*/_react["default"].createElement(_SelectInput["default"], {
    id: "questionInputType",
    name: "questionInputType",
    labelId: "questionInputType",
    options: _constants.INPUT_TYPE_OPTIONS,
    onSelect: onSelect,
    displayValue: questionInputType
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "questionLabelType"
  }, "Question label type"), /*#__PURE__*/_react["default"].createElement(_SelectInput["default"], {
    id: "questionLabelType",
    name: "questionLabelType",
    labelId: "questionLabelType",
    options: _constants.QUESTION_LABEL_OPTIONS,
    onSelect: onSelect,
    displayValue: questionLabelType
  }))), (questionInputType === 'checkboxOptionsInput' || questionInputType === 'selectInput' || questionInputType === 'radioOptionsInput') && questionInputOptions && currentQuestionIndex > -1 && /*#__PURE__*/_react["default"].createElement(_QuestionOptionEditor["default"], {
    questionInputOptions: questionInputOptions,
    questionId: questionId,
    currentQuestionPanelIndex: currentQuestionPanelIndex,
    currentQuestionSetIndex: currentQuestionSetIndex,
    currentQuestionIndex: currentQuestionIndex
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "questionLabelType"
  }, "Suggested answers"), /*#__PURE__*/_react["default"].createElement(_InputTags["default"], {
    currentQuestionSetIndex: currentQuestionSetIndex,
    currentQuestionIndex: currentQuestionIndex
  })), /*#__PURE__*/_react["default"].createElement(_ButtonBarEditor["default"], {
    currentQuestionPanelIndex: currentQuestionPanelIndex
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "btn-group"
  }, currentQuestionIndex > -1 && /*#__PURE__*/_react["default"].createElement(_DeleteQuestionButton["default"], {
    currentQuestionSetIndex: currentQuestionSetIndex,
    currentQuestionIndex: currentQuestionIndex
  }), currentQuestionIndex > -1 && /*#__PURE__*/_react["default"].createElement(_AddQuestionButton["default"], {
    questionSetId: questionSetId,
    currentQuestionSetIndex: currentQuestionSetIndex
  })), /*#__PURE__*/_react["default"].createElement("br", null));
};

QuestionEditor.propTypes = {
  editQuestionId: _propTypes["default"].func.isRequired,
  editQuestion: _propTypes["default"].func.isRequired,
  editQuestionText: _propTypes["default"].func.isRequired,
  editQuestionPostText: _propTypes["default"].func.isRequired,
  changeQuestionType: _propTypes["default"].func.isRequired,
  updateNextQuestionTarget: _propTypes["default"].func.isRequired,
  questionSetId: _propTypes["default"].string.isRequired,
  questionId: _propTypes["default"].string,
  question: _propTypes["default"].string,
  questionText: _propTypes["default"].string,
  questionPostText: _propTypes["default"].string,
  questionInputType: _propTypes["default"].string,
  questionInputOptions: _propTypes["default"].object,
  currentQuestionSetIndex: _propTypes["default"].number.isRequired,
  currentQuestionIndex: _propTypes["default"].number.isRequired,
  questionTarget: _propTypes["default"].string,
  questionTargetMatch: _propTypes["default"].string,
  currentQuestionPanelIndex: _propTypes["default"].number.isRequired
};
QuestionEditor.defaultProps = {
  questionId: '',
  question: '',
  questionText: '',
  questionPostText: '',
  questionInputType: '',
  questionInputOptions: (0, _immutable.fromJS)([]),
  questionTarget: '',
  questionTargetMatch: ''
};
var _default = QuestionEditor;
exports["default"] = _default;
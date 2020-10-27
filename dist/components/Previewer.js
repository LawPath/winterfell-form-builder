"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _winterfell = _interopRequireDefault(require("winterfell"));

var _reactRedux = require("react-redux");

var _winterfellFormBuilderActions = require("../actions/winterfellFormBuilderActions");

var _DateInputType = _interopRequireDefault(require("../components/InputTypes/DateInputType"));

var _addressInputType = _interopRequireDefault(require("../components/InputTypes/addressInputType"));

var _textAreaInputType = _interopRequireDefault(require("../components/InputTypes/textAreaInputType"));

var _SuggestionInputs = _interopRequireDefault(require("./InputTypes/SuggestionInputs"));

var _constants = require("../common/constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var onRenderDefault = function onRenderDefault() {
  console.log('Great news! Winterfell rendered successfully');
};

var onSwitchPanelDefault = function onSwitchPanelDefault(panel) {
  console.log("Moving on to the panel that is identified as ".concat(panel.panelId));
};

var onSubmitDefault = function onSubmitDefault(questionAndAnswers, target) {
  console.log('Form submitted!', questionAndAnswers);
  console.log('-----');
  console.log('For this example, we disabled normal form submission functionality. ');
  console.log('-----');
  console.log('Target: ', target);
  console.log('-----'); // alert('Submitted. Check the console to see the answers!');
};

var Previewer = function Previewer(_ref) {
  var _ref$currentPanelId = _ref.currentPanelId,
      currentPanelId = _ref$currentPanelId === void 0 ? null : _ref$currentPanelId,
      _ref$schema = _ref.schema,
      schema = _ref$schema === void 0 ? {} : _ref$schema,
      _ref$onRender = _ref.onRender,
      onRender = _ref$onRender === void 0 ? onRenderDefault : _ref$onRender,
      _ref$onSubmit = _ref.onSubmit,
      onSubmit = _ref$onSubmit === void 0 ? onSubmitDefault : _ref$onSubmit,
      _ref$onSwitchPanel = _ref.onSwitchPanel,
      onSwitchPanel = _ref$onSwitchPanel === void 0 ? onSwitchPanelDefault : _ref$onSwitchPanel,
      _ref$questionAnswers = _ref.questionAnswers,
      questionAnswers = _ref$questionAnswers === void 0 ? {} : _ref$questionAnswers,
      _ref$onUpdate = _ref.onUpdate,
      onUpdate = _ref$onUpdate === void 0 ? function () {} : _ref$onUpdate;

  var _useState = (0, _react.useState)(!schema.suggestionPanel ? _objectSpread(_objectSpread({}, schema), {}, {
    suggestionPanel: _constants.SUGGESION_PANEL_DEFAULT
  }) : schema),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      localSchema = _useState2[0],
      setLocalSchema = _useState2[1];

  var dispatch = (0, _reactRedux.useDispatch)();
  (0, _react.useEffect)(function () {
    schema.questionPanels.forEach(function (qp) {
      qp.progress = _constants.PROGRESS;
    });

    if (!schema.suggestionPanel) {
      setLocalSchema(_objectSpread(_objectSpread({}, schema), {}, {
        suggestionPanel: _constants.SUGGESION_PANEL_DEFAULT
      }));
      return;
    }

    setLocalSchema(schema);
  }, [schema]);

  var onUpdateQuestionAnswers = function onUpdateQuestionAnswers(questionAndAnswers) {
    dispatch((0, _winterfellFormBuilderActions.updateQuestionAnswers)(questionAndAnswers));
  };

  var onClickSuggestion = function onClickSuggestion(event, _ref2) {
    var questionId = _ref2.questionId,
        item = _ref2.item;
    var selectedAnswer = {};
    selectedAnswer[questionId] = item.id;
    dispatch((0, _winterfellFormBuilderActions.updateQuestionAnswers)(selectedAnswer));
  };

  _winterfell["default"].addInputTypes({
    dateInput: _DateInputType["default"],
    addressInput: _addressInputType["default"],
    textAreaInput: _textAreaInputType["default"]
  });

  var displayWinterFellForm = function displayWinterFellForm() {
    return localSchema.formPanels.map(function (formPanel, index) {
      localSchema.suggestionPanel = _constants.SUGGESION_PANEL_DEFAULT;
      localSchema.panelConstants = _constants.PANEL_CONSTANTS;
      localSchema.defaultSuggestions = _constants.DEFAULT_SUGGESTIONS;
      localSchema.classes = _constants.BOOTSTRAP_CLASSES;
      localSchema.formPanels[index].progress = _constants.PROGRESS;
      return formPanel.panelId === currentPanelId && /*#__PURE__*/_react["default"].createElement(_winterfell["default"], {
        schema: localSchema,
        disableSubmit: true,
        onRender: onRender,
        onUpdate: onUpdateQuestionAnswers,
        onSwitchPanel: onSwitchPanel,
        onSubmit: onSubmit,
        questionAnswers: questionAnswers,
        panelId: currentPanelId,
        key: index
      }) || currentPanelId === 'Select Page' && /*#__PURE__*/_react["default"].createElement(_winterfell["default"], {
        schema: localSchema,
        disableSubmit: true,
        onRender: onRender,
        onUpdate: onUpdate,
        onSwitchPanel: onSwitchPanel,
        onSubmit: onSubmit,
        questionAnswers: questionAnswers
      });
    });
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "winterfell-panel-preview card p-3"
  }, localSchema && localSchema.formPanels && localSchema.formPanels.length > 0 && currentPanelId && currentPanelId !== 'Select Page' && displayWinterFellForm());
};

Previewer.propTypes = {
  currentPanelId: _propTypes["default"].number.isRequired,
  schema: _propTypes["default"].object.isRequired,
  onRender: _propTypes["default"].func,
  onSubmit: _propTypes["default"].func,
  onSwitchPanel: _propTypes["default"].func,
  questionAnswers: _propTypes["default"].object,
  onUpdate: _propTypes["default"].func
};
Previewer.defaultProps = {
  currentPanelId: null,
  schema: {},
  onRender: onRenderDefault,
  onSubmit: onSubmitDefault,
  onSwitchPanel: onSwitchPanelDefault,
  questionAnswers: {},
  onUpdate: function onUpdate() {}
};
var _default = Previewer;
exports["default"] = _default;
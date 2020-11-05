"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

var _SuggestionSet = _interopRequireDefault(require("./SuggestionSet"));

var AnswerSuggestions = function AnswerSuggestions(_ref) {
  var schema = _ref.schema,
      questionId = _ref.questionId,
      questionAnswers = _ref.questionAnswers,
      currentPanel = _ref.currentPanel,
      onAnswerChange = _ref.onAnswerChange;

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      currentQuestionSet = _useState2[0],
      setCurrentQuestionSet = _useState2[1];
  /* This function is dupplicated from the handleOnChange function in the index of winterfell library */


  var handleOnChange = (0, _react.useCallback)(function (_questionId, questionAnswer, questionLabel) {
    var mergedData = _lodash["default"].merge(_lodash["default"].get(questionAnswers, [_questionId]), {
      value: questionAnswer,
      label: questionLabel
    });

    if (mergedData.enablePrefilledAnswer && mergedData.value !== mergedData.prefilledData) {
      /* If user edit the prefill data, we will toggle out the prefill toggle */
      mergedData.enablePrefilledAnswer = false;
    }

    var newQuestionAnswers = _lodash["default"].set(questionAnswers, _questionId, mergedData);

    onAnswerChange(newQuestionAnswers);
  }, [onAnswerChange, questionAnswers]);
  (0, _react.useEffect)(function () {
    var questionPanels = schema.questionPanels;

    if (currentPanel) {
      /* Get the current panel */
      var _currentPanel = _lodash["default"].find(questionPanels, function (panel) {
        return panel.panelId === currentPanel.panelId;
      });
      /* Find the current question set of the current panel */


      var questionSets = _currentPanel.questionSets.map(function (questionSetMeta) {
        var questionSet = _lodash["default"].find(schema.questionSets, {
          questionSetId: questionSetMeta.questionSetId
        });

        console.log('This is the data: ', schema);

        if (!questionSet) {
          return undefined;
        }

        return /*#__PURE__*/_react["default"].createElement(_SuggestionSet["default"], {
          suggestionPanel: schema.suggestionPanel,
          defaultSuggestions: schema.defaultSuggestions,
          panelConstants: schema.panelConstants,
          classes: schema.classes,
          questions: questionSet.questions,
          onAnswerChange: handleOnChange
        });
      });

      setCurrentQuestionSet(questionSets);
    }
  }, [questionId, schema, currentPanel, onAnswerChange, handleOnChange]);

  if (schema && currentQuestionSet) {
    return currentQuestionSet;
  }

  return null;
};

var _default = AnswerSuggestions;
exports["default"] = _default;
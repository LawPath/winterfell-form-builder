"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateQuestionAnswers = exports.updateConditionalQuestionType = exports.deleteConditionalQuestion = exports.saveConditionalQuestion = exports.resetNextQuestionTarget = exports.updateNextQuestionTarget = exports.movePage = exports.updateQuestion = exports.changeCurrentEditingField = exports.deleteQuestion = exports.addConditionalQuestion = exports.addQuestion = exports.addQuestionSet = exports.deletePage = exports.addPage = exports.updateForm = exports.goToPage = exports.deleteQuestionOption = exports.editQuestionOptionValue = exports.editQuestionOptionText = exports.addQuestionOption = exports.changeSuggestedAnswers = exports.changeQuestionLabel = exports.changeQuestionType = exports.onSelectNextButtonTarget = exports.onSelectNextButtonAction = exports.disableBackButton = exports.editBackButtonText = exports.editNextButtonText = exports.editQuestionPostText = exports.editQuestionText = exports.editQuestion = exports.editQuestionId = exports.editQuestionSetText = exports.editQuestionSetHeader = exports.editPageText = exports.editPageHeader = exports.editPageId = exports.editFormTitle = exports.saveJSON = exports.uploadJSON = exports.createForm = exports.clearErrorMessage = exports.updateErrorMessage = void 0;

var _constants = require("../common/constants");

var updateErrorMessage = function updateErrorMessage(message) {
  return {
    type: _constants.UPDATE_FORM_ERROR,
    payload: {
      message: message
    }
  };
};

exports.updateErrorMessage = updateErrorMessage;

var clearErrorMessage = function clearErrorMessage() {
  return {
    type: _constants.CLEAR_FORM_ERROR
  };
};

exports.clearErrorMessage = clearErrorMessage;

var createForm = function createForm(title) {
  return {
    type: _constants.CREATE_FORM_SUCCESS,
    payload: {
      title: title
    }
  };
};

exports.createForm = createForm;

var uploadJSON = function uploadJSON(schema, fileName) {
  return {
    type: _constants.UPLOAD_JSON_SUCCESS,
    payload: {
      schema: schema,
      fileName: fileName
    }
  };
};

exports.uploadJSON = uploadJSON;

var saveJSON = function saveJSON(schema, fileName) {
  return {
    type: _constants.SAVE_FORM_SUCCESS,
    payload: {
      schema: schema,
      fileName: fileName
    }
  };
};

exports.saveJSON = saveJSON;

var editFormTitle = function editFormTitle(title) {
  return {
    type: _constants.EDIT_FORM_TITLE_SUCCESS,
    payload: {
      title: title
    }
  };
};

exports.editFormTitle = editFormTitle;

var editPageId = function editPageId(questionPanelIndex, text) {
  return {
    type: _constants.EDIT_PAGE_ID_SUCCESS,
    payload: {
      questionPanelIndex: questionPanelIndex,
      text: text
    }
  };
};

exports.editPageId = editPageId;

var editPageHeader = function editPageHeader(questionPanelIndex, header) {
  return {
    type: _constants.EDIT_PAGE_HEADER_SUCCESS,
    payload: {
      questionPanelIndex: questionPanelIndex,
      header: header
    }
  };
};

exports.editPageHeader = editPageHeader;

var editPageText = function editPageText(questionPanelIndex, text) {
  return {
    type: _constants.EDIT_PAGE_TEXT_SUCCESS,
    payload: {
      questionPanelIndex: questionPanelIndex,
      text: text
    }
  };
};

exports.editPageText = editPageText;

var editQuestionSetHeader = function editQuestionSetHeader(currentQuestionSetIndex, header) {
  return {
    type: _constants.EDIT_QUESTION_SET_HEADER_SUCCESS,
    payload: {
      currentQuestionSetIndex: currentQuestionSetIndex,
      header: header
    }
  };
};

exports.editQuestionSetHeader = editQuestionSetHeader;

var editQuestionSetText = function editQuestionSetText(currentQuestionSetIndex, text) {
  return {
    type: _constants.EDIT_QUESTION_SET_TEXT_SUCCESS,
    payload: {
      currentQuestionSetIndex: currentQuestionSetIndex,
      text: text
    }
  };
};

exports.editQuestionSetText = editQuestionSetText;

var editQuestionId = function editQuestionId(currentQuestionSetIndex, currentQuestionIndex, text) {
  return {
    type: _constants.EDIT_QUESTION_ID_SUCCESS,
    payload: {
      currentQuestionSetIndex: currentQuestionSetIndex,
      currentQuestionIndex: currentQuestionIndex,
      text: text
    }
  };
};

exports.editQuestionId = editQuestionId;

var editQuestion = function editQuestion(currentQuestionSetIndex, currentQuestionIndex, text) {
  return {
    type: _constants.EDIT_QUESTION_SUCCESS,
    payload: {
      currentQuestionSetIndex: currentQuestionSetIndex,
      currentQuestionIndex: currentQuestionIndex,
      text: text
    }
  };
};

exports.editQuestion = editQuestion;

var editQuestionText = function editQuestionText(currentQuestionSetIndex, currentQuestionIndex, text) {
  return {
    type: _constants.EDIT_QUESTION_TEXT_SUCCESS,
    payload: {
      currentQuestionSetIndex: currentQuestionSetIndex,
      currentQuestionIndex: currentQuestionIndex,
      text: text
    }
  };
};

exports.editQuestionText = editQuestionText;

var editQuestionPostText = function editQuestionPostText(currentQuestionSetIndex, currentQuestionIndex, text) {
  return {
    type: _constants.EDIT_QUESTION_POST_TEXT_SUCCESS,
    payload: {
      currentQuestionSetIndex: currentQuestionSetIndex,
      currentQuestionIndex: currentQuestionIndex,
      text: text
    }
  };
};

exports.editQuestionPostText = editQuestionPostText;

var editNextButtonText = function editNextButtonText(currentQuestionPanelIndex, text) {
  return {
    type: _constants.EDIT_NEXT_BUTTON_TEXT_SUCCESS,
    payload: {
      currentQuestionPanelIndex: currentQuestionPanelIndex,
      text: text
    }
  };
};

exports.editNextButtonText = editNextButtonText;

var editBackButtonText = function editBackButtonText(currentQuestionPanelIndex, text) {
  return {
    type: _constants.EDIT_BACK_BUTTON_TEXT_SUCCESS,
    payload: {
      currentQuestionPanelIndex: currentQuestionPanelIndex,
      text: text
    }
  };
};

exports.editBackButtonText = editBackButtonText;

var disableBackButton = function disableBackButton(currentQuestionPanelIndex, disabled) {
  return {
    type: _constants.DISABLE_BACK_BUTTON_SUCCESS,
    payload: {
      currentQuestionPanelIndex: currentQuestionPanelIndex,
      disabled: disabled
    }
  };
};

exports.disableBackButton = disableBackButton;

var onSelectNextButtonAction = function onSelectNextButtonAction(currentQuestionPanelIndex, text) {
  return {
    type: _constants.EDIT_NEXT_BUTTON_ACTION_SUCCESS,
    payload: {
      currentQuestionPanelIndex: currentQuestionPanelIndex,
      text: text
    }
  };
};

exports.onSelectNextButtonAction = onSelectNextButtonAction;

var onSelectNextButtonTarget = function onSelectNextButtonTarget(currentQuestionPanelIndex, text) {
  return {
    type: _constants.EDIT_NEXT_BUTTON_TARGET_SUCCESS,
    payload: {
      currentQuestionPanelIndex: currentQuestionPanelIndex,
      text: text
    }
  };
};

exports.onSelectNextButtonTarget = onSelectNextButtonTarget;

var changeQuestionType = function changeQuestionType(currentQuestionSetIndex, currentQuestionIndex, questionType) {
  return {
    type: _constants.CHANGE_QUESTION_TYPE_SUCCESS,
    payload: {
      currentQuestionSetIndex: currentQuestionSetIndex,
      currentQuestionIndex: currentQuestionIndex,
      questionType: questionType
    }
  };
};

exports.changeQuestionType = changeQuestionType;

var changeQuestionLabel = function changeQuestionLabel(currentQuestionSetIndex, currentQuestionIndex, labelType) {
  return {
    type: _constants.CHANGE_QUESTION_LABEL_SUCCESS,
    payload: {
      currentQuestionSetIndex: currentQuestionSetIndex,
      currentQuestionIndex: currentQuestionIndex,
      labelType: labelType
    }
  };
};

exports.changeQuestionLabel = changeQuestionLabel;

var changeSuggestedAnswers = function changeSuggestedAnswers(currentQuestionSetIndex, currentQuestionIndex, suggestions) {
  return {
    type: _constants.CHANGE_SUGGESTED_ANSWERS_SUCCESS,
    payload: {
      currentQuestionSetIndex: currentQuestionSetIndex,
      currentQuestionIndex: currentQuestionIndex,
      suggestions: suggestions
    }
  };
};

exports.changeSuggestedAnswers = changeSuggestedAnswers;

var addQuestionOption = function addQuestionOption(key, questionOptionText, questionOptionValue) {
  return {
    type: _constants.ADD_QUESTION_OPTION_SUCCESS,
    payload: {
      key: key,
      questionOptionText: questionOptionText,
      questionOptionValue: questionOptionValue
    }
  };
};

exports.addQuestionOption = addQuestionOption;

var editQuestionOptionText = function editQuestionOptionText(path, text) {
  return {
    type: _constants.EDIT_QUESTION_OPTION_TEXT_SUCCESS,
    payload: {
      path: path,
      text: text
    }
  };
};

exports.editQuestionOptionText = editQuestionOptionText;

var editQuestionOptionValue = function editQuestionOptionValue(path, value) {
  return {
    type: _constants.EDIT_QUESTION_OPTION_VALUE_SUCCESS,
    payload: {
      path: path,
      value: value
    }
  };
};

exports.editQuestionOptionValue = editQuestionOptionValue;

var deleteQuestionOption = function deleteQuestionOption(path) {
  return {
    type: _constants.DELETE_QUESTION_OPTION_SUCCESS,
    payload: {
      path: path
    }
  };
};

exports.deleteQuestionOption = deleteQuestionOption;

var goToPage = function goToPage(panelId) {
  return {
    type: _constants.GOTO_PAGE_SUCCESS,
    payload: {
      panelId: panelId
    }
  };
};

exports.goToPage = goToPage;

var updateForm = function updateForm(schema) {
  return {
    type: _constants.UPDATE_FORM_SUCCESS,
    payload: {
      schema: schema
    }
  };
};

exports.updateForm = updateForm;

var addPage = function addPage(panelId, panelHeader, panelText) {
  return {
    type: _constants.ADD_PAGE_SUCCESS,
    payload: {
      panelId: panelId,
      panelHeader: panelHeader,
      panelText: panelText
    }
  };
};

exports.addPage = addPage;

var deletePage = function deletePage(panelId) {
  return {
    type: _constants.DELETE_PAGE_SUCCESS,
    payload: {
      panelId: panelId
    }
  };
};

exports.deletePage = deletePage;

var addQuestionSet = function addQuestionSet(currentPanelId, questionSetId, questionSetHeader, questionSetText, questionId, question, questionText, questionType) {
  return {
    type: _constants.ADD_QUESTION_SET_SUCCESS,
    payload: {
      currentPanelId: currentPanelId,
      questionSetId: questionSetId,
      questionSetHeader: questionSetHeader,
      questionSetText: questionSetText,
      questionId: questionId,
      question: question,
      questionText: questionText,
      questionType: questionType
    }
  };
};

exports.addQuestionSet = addQuestionSet;

var addQuestion = function addQuestion(currentQuestionSetIndex, questionSetId, questionId, question, questionText, questionType) {
  return {
    type: _constants.ADD_QUESTION_SUCCESS,
    payload: {
      currentQuestionSetIndex: currentQuestionSetIndex,
      questionSetId: questionSetId,
      questionId: questionId,
      question: question,
      questionText: questionText,
      questionType: questionType
    }
  };
};

exports.addQuestion = addQuestion;

var addConditionalQuestion = function addConditionalQuestion(path, questionId, question, questionText, questionType) {
  return {
    type: _constants.ADD_CONDITIONAL_QUESTION_SUCCESS,
    payload: {
      path: path,
      questionId: questionId,
      question: question,
      questionText: questionText,
      questionType: questionType
    }
  };
};

exports.addConditionalQuestion = addConditionalQuestion;

var deleteQuestion = function deleteQuestion(currentQuestionSetIndex, currentQuestionIndex) {
  return {
    type: _constants.DELETE_QUESTION_SUCCESS,
    payload: {
      currentQuestionSetIndex: currentQuestionSetIndex,
      currentQuestionIndex: currentQuestionIndex
    }
  };
};

exports.deleteQuestion = deleteQuestion;

var changeCurrentEditingField = function changeCurrentEditingField(currentEditingField, currentQuestionSetIndex, currentQuestionIndex) {
  return {
    type: _constants.CHANGE_EDITING_FIELD_SUCCESS,
    payload: {
      currentEditingField: currentEditingField,
      currentQuestionSetIndex: currentQuestionSetIndex,
      currentQuestionIndex: currentQuestionIndex
    }
  };
};

exports.changeCurrentEditingField = changeCurrentEditingField;

var updateQuestion = function updateQuestion(currentQuestionSetIndex, currentQuestionIndex, question, questionText) {
  return {
    type: _constants.UPDATE_QUESTION_SUCCESS,
    payload: {
      currentQuestionSetIndex: currentQuestionSetIndex,
      currentQuestionIndex: currentQuestionIndex,
      question: question,
      questionText: questionText
    }
  };
};

exports.updateQuestion = updateQuestion;

var movePage = function movePage(oldIndex, newIndex) {
  return {
    type: _constants.MOVE_PAGE_SUCCESS,
    payload: {
      oldIndex: oldIndex,
      newIndex: newIndex
    }
  };
};

exports.movePage = movePage;

var updateNextQuestionTarget = function updateNextQuestionTarget(currentQuestionPanelIndex, questionId, value, target, optionIndex) {
  return {
    type: _constants.UPDATE_NEXT_QUESTION_TARGET_SUCCESS,
    payload: {
      currentQuestionPanelIndex: currentQuestionPanelIndex,
      questionId: questionId,
      value: value,
      target: target,
      optionIndex: optionIndex
    }
  };
};

exports.updateNextQuestionTarget = updateNextQuestionTarget;

var resetNextQuestionTarget = function resetNextQuestionTarget(currentQuestionPanelIndex, value) {
  return {
    type: _constants.RESET_NEXT_QUESTION_TARGET_SUCCESS,
    payload: {
      currentQuestionPanelIndex: currentQuestionPanelIndex,
      value: value
    }
  };
};

exports.resetNextQuestionTarget = resetNextQuestionTarget;

var saveConditionalQuestion = function saveConditionalQuestion(path, questionId, question, text, postText, type, label, options) {
  return {
    type: _constants.SAVE_CONDITIONAL_QUESTION_SUCCESS,
    payload: {
      path: path,
      questionId: questionId,
      question: question,
      text: text,
      postText: postText,
      type: type,
      label: label,
      options: options
    }
  };
};

exports.saveConditionalQuestion = saveConditionalQuestion;

var deleteConditionalQuestion = function deleteConditionalQuestion(path) {
  return {
    type: _constants.DELETE_CONDITIONAL_QUESTION_SUCCESS,
    payload: {
      path: path
    }
  };
};

exports.deleteConditionalQuestion = deleteConditionalQuestion;

var updateConditionalQuestionType = function updateConditionalQuestionType(path, type) {
  return {
    type: _constants.UPDATE_CONDITIONAL_QUESTION_TYPE_SUCCESS,
    payload: {
      path: path,
      type: type
    }
  };
};

exports.updateConditionalQuestionType = updateConditionalQuestionType;

var updateQuestionAnswers = function updateQuestionAnswers(questionAnswers) {
  return {
    type: _constants.UPDATE_QUESTION_ANSWERS_SUCCESS,
    payload: {
      questionAnswers: questionAnswers
    }
  };
};

exports.updateQuestionAnswers = updateQuestionAnswers;
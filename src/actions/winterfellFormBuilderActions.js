import {
  CREATE_FORM_SUCCESS,
  EDIT_FORM_TITLE_SUCCESS,
  UPDATE_FORM_SUCCESS,
  GOTO_PAGE_SUCCESS,
  ADD_PAGE_SUCCESS,
  DELETE_PAGE_SUCCESS,
  ADD_QUESTION_SUCCESS,
  ADD_CONDITIONAL_QUESTION_SUCCESS,
  SAVE_CONDITIONAL_QUESTION_SUCCESS,
  DELETE_CONDITIONAL_QUESTION_SUCCESS,
  ADD_QUESTION_SET_SUCCESS,
  DELETE_QUESTION_SUCCESS,
  UPDATE_QUESTION_SUCCESS,
  CHANGE_EDITING_FIELD_SUCCESS,
  EDIT_PAGE_ID_SUCCESS,
  EDIT_PAGE_HEADER_SUCCESS,
  EDIT_PAGE_TEXT_SUCCESS,
  EDIT_QUESTION_SET_HEADER_SUCCESS,
  EDIT_QUESTION_SET_TEXT_SUCCESS,
  EDIT_QUESTION_ID_SUCCESS,
  EDIT_QUESTION_SUCCESS,
  EDIT_QUESTION_TEXT_SUCCESS,
  EDIT_QUESTION_POST_TEXT_SUCCESS,
  EDIT_NEXT_BUTTON_TEXT_SUCCESS,
  EDIT_BACK_BUTTON_TEXT_SUCCESS,
  DISABLE_BACK_BUTTON_SUCCESS,
  EDIT_NEXT_BUTTON_ACTION_SUCCESS,
  EDIT_NEXT_BUTTON_TARGET_SUCCESS,
  ADD_QUESTION_OPTION_SUCCESS,
  EDIT_QUESTION_OPTION_TEXT_SUCCESS,
  EDIT_QUESTION_OPTION_VALUE_SUCCESS,
  DELETE_QUESTION_OPTION_SUCCESS,
  UPLOAD_JSON_SUCCESS,
  CHANGE_QUESTION_TYPE_SUCCESS,
  SAVE_FORM_SUCCESS,
  UPDATE_FORM_ERROR,
  CLEAR_FORM_ERROR,
  MOVE_PAGE_SUCCESS,
  UPDATE_NEXT_QUESTION_TARGET_SUCCESS,
  RESET_NEXT_QUESTION_TARGET_SUCCESS,
  UPDATE_QUESTION_ANSWERS_SUCCESS,
  CHANGE_QUESTION_LABEL_SUCCESS,
  CHANGE_SUGGESTED_ANSWERS_SUCCESS,
} from '../common/constants';

export const updateErrorMessage = (message) => {
  return {
    type: UPDATE_FORM_ERROR,
    payload: { message },
  };
};

export const clearErrorMessage = () => {
  return {
    type: CLEAR_FORM_ERROR,
  };
};

export const createForm = (title) => {
  return {
    type: CREATE_FORM_SUCCESS,
    payload: { title },
  };
};

export const uploadJSON = (schema, fileName) => {
  return {
    type: UPLOAD_JSON_SUCCESS,
    payload: { schema, fileName },
  };
};

export const saveJSON = (schema, fileName) => {
  return {
    type: SAVE_FORM_SUCCESS,
    payload: { schema, fileName },
  };
};

export const editFormTitle = (title) => {
  return {
    type: EDIT_FORM_TITLE_SUCCESS,
    payload: { title },
  };
};

export const editPageId = (questionPanelIndex, text) => {
  return {
    type: EDIT_PAGE_ID_SUCCESS,
    payload: { questionPanelIndex, text },
  };
};
export const editPageHeader = (questionPanelIndex, header) => {
  return {
    type: EDIT_PAGE_HEADER_SUCCESS,
    payload: { questionPanelIndex, header },
  };
};

export const editPageText = (questionPanelIndex, text) => {
  return {
    type: EDIT_PAGE_TEXT_SUCCESS,
    payload: { questionPanelIndex, text },
  };
};

export const editQuestionSetHeader = (currentQuestionSetIndex, header) => {
  return {
    type: EDIT_QUESTION_SET_HEADER_SUCCESS,
    payload: { currentQuestionSetIndex, header },
  };
};

export const editQuestionSetText = (currentQuestionSetIndex, text) => {
  return {
    type: EDIT_QUESTION_SET_TEXT_SUCCESS,
    payload: { currentQuestionSetIndex, text },
  };
};

export const editQuestionId = (currentQuestionSetIndex, currentQuestionIndex, text) => {
  return {
    type: EDIT_QUESTION_ID_SUCCESS,
    payload: { currentQuestionSetIndex, currentQuestionIndex, text },
  };
};

export const editQuestion = (currentQuestionSetIndex, currentQuestionIndex, text) => {
  return {
    type: EDIT_QUESTION_SUCCESS,
    payload: { currentQuestionSetIndex, currentQuestionIndex, text },
  };
};

export const editQuestionText = (currentQuestionSetIndex, currentQuestionIndex, text) => {
  return {
    type: EDIT_QUESTION_TEXT_SUCCESS,
    payload: { currentQuestionSetIndex, currentQuestionIndex, text },
  };
};

export const editQuestionPostText = (currentQuestionSetIndex, currentQuestionIndex, text) => {
  return {
    type: EDIT_QUESTION_POST_TEXT_SUCCESS,
    payload: { currentQuestionSetIndex, currentQuestionIndex, text },
  };
};

export const editNextButtonText = (currentQuestionPanelIndex, text) => {
  return {
    type: EDIT_NEXT_BUTTON_TEXT_SUCCESS,
    payload: { currentQuestionPanelIndex, text },
  };
};

export const editBackButtonText = (currentQuestionPanelIndex, text) => {
  return {
    type: EDIT_BACK_BUTTON_TEXT_SUCCESS,
    payload: { currentQuestionPanelIndex, text },
  };
};

export const disableBackButton = (currentQuestionPanelIndex, disabled) => {
  return {
    type: DISABLE_BACK_BUTTON_SUCCESS,
    payload: { currentQuestionPanelIndex, disabled },
  };
};

export const onSelectNextButtonAction = (currentQuestionPanelIndex, text) => {
  return {
    type: EDIT_NEXT_BUTTON_ACTION_SUCCESS,
    payload: { currentQuestionPanelIndex, text },
  };
};

export const onSelectNextButtonTarget = (currentQuestionPanelIndex, text) => {
  return {
    type: EDIT_NEXT_BUTTON_TARGET_SUCCESS,
    payload: { currentQuestionPanelIndex, text },
  };
};

export const changeQuestionType = (currentQuestionSetIndex, currentQuestionIndex, questionType) => {
  return {
    type: CHANGE_QUESTION_TYPE_SUCCESS,
    payload: { currentQuestionSetIndex, currentQuestionIndex, questionType },
  };
};

export const changeQuestionLabel = (currentQuestionSetIndex, currentQuestionIndex, labelType) => {
  return {
    type: CHANGE_QUESTION_LABEL_SUCCESS,
    payload: { currentQuestionSetIndex, currentQuestionIndex, labelType },
  };
};

export const changeSuggestedAnswers = (
  currentQuestionSetIndex,
  currentQuestionIndex,
  suggestions,
) => {
  return {
    type: CHANGE_SUGGESTED_ANSWERS_SUCCESS,
    payload: { currentQuestionSetIndex, currentQuestionIndex, suggestions },
  };
};

export const addQuestionOption = (key, questionOptionText, questionOptionValue) => {
  return {
    type: ADD_QUESTION_OPTION_SUCCESS,
    payload: {
      key,
      questionOptionText,
      questionOptionValue,
    },
  };
};

export const editQuestionOptionText = (path, text) => {
  return {
    type: EDIT_QUESTION_OPTION_TEXT_SUCCESS,
    payload: { path, text },
  };
};

export const editQuestionOptionValue = (path, value) => {
  return {
    type: EDIT_QUESTION_OPTION_VALUE_SUCCESS,
    payload: { path, value },
  };
};

export const deleteQuestionOption = (path) => {
  return {
    type: DELETE_QUESTION_OPTION_SUCCESS,
    payload: { path },
  };
};

export const goToPage = (panelId) => {
  return {
    type: GOTO_PAGE_SUCCESS,
    payload: { panelId },
  };
};

export const updateForm = (schema) => {
  return {
    type: UPDATE_FORM_SUCCESS,
    payload: { schema },
  };
};

export const addPage = (panelId, panelHeader, panelText) => {
  return {
    type: ADD_PAGE_SUCCESS,
    payload: { panelId, panelHeader, panelText },
  };
};

export const deletePage = (panelId) => {
  return {
    type: DELETE_PAGE_SUCCESS,
    payload: { panelId },
  };
};

export const addQuestionSet = (
  currentPanelId,
  questionSetId,
  questionSetHeader,
  questionSetText,
  questionId,
  question,
  questionText,
  questionType,
) => {
  return {
    type: ADD_QUESTION_SET_SUCCESS,
    payload: {
      currentPanelId,
      questionSetId,
      questionSetHeader,
      questionSetText,
      questionId,
      question,
      questionText,
      questionType,
    },
  };
};

export const addQuestion = (
  currentQuestionSetIndex,
  questionSetId,
  questionId,
  question,
  questionText,
  questionType,
) => {
  return {
    type: ADD_QUESTION_SUCCESS,
    payload: {
      currentQuestionSetIndex,
      questionSetId,
      questionId,
      question,
      questionText,
      questionType,
    },
  };
};

export const addConditionalQuestion = (path, questionId, question, questionText, questionType) => {
  return {
    type: ADD_CONDITIONAL_QUESTION_SUCCESS,
    payload: {
      path,
      questionId,
      question,
      questionText,
      questionType,
    },
  };
};

export const deleteQuestion = (currentQuestionSetIndex, currentQuestionIndex) => {
  return {
    type: DELETE_QUESTION_SUCCESS,
    payload: { currentQuestionSetIndex, currentQuestionIndex },
  };
};

export const changeCurrentEditingField = (
  currentEditingField,
  currentQuestionSetIndex,
  currentQuestionIndex,
) => {
  return {
    type: CHANGE_EDITING_FIELD_SUCCESS,
    payload: { currentEditingField, currentQuestionSetIndex, currentQuestionIndex },
  };
};

export const updateQuestion = (
  currentQuestionSetIndex,
  currentQuestionIndex,
  question,
  questionText,
) => {
  return {
    type: UPDATE_QUESTION_SUCCESS,
    payload: { currentQuestionSetIndex, currentQuestionIndex, question, questionText },
  };
};

export const movePage = (oldIndex, newIndex) => {
  return {
    type: MOVE_PAGE_SUCCESS,
    payload: { oldIndex, newIndex },
  };
};

export const updateNextQuestionTarget = (
  currentQuestionPanelIndex,
  questionId,
  value,
  target,
  optionIndex,
) => {
  return {
    type: UPDATE_NEXT_QUESTION_TARGET_SUCCESS,
    payload: { currentQuestionPanelIndex, questionId, value, target, optionIndex },
  };
};

export const resetNextQuestionTarget = (currentQuestionPanelIndex, value) => {
  return {
    type: RESET_NEXT_QUESTION_TARGET_SUCCESS,
    payload: { currentQuestionPanelIndex, value },
  };
};

export const saveConditionalQuestion = (
  path,
  questionId,
  question,
  text,
  postText,
  type,
  label,
  options,
) => {
  return {
    type: SAVE_CONDITIONAL_QUESTION_SUCCESS,
    payload: {
      path,
      questionId,
      question,
      text,
      postText,
      type,
      label,
      options,
    },
  };
};

export const deleteConditionalQuestion = (path) => {
  return {
    type: DELETE_CONDITIONAL_QUESTION_SUCCESS,
    payload: { path },
  };
};

export const updateQuestionAnswers = (questionAnswers) => {
  return {
    type: UPDATE_QUESTION_ANSWERS_SUCCESS,
    payload: { questionAnswers },
  };
};

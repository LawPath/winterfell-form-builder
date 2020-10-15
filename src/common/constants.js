export const RETRIEVE_FORMLIST_REQUEST = 'RETRIEVE_FORMLIST_REQUEST';
export const RETRIEVE_FORMLIST_SUCCESS = 'RETRIEVE_FORMLIST_SUCCESS';
export const RETRIEVE_FORMLIST_ERROR = 'RETRIEVE_FORMLIST_ERROR';

export const CREATE_FORM_REQUEST = 'CREATE_FORM_REQUEST';
export const GOTO_PAGE_SUCCESS = 'GOTO_PAGE_SUCCESS';
export const EDIT_FORM_TITLE_SUCCESS = 'EDIT_FORM_TITLE_SUCCESS';
export const CREATE_FORM_SUCCESS = 'CREATE_FORM_SUCCESS';
export const CREATE_FORM_ERROR = 'CREATE_FORM_ERROR';
export const SAVE_FORM_SUCCESS = 'SAVE_FORM_SUCCESS';
export const UPDATE_FORM_REQUEST = 'UPDATE_FORM_REQUEST';
export const UPDATE_FORM_SUCCESS = 'UPDATE_FORM_SUCCESS';
export const UPDATE_FORM_ERROR = 'UPDATE_FORM_ERROR';
export const DELETE_FORM_REQUEST = 'DELETE_FORM_REQUEST';
export const DELETE_FORM_SUCCESS = 'DELETE_FORM_SUCCESS';
export const DELETE_FORM_ERROR = 'DELETE_FORM_ERROR';

export const ADD_PAGE_REQUEST = 'ADD_PAGE_REQUEST';
export const ADD_PAGE_SUCCESS = 'ADD_PAGE_SUCCESS';
export const ADD_PAGE_ERROR = 'ADD_PAGE_ERROR';
export const UPDATE_PAGE_REQUEST = 'UPDATE_PAGE_REQUEST';
export const UPDATE_PAGE_SUCCESS = 'UPDATE_PAGE_SUCCESS';
export const UPDATE_PAGE_ERROR = 'UPDATE_PAGE_ERROR';
export const DELETE_PAGE_REQUEST = 'DELETE_PAGE_REQUEST';
export const DELETE_PAGE_SUCCESS = 'DELETE_PAGE_SUCCESS';
export const DELETE_PAGE_ERROR = 'DELETE_PAGE_ERROR';
export const ADD_QUESTION_SUCCESS = 'ADD_QUESTION_SUCCESS';
export const ADD_CONDITIONAL_QUESTION_SUCCESS = 'ADD_CONDITIONAL_QUESTION_SUCCESS';
export const SAVE_CONDITIONAL_QUESTION_SUCCESS = 'SAVE_CONDITIONAL_QUESTION_SUCCESS';
export const DELETE_CONDITIONAL_QUESTION_SUCCESS = 'DELETE_CONDITIONAL_QUESTION_SUCCESS';
export const ADD_QUESTION_SET_SUCCESS = 'ADD_QUESTION_SET_SUCCESS';
export const ADD_QUESTION_ERROR = 'ADD_QUESTION_ERROR';
export const UPDATE_QUESTION_REQUEST = 'UPDATE_QUESTION_REQUEST';
export const UPDATE_QUESTION_SUCCESS = 'UPDATE_QUESTION_SUCCESS';
export const UPDATE_QUESTION_ERROR = 'UPDATE_QUESTION_ERROR';
export const DELETE_QUESTION_SUCCESS = 'DELETE_QUESTION_SUCCESS';
export const DELETE_QUESTION_ERROR = 'DELETE_QUESTION_ERROR';

export const UPDATE_PAGE_HEADER_SUCCESS = 'UPDATE_PAGE_HEADER_SUCCESS';
export const UPDATE_PAGE_HEADER_ERROR = 'UPDATE_PAGE_HEADER_ERROR';
export const UPDATE_PAGE_TEXT_SUCCESS = 'UPDATE_PAGE_TEXT_SUCCESS';
export const UPDATE_PAGE_TEXT_ERROR = 'UPDATE_PAGE_TEXT_ERROR';

export const CHANGE_EDITING_FIELD_SUCCESS = 'CHANGE_EDITING_FIELD_SUCCESS';
export const EDIT_PAGE_ID_SUCCESS = 'EDIT_PAGE_ID_SUCCESS';
export const EDIT_PAGE_HEADER_SUCCESS = 'EDIT_PAGE_HEADER_SUCCESS';
export const EDIT_PAGE_TEXT_SUCCESS = 'EDIT_PAGE_TEXT_SUCCESS';
export const EDIT_QUESTION_SET_HEADER_SUCCESS = 'EDIT_QUESTION_SET_HEADER_SUCCESS';
export const EDIT_QUESTION_SET_TEXT_SUCCESS = 'EDIT_QUESTION_SET_TEXT_SUCCESS';
export const EDIT_NEXT_BUTTON_TEXT_SUCCESS = 'EDIT_NEXT_BUTTON_TEXT_SUCCESS';
export const EDIT_BACK_BUTTON_TEXT_SUCCESS = 'EDIT_BACK_BUTTON_TEXT_SUCCESS';
export const EDIT_NEXT_BUTTON_ACTION_SUCCESS = 'EDIT_NEXT_BUTTON_ACTION_SUCCESS';
export const EDIT_BACK_BUTTON_ACTION_SUCCESS = 'EDIT_BACK_BUTTON_ACTION_SUCCESS';
export const EDIT_NEXT_BUTTON_TARGET_SUCCESS = 'EDIT_NEXT_BUTTON_TARGET_SUCCESS';

export const EDIT_QUESTION_ID_SUCCESS = 'EDIT_QUESTION_ID_SUCCESS';
export const EDIT_QUESTION_SUCCESS = 'EDIT_QUESTION_SUCCESS';
export const EDIT_QUESTION_TEXT_SUCCESS = 'EDIT_QUESTION_TEXT_SUCCESS';
export const EDIT_QUESTION_POST_TEXT_SUCCESS = 'EDIT_QUESTION_POST_TEXT_SUCCESS';

export const CHANGE_QUESTION_TYPE_SUCCESS = 'CHANGE_QUESTION_TYPE_SUCCESS';
export const ADD_QUESTION_OPTION_SUCCESS = 'ADD_QUESTION_OPTION_SUCCESS';
export const EDIT_QUESTION_OPTION_TEXT_SUCCESS = 'EDIT_QUESTION_OPTION_TEXT_SUCCESS';
export const EDIT_QUESTION_OPTION_VALUE_SUCCESS = 'EDIT_QUESTION_OPTION_VALUE_SUCCESS';
export const DELETE_QUESTION_OPTION_SUCCESS = 'DELETE_QUESTION_OPTION_SUCCESS';

export const CHANGE_QUESTION_LABEL_SUCCESS = 'CHANGE_QUESTION_LABEL_SUCCESS';

export const CHANGE_SUGGESTED_ANSWERS_SUCCESS = 'CHANGE_SUGGESTED_ANSWERS_SUCCESS';

export const UPLOAD_JSON_SUCCESS = 'UPLOAD_JSON_SUCCESS';
export const CLEAR_FORM_ERROR = 'CLEAR_FORM_ERROR';
export const MOVE_PAGE_SUCCESS = 'MOVE_PAGE_SUCCESS';
export const DISABLE_BACK_BUTTON_SUCCESS = 'DISABLE_BACK_BUTTON_SUCCESS';
export const UPDATE_NEXT_QUESTION_TARGET_SUCCESS = 'UPDATE_NEXT_QUESTION_TARGET_SUCCESS';
export const RESET_NEXT_QUESTION_TARGET_SUCCESS = 'RESET_NEXT_QUESTION_TARGET_SUCCESS';
export const UPDATE_QUESTION_ANSWERS_SUCCESS = 'UPDATE_QUESTION_ANSWERS_SUCCESS';

export const POST_QUESTION_SUGGESTION = '';

export const BOOTSTRAP_CLASSES = {
  input: 'form-control',
  select: 'form-control',
  question: 'form-group',
  radioListItem: 'radio',
  radioList: 'clean-list',
  checkboxInput: 'checkbox',
  checkboxListItem: 'checkbox',
  checkboxList: 'clean-list',
  controlButton: 'btn btn-dark pull-right',
  backButton: 'btn btn-default pull-left',
  errorMessage: 'alert alert-danger',
  questionPostText: 'push-top',
  buttonBar: 'button-bar',
};

export const INPUT_TYPE_OPTIONS = [
  {
    text: 'text',
    value: 'textInput',
  },
  {
    text: 'textarea',
    value: 'textAreaInput',
  },
  {
    text: 'select',
    value: 'selectInput',
  },
  {
    text: 'checkbox options',
    value: 'checkboxOptionsInput',
  },
  {
    text: 'radio button',
    value: 'radioOptionsInput',
  },
  {
    text: 'address',
    value: 'addressInput',
  },
  {
    text: 'date',
    value: 'dateInput',
  },
  {
    text: 'checkbox',
    value: 'checkboxInput',
  },
];

export const QUESTION_LABEL_OPTIONS = [
  {
    text: 'Full name',
    value: 'full_name',
  },
  {
    text: 'Phone number',
    value: 'phone_number',
  },
  {
    text: 'Email',
    value: 'email_address',
  },
  {
    text: 'Business name',
    value: 'business_name',
  },
  {
    text: 'ABN',
    value: 'abn',
  },
  {
    text: 'ACN',
    value: 'acn',
  },
  {
    text: 'Address',
    value: 'address',
  },
  {
    text: 'Address state',
    value: 'address_state',
  },
  {
    text: 'Website address',
    value: 'website_address',
  },
];

export const DATE_FORMAT = 'dd/MM/yyyy';

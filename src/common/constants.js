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
export const UPDATE_CONDITIONAL_QUESTION_TYPE_SUCCESS = 'UPDATE_CONDITIONAL_QUESTION_TYPE_SUCCESS';
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
  backButton: 'btn btn-hollow btn-back',
  errorMessage: 'alert alert-danger',
  questionPostText: 'push-top',
  buttonBar: 'button-bar',
  questionPanels: 'winterfell-question-panels',
  questionPanel: 'winterfell-question-panel',
  postBodyHeader: 'post-body-header',
  buttonBar: 'winterfell-button-bar',
  postBodyHeaderText: 'post-body-header-text',
  postBodyHeaderIcon: 'post-body-header-icon',
  progressBarIncomplete: 'winterfell-progress-incomplete',
  progressBarComplete: 'winterfell-progress-complete',
  progressBarTitle: 'winterfell-progress-title',
  progressBarLegend: 'winterfell-progress-legend',
  progressBar: 'winterfell-progressbar',
  postBodyHeader: 'post-body-header',
  postBodyHeaderText: 'post-body-header-text',
  postBodyHeaderIcon: 'post-body-header-icon',
};
export const PROGRESS = {
  showBar: true,
  showPercent: true,
  preText: '',
  postText: '',
  position: 'top',
  legendPosition: 'inline',
  variation: 'classic',
};
export const PANEL_CONSTANTS = {
  suggestionHintText: 'Click on suggested answers to apply',
  postBodyHeaderText: 'Tips and commons answers',
  titleIcon: 'https://assets.lawpath.com/images/svg/open-book.svg',
  titleIcon: 'https://assets.lawpath.com/images/svg/open-book.svg',
  tooltipContent:
    '<span>This field has been <br/>pre-filled. Click <a>here</a> to edit <br/> your pre-filled information</span>',
};

export const DEFAULT_SUGGESTIONS = [
  {
    id: 1,
    content: `Users on our Legal Advice Subscription ($69/month) can book unlimited 30 minute calls with a lawyer to assist with and review up to four pages of a document - <a herf="/consultations" target="_blank" >Learn more</a>`,
  },
  {
    id: 2,
    content: `Keep your address private and have Lawpath manage and store all your mail - learn more about our <a href="/solutions/business-solutions/virtual-office" target="_blank" >Virtual Office</a>.`,
  },
  {
    id: 3,
    content: `Did you know you can eSign unlimited documents for free with Lawpath? You can eSign completed documents or uploaded documents from <a href="/documents/my-documents" target="_blank" >My document library</a>.`,
  },
  {
    id: 4,
    content: `The user feed on your dashboard updates with recommended next steps after you complete documents and perform actions.`,
  },
  {
    id: 5,
    content: `Keep all your legal documents together - Upload and securely store documents on the Lawpath platform for free in your <a href="/documents?filter=popular" target="_blank" >document library</a>.`,
  },
  {
    id: 6,
    content: `Create, edit and customise unlimited legal documents with a subscription to any of our annual legal plans - <a href-"/about/pricing" target="_blank" >Learn more</a>`,
  },
];

export const SUGGESION_PANEL_DEFAULT = {
  classes: {
    panel: 'winterfell-suggestion-panel',
    body: 'suggestion-body',
  },
  titleTextClass: 'suggestion-tittle',
  titleText: '',
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

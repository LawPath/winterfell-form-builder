"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _winterfellFormBuilderActions = require("../actions/winterfellFormBuilderActions");

var _Pagination = _interopRequireDefault(require("./Pagination"));

var _Previewer = _interopRequireDefault(require("./Previewer"));

var _TreeView = _interopRequireDefault(require("./TreeView"));

var _FormMenu = require("./FormMenu");

var _FieldEditor = _interopRequireDefault(require("./FieldEditor"));

var _documentEditorV = require("document-editor-v3");

require("document-editor-v3/dist/index.scss");

var _QuestionsPanel = _interopRequireDefault(require("./layouts/QuestionsPanel"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TabPanel = function TabPanel(_ref) {
  var children = _ref.children,
      textEditorOnPreview = _ref.textEditorOnPreview,
      textEditorOnSave = _ref.textEditorOnSave,
      documentSchema = _ref.documentSchema,
      documentId = _ref.documentId,
      activatedTab = _ref.activatedTab,
      documentUpdatedAt = _ref.documentUpdatedAt,
      changeActivatedTab = _ref.changeActivatedTab;

  var _useState = (0, _react.useState)(activatedTab ? activatedTab : 'schemaEditor'),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      schemaToggle = _useState2[0],
      setSchemaToggle = _useState2[1];

  var toggleTable = function toggleTable(evt, state) {
    evt.preventDefault();
    setSchemaToggle(state);
    changeActivatedTab(state);
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "winterfell-form-builder-tab-bar"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/_react["default"].createElement("h1", null, "Winterfell Form Builder"))), /*#__PURE__*/_react["default"].createElement("ul", {
    "class": "nav nav-tabs",
    id: "myTab",
    role: "tablist"
  }, /*#__PURE__*/_react["default"].createElement("li", {
    "class": "nav-item",
    role: "presentation",
    onClick: function onClick(evt) {
      return toggleTable(evt, 'schemaEditor');
    }
  }, /*#__PURE__*/_react["default"].createElement("a", {
    "class": "nav-link ".concat(activatedTab === 'schemaEditor' ? 'active' : ''),
    id: "questionPanel-tab",
    "data-toggle": "tab",
    href: "#questionPanel",
    role: "tab",
    "aria-controls": "questionPanel",
    "aria-selected": "false"
  }, "Questions panel")), /*#__PURE__*/_react["default"].createElement("li", {
    "class": "nav-item",
    role: "presentation",
    onClick: function onClick(evt) {
      return toggleTable(evt, 'docEditor');
    }
  }, /*#__PURE__*/_react["default"].createElement("a", {
    "class": "nav-link ".concat(activatedTab === 'docEditor' ? 'active' : ''),
    id: "docEditor-tab",
    "data-toggle": "tab",
    href: "#docEditor",
    role: "tab",
    "aria-controls": "docEditor",
    "aria-selected": "true"
  }, "Editor")))), /*#__PURE__*/_react["default"].createElement("div", {
    "class": "winterfell-form-builder-tab-content",
    id: "myTabContent"
  }, schemaToggle === 'schemaEditor' ? /*#__PURE__*/_react["default"].createElement("div", {
    "class": "tab-pane fade show active",
    id: "questionPanel",
    role: "tabpanel",
    "aria-labelledby": "contact-tab"
  }, children) : null, schemaToggle === 'docEditor' ? /*#__PURE__*/_react["default"].createElement("div", {
    "class": "tab-pane fade show active",
    id: "docEditor",
    role: "tabpanel",
    "aria-labelledby": "docEditor-tab"
  }, /*#__PURE__*/_react["default"].createElement(_documentEditorV.TextEditor, {
    onPreview: textEditorOnPreview,
    onSave: textEditorOnSave,
    documentSchema: documentSchema,
    documentId: documentId,
    documentUpdatedAt: documentUpdatedAt
  })) : null));
};

var WinterfellFormBuilder = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(WinterfellFormBuilder, _Component);

  var _super = _createSuper(WinterfellFormBuilder);

  function WinterfellFormBuilder() {
    var _this;

    (0, _classCallCheck2["default"])(this, WinterfellFormBuilder);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      schema: {},
      schemaToggle: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onFormUpdate", function (e) {
      e.preventDefault();

      _this.setState({
        schemaToggle: JSON.parse(e.target.value)
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(WinterfellFormBuilder, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          schema = _this$props.schema,
          currentPanelId = _this$props.currentPanelId,
          formPanels = _this$props.formPanels,
          currentEditingField = _this$props.currentEditingField,
          currentQuestionPanelIndex = _this$props.currentQuestionPanelIndex,
          currentQuestionSetIndex = _this$props.currentQuestionSetIndex,
          currentQuestionIndex = _this$props.currentQuestionIndex,
          errorMessage = _this$props.errorMessage,
          title = _this$props.title,
          documentSchema = _this$props.documentSchema,
          documentId = _this$props.documentId,
          documentUpdatedAt = _this$props.documentUpdatedAt,
          activatedTab = _this$props.activatedTab;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "container-fluid winterfell-form-builder"
      }, /*#__PURE__*/_react["default"].createElement(TabPanel, {
        textEditorOnPreview: this.props.textEditorOnPreview,
        textEditorOnSave: this.props.textEditorOnSave,
        documentSchema: documentSchema,
        documentId: documentId,
        changeActivatedTab: this.props.changeActivatedTab,
        documentUpdatedAt: documentUpdatedAt,
        activatedTab: activatedTab
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal fade ".concat(errorMessage !== '' ? 'show' : ''),
        id: "errorMessage",
        tabIndex: "-1",
        key: "errorMessageModal"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-dialog bg-white"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-content"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-header"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-title"
      }, "Error")), /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-body"
      }, errorMessage), /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-footer"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        className: "btn btn-primary",
        onClick: this.props.clearErrorMessage
      }, "Ok")))))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "row py-3"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "btn-group"
      }, /*#__PURE__*/_react["default"].createElement(_FormMenu.CreateFormButton, null), /*#__PURE__*/_react["default"].createElement(_FormMenu.UploadJSONButton, null), /*#__PURE__*/_react["default"].createElement(_FormMenu.SaveFormButton, null), /*#__PURE__*/_react["default"].createElement(_FormMenu.EditSchemaButton, null), /*#__PURE__*/_react["default"].createElement(_FormMenu.EditFormTitleButton, null)))), !this.props.schema || this.props.schema.size === 0 ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "alert alert-info",
        role: "alert"
      }, "No form loaded. Click on ", /*#__PURE__*/_react["default"].createElement("b", null, "Create"), " to create a new form, or ", /*#__PURE__*/_react["default"].createElement("b", null, "Import"), " to load an existing form (.json).") : /*#__PURE__*/_react["default"].createElement("div", {
        className: "row winterfell-form-builder-editor"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-4",
        id: "questionEditor"
      }, /*#__PURE__*/_react["default"].createElement("h3", null, "Page Editor"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "btn-group"
      }, /*#__PURE__*/_react["default"].createElement(_FormMenu.AddPageButton, null), /*#__PURE__*/_react["default"].createElement(_FormMenu.PageSortButton, {
        onClick: function onClick() {
          return _this2.props.changeCurrentEditingField('pageSort');
        }
      })), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_TreeView["default"], {
        id: "tree-view"
      }), /*#__PURE__*/_react["default"].createElement("br", null), formPanels && /*#__PURE__*/_react["default"].createElement(_Pagination["default"], {
        formPanels: formPanels.map(function (panel) {
          return panel.get('panelId');
        }),
        currentPanelId: currentPanelId,
        onClick: this.props.goToPage
      }), currentQuestionPanelIndex >= 0 && /*#__PURE__*/_react["default"].createElement(_FieldEditor["default"], {
        currentQuestionPanelIndex: currentQuestionPanelIndex,
        currentEditingField: currentEditingField,
        currentQuestionSetIndex: currentQuestionSetIndex,
        currentQuestionIndex: currentQuestionIndex
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-8 winterfell-form-builder-page-editor"
      }, /*#__PURE__*/_react["default"].createElement(_QuestionsPanel["default"], {
        title: title,
        schema: this.props.schema,
        currentQuestionPanelIndex: currentQuestionPanelIndex
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "row winterfell-form-builder-previewer"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-12 mb-5 py-3"
      }, /*#__PURE__*/_react["default"].createElement("h3", null, "Winterfell Form Preview:"), schema && /*#__PURE__*/_react["default"].createElement(_Previewer["default"], {
        currentPanelId: currentPanelId,
        schema: schema.toJS()
      }), currentPanelId === 'Select Page' && /*#__PURE__*/_react["default"].createElement("div", {
        className: "alert alert-info",
        role: "alert"
      }, "No page selected to preview. Select a page from the dropdown above.")))));
    }
  }]);
  return WinterfellFormBuilder;
}(_react.Component);

WinterfellFormBuilder.propTypes = {
  schema: _propTypes["default"].object,
  currentPanelId: _propTypes["default"].string,
  currentQuestionPanelIndex: _propTypes["default"].number,
  currentQuestionSetIndex: _propTypes["default"].number,
  currentQuestionIndex: _propTypes["default"].number,
  formPanels: _propTypes["default"].object,
  goToPage: _propTypes["default"].func.isRequired,
  currentEditingField: _propTypes["default"].string,
  changeCurrentEditingField: _propTypes["default"].func.isRequired,
  clearErrorMessage: _propTypes["default"].func.isRequired,
  errorMessage: _propTypes["default"].string,
  title: _propTypes["default"].string,
  textEditorOnPreview: _propTypes["default"].func.isRequired,
  textEditorOnSave: _propTypes["default"].func.isRequired,
  documentSchema: _propTypes["default"].object,
  documentId: _propTypes["default"].number.isRequired,
  documentUpdatedAt: _propTypes["default"].number.isRequired,
  activatedTab: _propTypes["default"].string.isRequired
};
WinterfellFormBuilder.defaultProps = {
  title: '',
  schema: null,
  currentPanelId: null,
  inputSchema: {},
  formPanels: null,
  questionSets: null,
  currentQuestionPanelIndex: 0,
  // first page by default
  currentQuestionSetIndex: null,
  currentQuestionIndex: null,
  currentEditingField: 'page',
  errorMessage: '',
  documentSchema: null,
  documentId: 0,
  documentUpdatedAt: 0
};

function mapStateToProps(state, ownProps) {
  return {
    title: state.getIn(['form', 'title']),
    schema: state.getIn(['form', 'schema']),
    currentPanelId: state.getIn(['form', 'currentPanelId']),
    formPanels: state.getIn(['form', 'schema', 'formPanels']),
    questionSets: state.getIn(['form', 'schema', 'questionSets']),
    currentEditingField: state.getIn(['form', 'currentEditingField']),
    currentQuestionPanelIndex: state.getIn(['form', 'currentQuestionPanelIndex']),
    currentQuestionSetIndex: state.getIn(['form', 'currentQuestionSetIndex']),
    currentQuestionIndex: state.getIn(['form', 'currentQuestionIndex']),
    errorMessage: state.getIn(['error', 'message']),
    activatedTab: state.getIn(['formBuilderTabs', 'activatedTab'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  goToPage: _winterfellFormBuilderActions.goToPage,
  changeCurrentEditingField: _winterfellFormBuilderActions.changeCurrentEditingField,
  clearErrorMessage: _winterfellFormBuilderActions.clearErrorMessage,
  changeActivatedTab: _winterfellFormBuilderActions.changeActivatedTab
})(WinterfellFormBuilder);

exports["default"] = _default;
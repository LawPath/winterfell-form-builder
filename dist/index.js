"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "WinterfellFormBuilderReducer", {
  enumerable: true,
  get: function get() {
    return _winterfellFormBuilderReducer["default"];
  }
});
Object.defineProperty(exports, "WinterfellFormBuilderTabReducer", {
  enumerable: true,
  get: function get() {
    return _winterfellFormBuilderTabReducer["default"];
  }
});
Object.defineProperty(exports, "addQuestion", {
  enumerable: true,
  get: function get() {
    return _winterfellFormBuilderActions.addQuestion;
  }
});
Object.defineProperty(exports, "addQuestionSet", {
  enumerable: true,
  get: function get() {
    return _winterfellFormBuilderActions.addQuestionSet;
  }
});
Object.defineProperty(exports, "goToPage", {
  enumerable: true,
  get: function get() {
    return _winterfellFormBuilderActions.goToPage;
  }
});
Object.defineProperty(exports, "onSelectNextButtonAction", {
  enumerable: true,
  get: function get() {
    return _winterfellFormBuilderActions.onSelectNextButtonAction;
  }
});
Object.defineProperty(exports, "onSelectNextButtonTarget", {
  enumerable: true,
  get: function get() {
    return _winterfellFormBuilderActions.onSelectNextButtonTarget;
  }
});
Object.defineProperty(exports, "addPage", {
  enumerable: true,
  get: function get() {
    return _winterfellFormBuilderActions.addPage;
  }
});
Object.defineProperty(exports, "changeCurrentEditingField", {
  enumerable: true,
  get: function get() {
    return _winterfellFormBuilderActions.changeCurrentEditingField;
  }
});
Object.defineProperty(exports, "deletePage", {
  enumerable: true,
  get: function get() {
    return _winterfellFormBuilderActions.deletePage;
  }
});
Object.defineProperty(exports, "createForm", {
  enumerable: true,
  get: function get() {
    return _winterfellFormBuilderActions.createForm;
  }
});
Object.defineProperty(exports, "editNextButtonText", {
  enumerable: true,
  get: function get() {
    return _winterfellFormBuilderActions.editNextButtonText;
  }
});
exports["default"] = void 0;

var _WinterfellFormBuilder = _interopRequireDefault(require("./components/WinterfellFormBuilder"));

var _winterfellFormBuilderReducer = _interopRequireDefault(require("./reducers/winterfellFormBuilderReducer"));

var _winterfellFormBuilderTabReducer = _interopRequireDefault(require("./reducers/winterfellFormBuilderTabReducer"));

var _winterfellFormBuilderActions = require("./actions/winterfellFormBuilderActions");

require("document-editor-v3/dist/index.scss");

var _default = _WinterfellFormBuilder["default"];
exports["default"] = _default;
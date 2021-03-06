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
exports["default"] = void 0;

var _WinterfellFormBuilder = _interopRequireDefault(require("./components/WinterfellFormBuilder"));

var _winterfellFormBuilderReducer = _interopRequireDefault(require("./reducers/winterfellFormBuilderReducer"));

// import {
//   addQuestion,
//   addQuestionSet,
//   goToPage,
//   onSelectNextButtonAction,
//   onSelectNextButtonTarget,
//   addPage,
//   changeCurrentEditingField,
//   deletePage,
//   createForm,
//   editNextButtonText,
// } from './actions/winterfellFormBuilderActions';
// export {
//   WinterfellFormBuilderReducer,
//   addQuestion,
//   addQuestionSet,
//   goToPage,
//   onSelectNextButtonAction,
//   onSelectNextButtonTarget,
//   addPage,
//   changeCurrentEditingField,
//   deletePage,
//   createForm,
//   editNextButtonText,
// };
var _default = _WinterfellFormBuilder["default"];
exports["default"] = _default;
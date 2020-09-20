"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _immutable = require("immutable");

var _constants = require("../common/constants");

var initialState = (0, _immutable.fromJS)({
  activatedTab: null
});

function winterfellFormBuilderTabReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.CHANGE_ACTIVATED_TAB:
      return state.set('activatedTab', action.payload.activateTab);

    default:
      {
        return state;
      }
  }
}

var _default = winterfellFormBuilderTabReducer;
exports["default"] = _default;
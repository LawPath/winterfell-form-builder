"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var SelectInput = function SelectInput(_ref) {
  var displayValue = _ref.displayValue,
      options = _ref.options,
      name = _ref.name,
      classes = _ref.classes,
      required = _ref.required,
      onSelect = _ref.onSelect;

  var _useState = (0, _react.useState)(displayValue),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  (0, _react.useEffect)(function () {
    setValue(displayValue);
  }, [displayValue]);

  var handleChange = function handleChange(e) {
    setValue(e.target.value);
    onSelect(e.target.value, e);
  };

  return /*#__PURE__*/_react["default"].createElement("select", {
    name: name,
    className: classes.select,
    value: value,
    required: required ? 'required' : undefined,
    onChange: handleChange,
    onSelect: onSelect,
    autoComplete: name
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: ""
  }, "\xA0"), options && options.map(function (opt, index) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: index,
      value: opt.value
    }, opt.text);
  }));
};

SelectInput.propTypes = {
  displayValue: _propTypes["default"].string,
  options: _propTypes["default"].array.isRequired,
  classes: _propTypes["default"].object,
  name: _propTypes["default"].string,
  onSelect: _propTypes["default"].func,
  required: _propTypes["default"].bool
};
SelectInput.defaultProps = {
  classes: {
    select: 'form-control'
  },
  id: '',
  name: '',
  value: '',
  options: [],
  onChange: function onChange() {},
  onSelect: function onSelect() {},
  required: false,
  displayValue: ''
};
var _default = SelectInput;
exports["default"] = _default;
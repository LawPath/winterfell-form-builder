"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _winterfellFormBuilderActions = require("../../actions/winterfellFormBuilderActions");

var _FieldGroup = _interopRequireDefault(require("../InputTypes/FieldGroup"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var AddPageButton = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(AddPageButton, _Component);

  var _super = _createSuper(AddPageButton);

  function AddPageButton(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, AddPageButton);
    _this = _super.call(this, props);
    _this.state = {
      panelId: '',
      panelHeader: '',
      panelText: ''
    };
    _this.onChange = _this.onChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onFormUpdate = _this.onFormUpdate.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(AddPageButton, [{
    key: "onChange",
    value: function onChange(event) {
      event.preventDefault();
      this.setState((0, _defineProperty2["default"])({}, event.target.name, event.target.value));
    }
  }, {
    key: "onFormUpdate",
    value: function onFormUpdate(e) {
      e.preventDefault();
      this.props.addPage(this.state.panelId, this.state.panelHeader, this.state.panelText);
    }
  }, {
    key: "render",
    value: function render() {
      return [/*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        className: "btn btn-block btn-secondary",
        "data-toggle": "modal",
        "data-target": "#addPage",
        key: "addPage",
        title: "Add page"
      }, "Add Page"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal fade",
        id: "addPage",
        tabIndex: "-1",
        key: "addPageModal"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-dialog bg-white"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-content"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-header"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-title"
      }, "Add a new page to the form")), /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-body"
      }, /*#__PURE__*/_react["default"].createElement("form", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement(_FieldGroup["default"], {
        id: "panelId",
        name: "panelId",
        label: "Page ID",
        onChange: this.onChange,
        placeholder: "(optional)",
        value: this.state.panelId
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement(_FieldGroup["default"], {
        id: "panelHeader",
        name: "panelHeader",
        label: "Page Title",
        onChange: this.onChange,
        placeholder: "",
        value: this.state.panelHeader
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement(_FieldGroup["default"], {
        id: "panelText",
        name: "panelText",
        label: "Enter Page Description",
        onChange: this.onChange,
        placeholder: "",
        value: this.state.panelText
      })))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-footer"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        className: "btn btn-danger",
        "data-dismiss": "modal"
      }, "Cancel"), /*#__PURE__*/_react["default"].createElement("button", {
        className: "btn btn-dark",
        onClick: this.onFormUpdate,
        "data-dismiss": "modal"
      }, "Save changes")))))];
    }
  }]);
  return AddPageButton;
}(_react.Component);

AddPageButton.propTypes = {
  addPage: _propTypes["default"].func.isRequired
};

function mapStateToProps(state) {
  return {
    title: state.getIn(['form', 'currentForm', 'title'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  addPage: _winterfellFormBuilderActions.addPage
})(AddPageButton);

exports["default"] = _default;
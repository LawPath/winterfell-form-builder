'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

var _winterfellFormBuilderActions = require('../../actions/winterfellFormBuilderActions');

var _FieldGroup = require('../InputTypes/FieldGroup');

var _FieldGroup2 = _interopRequireDefault(_FieldGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreateFormButton = function (_Component) {
  (0, _inherits3.default)(CreateFormButton, _Component);

  function CreateFormButton(props) {
    (0, _classCallCheck3.default)(this, CreateFormButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CreateFormButton.__proto__ || (0, _getPrototypeOf2.default)(CreateFormButton)).call(this, props));

    _this.state = {
      showModal: false,
      formTitle: ''
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onFormUpdate = _this.onFormUpdate.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(CreateFormButton, [{
    key: 'onChange',
    value: function onChange(event) {
      event.preventDefault();
      this.setState((0, _defineProperty3.default)({}, event.target.name, event.target.value));
    }
  }, {
    key: 'onClose',
    value: function onClose(e) {
      e.preventDefault();
      this.setState({ showModal: true });
    }
  }, {
    key: 'onFormUpdate',
    value: function onFormUpdate(e) {
      e.preventDefault();
      this.props.createForm(this.state.formTitle);
      this.setState({ showModal: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactBootstrap.Button,
        {
          className: 'btn btn-block btn-primary',
          onClick: function onClick() {
            _this2.setState({ showModal: true });
          }
        },
        'new',
        _react2.default.createElement(
          _reactBootstrap.Modal,
          { show: this.state.showModal },
          _react2.default.createElement(
            _reactBootstrap.Modal.Header,
            null,
            _react2.default.createElement(
              _reactBootstrap.Modal.Title,
              null,
              'Create a new form'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Body,
            null,
            _react2.default.createElement(
              'form',
              null,
              _react2.default.createElement(
                _reactBootstrap.FormGroup,
                null,
                _react2.default.createElement(_FieldGroup2.default, {
                  id: 'formTitle',
                  name: 'formTitle',
                  label: 'Enter title of the form',
                  onChange: this.onChange,
                  placeholder: '',
                  value: this.state.formTitle
                })
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Footer,
            null,
            _react2.default.createElement(
              _reactBootstrap.Button,
              {
                bsStyle: 'danger',
                onClick: function onClick() {
                  _this2.setState({ showModal: false });
                }
              },
              'Cancel'
            ),
            _react2.default.createElement(
              _reactBootstrap.Button,
              {
                bsStyle: 'primary',
                onClick: this.onFormUpdate
              },
              'Save changes'
            )
          )
        )
      );
    }
  }]);
  return CreateFormButton;
}(_react.Component);

CreateFormButton.propTypes = {
  createForm: _propTypes2.default.func.isRequired
};


function mapStateToProps(state) {
  return {
    title: state.getIn(['form', 'title'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, { createForm: _winterfellFormBuilderActions.createForm })(CreateFormButton);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CreateFormButton, 'CreateFormButton', 'src/components/FormMenu/CreateFormButton.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'src/components/FormMenu/CreateFormButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/FormMenu/CreateFormButton.js');
}();

;
import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { uploadJSON } from '../../actions/winterfellFormBuilderActions';

class UploadJSONButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      schema: '',
      fileName: '',
    };

    this.cancelBtnRef = createRef();
    this.onChange = this.onChange.bind(this);
    this.onJSONUpload = this.onJSONUpload.bind(this);
  }

  onChange(event) {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const contents = e.target.result;
      this.setState({
        schema: JSON.parse(contents),
        fileName: file.name,
      });
    };
    reader.readAsText(file);
  }

  onJSONUpload(e) {
    e.preventDefault();
    this.props.uploadJSON(this.state.schema, this.state.fileName);
    this.cancelBtnRef.current.click();
    this.setState({ showModal: false });
  }

  render() {
    return [
      <button
        className="btn btn-block btn-dark"
        data-toggle="modal"
        data-target="#uploadJSON"
        key="uploadJSON"
        title="Upload Winterfell form"
      >
        <i className="material-icons">archive</i>
        <span className="icon-menu">Import</span>
      </button>,
      <div className="modal fade" id="uploadJSON" tabIndex="-1" key="uploadJSONModal">
        <div className="modal-dialog bg-white">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title">Upload a form</div>
            </div>
            <div className="modal-body">
              Upload an existing Winterfell form.
              <form>
                <label htmlFor="jsonUpload" />
                <input
                  name="schema"
                  id="jsonUpload"
                  type="file"
                  onChange={(e) => this.onChange(e)}
                />
              </form>
            </div>
            <div className="modal-footer">
              <button ref={this.cancelBtnRef} className="btn btn-danger" data-dismiss="modal">
                Cancel
              </button>
              <button className="btn btn-dark" onClick={this.onJSONUpload}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>,
    ];
  }
}

UploadJSONButton.propTypes = {
  uploadJSON: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    title: state.getIn(['form', 'currentForm', 'title']),
  };
}
export default connect(mapStateToProps, { uploadJSON })(UploadJSONButton);

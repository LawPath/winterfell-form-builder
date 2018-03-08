import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Button, Modal, FormGroup } from 'react-bootstrap';
import { editForm } from '../../actions/winterfellFormBuilderActions';
import FieldGroup from '../UI/FieldGroup';


class FormTitleEditor extends Component {
  static propTypes = {
    editForm: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      formTitle: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onFormUpdate = this.onFormUpdate.bind(this);
  }

  onChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  onClose(e) {
    e.preventDefault();
    this.setState({ showModal: true });
  }

  onFormUpdate(e) {
    e.preventDefault();
    this.props.editForm(this.state.formTitle);
    this.setState({ showModal: false });
  }

  render() {
    const { title } = this.props;

    return (
      <Row>
        <div className="static-modal">
          <Modal show={this.state.showModal}>
            <Modal.Header>
              <Modal.Title>Edit form title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <FormGroup>
                  <FieldGroup
                    id="formTitle"
                    name="formTitle"
                    label="Enter title of the form"
                    onChange={this.onChange}
                    placeholder={title}
                    value={this.state.formTitle}
                  />
                </FormGroup>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                bsStyle="danger"
                onClick={() => { this.setState({ showModal: false }); }}
              >Cancel</Button>
              <Button
                bsStyle="primary"
                onClick={this.onFormUpdate}
              >Save changes</Button>
            </Modal.Footer>
          </Modal>
        </div>
        <Col xs={12}>
          <Button
            className="btn btn-block btn-info"
            onClick={() => {
              this.setState({ showModal: true });
            }}
          >edit form title
          </Button>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    title: state.getIn(['form', 'title']),
  };
}
export default connect(mapStateToProps, { editForm })(FormTitleEditor);

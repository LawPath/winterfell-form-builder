import React, { Component, createRef, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { goToPage, changeCurrentEditingField, clearErrorMessage } from "../actions/winterfellFormBuilderActions";
import Pagination from "./Pagination";
import Previewer from "./Previewer";
import TreeView from "./TreeView";
import { CreateFormButton, EditFormTitleButton, AddPageButton, SaveFormButton, PageSortButton, UploadJSONButton, EditSchemaButton } from "./FormMenu";
import FieldSelector from "./FieldSelector";
import FieldEditor from "./FieldEditor";
import { TextEditor, SchemaViewer, HTMLViewer } from "document-editor-v3";

import "document-editor-v3/dist/lib/index.scss";
import QuestionPanels from "./layouts/QuestionsPanel";

const TabPanel = ({ children }) => {
  const [schemaToggle, setSchemaToggle] = useState("schemaEditor");

  const toggleTable = (evt, state) => {
    evt.preventDefault();
    setSchemaToggle(state);
  };

  return (
    <>
      <div className="winterfell-form-builder-tab-bar">
        <div className="row">
          <div className="col-12">
            <h1>Winterfell Form Builder</h1>
          </div>
        </div>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation" onClick={(evt) => toggleTable(evt, "schemaEditor")}>
            <a class="nav-link active" id="questionPanel-tab" data-toggle="tab" href="#questionPanel" role="tab" aria-controls="questionPanel" aria-selected="false">
              Questions panel
            </a>
          </li>
          <li class="nav-item" role="presentation" onClick={(evt) => toggleTable(evt, "docEditor")}>
            <a class="nav-link " id="docEditor-tab" data-toggle="tab" href="#docEditor" role="tab" aria-controls="docEditor" aria-selected="true">
              Editor
            </a>
          </li>
          <li class="nav-item" role="presentation" onClick={(evt) => toggleTable(evt, "schemaViewer")}>
            <a class="nav-link" id="schemaViewer-tab" data-toggle="tab" href="#schemaViewer" role="tab" aria-controls="schemaViewer" aria-selected="false">
              Document schema viewer
            </a>
          </li>
          <li class="nav-item" role="presentation" onClick={(evt) => toggleTable(evt, "htmlViewer")}>
            <a class="nav-link" id="htmlViewer-tab" data-toggle="tab" href="#htmlViewer" role="tab" aria-controls="htmlViewer" aria-selected="false">
              Document HTML viewer
            </a>
          </li>
        </ul>
      </div>

      <div class="winterfell-form-builder-tab-content" id="myTabContent">
        {schemaToggle === "schemaEditor" ? (
          <div class="tab-pane fade show active" id="questionPanel" role="tabpanel" aria-labelledby="contact-tab">
            {children}
          </div>
        ) : null}
        {schemaToggle === "docEditor" ? (
          <div class="tab-pane fade show active" id="docEditor" role="tabpanel" aria-labelledby="docEditor-tab">
            <TextEditor />
          </div>
        ) : null}
        {schemaToggle === "schemaViewer" ? (
          <div class="tab-pane fade show active" id="schemaViewer" role="tabpanel" aria-labelledby="schemaViewer-tab">
            <div>{<SchemaViewer />}</div>
          </div>
        ) : null}
        {schemaToggle === "htmlViewer" ? (
          <div class="tab-pane fade show active" id="htmlViewer" role="tabpanel" aria-labelledby="htmlViewer-tab">
            <div>
              <HTMLViewer />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

class WinterfellFormBuilder extends Component {
  state = {
    schema: {},
    schemaToggle: false,
  };

  onFormUpdate = (e) => {
    e.preventDefault();
    this.setState({ schemaToggle: JSON.parse(e.target.value) });
  };

  render() {
    const { schema, currentPanelId, formPanels, currentEditingField, currentQuestionPanelIndex, currentQuestionSetIndex, currentQuestionIndex, errorMessage, title } = this.props;

    return (
      <div className="container-fluid winterfell-form-builder">
        <TabPanel>
          <div className="row">
            <div className={`modal fade ${errorMessage !== "" ? "show" : ""}`} id="errorMessage" tabIndex="-1" key="errorMessageModal">
              <div className="modal-dialog bg-white">
                <div className="modal-content">
                  <div className="modal-header">
                    <div className="modal-title">Error</div>
                  </div>
                  <div className="modal-body">{errorMessage}</div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={this.props.clearErrorMessage}>
                      Ok
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row py-3">
            <div className="col-12">
              <div className="btn-group">
                <CreateFormButton />
                <UploadJSONButton />
                <SaveFormButton />
                <EditSchemaButton />
                <EditFormTitleButton />
              </div>
            </div>
          </div>
          {!this.props.schema || this.props.schema.size === 0 ? (
            <div className="alert alert-info" role="alert">
              No form loaded. Click on <b>Create</b> to create a new form, or <b>Import</b> to load an existing form (.json).
            </div>
          ) : (
            <div className="row winterfell-form-builder-editor">
              <div className="col-4" id="questionEditor">
                <h3>Page Editor</h3>
                <div className="btn-group">
                  <AddPageButton />
                  <PageSortButton onClick={() => this.props.changeCurrentEditingField("pageSort")} />
                </div>
                <br />
                <TreeView id="tree-view" />
                <br />
                {formPanels && <Pagination formPanels={formPanels.map((panel) => panel.get("panelId"))} currentPanelId={currentPanelId} onClick={this.props.goToPage} />}
                {currentQuestionPanelIndex >= 0 && (
                  <FieldEditor
                    currentQuestionPanelIndex={currentQuestionPanelIndex}
                    currentEditingField={currentEditingField}
                    currentQuestionSetIndex={currentQuestionSetIndex}
                    currentQuestionIndex={currentQuestionIndex}
                  />
                )}
              </div>
              <div className="col-8 winterfell-form-builder-page-editor">
                <QuestionPanels title={title} schema={this.props.schema} currentQuestionPanelIndex={currentQuestionPanelIndex} />
              </div>
            </div>
          )}
          <div className="row winterfell-form-builder-previewer">
            <div className="col-12 mb-5 py-3">
              <h3>Winterfell Form Preview:</h3>
              {schema && <Previewer currentPanelId={currentPanelId} schema={schema.toJS()} />}
              {currentPanelId === "Select Page" && (
                <div className="alert alert-info" role="alert">
                  No page selected to preview. Select a page from the dropdown above.
                </div>
              )}
            </div>
          </div>
        </TabPanel>
      </div>
    );
  }
}

WinterfellFormBuilder.propTypes = {
  schema: PropTypes.object,
  currentPanelId: PropTypes.string,
  currentQuestionPanelIndex: PropTypes.number,
  currentQuestionSetIndex: PropTypes.number,
  currentQuestionIndex: PropTypes.number,
  formPanels: PropTypes.object,
  goToPage: PropTypes.func.isRequired,
  currentEditingField: PropTypes.string,
  changeCurrentEditingField: PropTypes.func.isRequired,
  clearErrorMessage: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  title: PropTypes.string,
};

WinterfellFormBuilder.defaultProps = {
  title: "",
  schema: null,
  currentPanelId: null,
  inputSchema: {},
  formPanels: null,
  questionSets: null,
  currentQuestionPanelIndex: 0, // first page by default
  currentQuestionSetIndex: null,
  currentQuestionIndex: null,
  currentEditingField: "page",
  errorMessage: "",
};

function mapStateToProps(state, ownProps) {
  return {
    title: state.getIn(["form", "title"]),
    schema: state.getIn(["form", "schema"]),
    currentPanelId: state.getIn(["form", "currentPanelId"]),
    formPanels: state.getIn(["form", "schema", "formPanels"]),
    questionSets: state.getIn(["form", "schema", "questionSets"]),
    currentEditingField: state.getIn(["form", "currentEditingField"]),
    currentQuestionPanelIndex: state.getIn(["form", "currentQuestionPanelIndex"]),
    currentQuestionSetIndex: state.getIn(["form", "currentQuestionSetIndex"]),
    currentQuestionIndex: state.getIn(["form", "currentQuestionIndex"]),
    errorMessage: state.getIn(["error", "message"]),
  };
}

export default connect(mapStateToProps, { goToPage, changeCurrentEditingField, clearErrorMessage })(WinterfellFormBuilder);

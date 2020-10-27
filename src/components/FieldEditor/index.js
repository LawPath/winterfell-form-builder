import React from 'react';
import PropTypes from 'prop-types';
import PageEditor from './PageEditor';
import QuestionSetEditor from './QuestionSetEditor';
import QuestionEditor from './QuestionEditor';
import ButtonBarEditor from './ButtonBarEditor';

function FieldEditor(props) {
  const {
    currentEditingField,
    currentQuestionPanelIndex,
    currentQuestionSetIndex,
    currentQuestionIndex,
  } = props;

  return (
    <>
      <a
        class="btn btn-outline-primary w-100 mb-3"
        data-toggle="collapse"
        href="#winterfell-form-builder-field-editor"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Open form builder editor
      </a>
      <div
        id="winterfell-form-builder-field-editor"
        className="winterfell-form-builder-field-editor collapse bg-light p-3"
      >
        {(currentEditingField === 'page' || currentEditingField === 'pageSort') && (
          <PageEditor currentQuestionPanelIndex={currentQuestionPanelIndex} />
        )}
        {currentEditingField === 'questionSet' && (
          <QuestionSetEditor currentQuestionSetIndex={currentQuestionSetIndex} />
        )}
        {currentEditingField === 'question' && (
          <QuestionEditor
            currentQuestionPanelIndex={currentQuestionPanelIndex}
            currentQuestionSetIndex={currentQuestionSetIndex}
            currentQuestionIndex={currentQuestionIndex}
          />
        )}
        {currentEditingField === 'buttons' && (
          <ButtonBarEditor currentQuestionPanelIndex={currentQuestionPanelIndex} />
        )}
      </div>
    </>
  );
}

FieldEditor.propTypes = {
  currentEditingField: PropTypes.string.isRequired,
  currentQuestionPanelIndex: PropTypes.number.isRequired,
  currentQuestionSetIndex: PropTypes.number,
  currentQuestionIndex: PropTypes.number,
};

FieldEditor.defaultProps = {
  currentQuestionSetIndex: null,
  currentQuestionIndex: null,
};

export default FieldEditor;

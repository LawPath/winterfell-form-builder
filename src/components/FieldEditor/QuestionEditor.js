import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import {
  editQuestion,
  editQuestionText,
  editQuestionPostText,
  changeQuestionType,
  editQuestionId,
  changeQuestionLabel,
} from '../../actions/winterfellFormBuilderActions';
import FieldGroup from '../InputTypes/FieldGroup';
import DeleteQuestionButton from '../FormMenu/DeleteQuestionButton';
import AddQuestionButton from '../FormMenu/AddQuestionButton';
import SelectInput from '../InputTypes/SelectInput';
import ButtonBarEditor from './ButtonBarEditor';
import { INPUT_TYPE_OPTIONS, QUESTION_LABEL_OPTIONS } from '../../common/constants';
import QuestionOptionEditor from './QuestionOptionEditor';
import InputTags from '../InputTypes/InputTags';

const QuestionEditor = ({
  currentQuestionPanelIndex,
  currentQuestionSetIndex,
  currentQuestionIndex,
}) => {
  const questionSetQueryPath = [
    'form',
    'schema',
    'questionSets',
    currentQuestionSetIndex,
    'questions',
    currentQuestionIndex,
  ];
  const dispatch = useDispatch();
  const questionSetId = useSelector((state) =>
    state.getIn([...questionSetQueryPath, 'questionSetId']),
  );
  const questionId = useSelector((state) => state.getIn([...questionSetQueryPath, 'questionId']));
  const question = useSelector((state) => state.getIn([...questionSetQueryPath, 'question']));
  const questionText = useSelector((state) => state.getIn([...questionSetQueryPath, 'text']));
  const questionLabelType = useSelector((state) => state.getIn([...questionSetQueryPath, 'label']));
  const questionPostText = useSelector((state) =>
    state.getIn([...questionSetQueryPath, 'postText']),
  );
  const questionInputType = useSelector((state) => {
    return state.getIn([...questionSetQueryPath, 'input', 'type']);
  });
  const questionInputOptions = useSelector(
    (state) => state.getIn([...questionSetQueryPath, 'input', 'options']) || fromJS([]),
  );
  const [isEditQuestionId, setIsEditQuestionId] = useState(true);

  const onChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'questionId':
        dispatch(editQuestionId(currentQuestionSetIndex, currentQuestionIndex, value));
        break;
      case 'question':
        dispatch(editQuestion(currentQuestionSetIndex, currentQuestionIndex, value));
        break;
      case 'questionText':
        dispatch(editQuestionText(currentQuestionSetIndex, currentQuestionIndex, value));
        break;
      case 'questionPostText':
        dispatch(editQuestionPostText(currentQuestionSetIndex, currentQuestionIndex, value));
        break;
      default:
    }
  };

  const onSelect = (questionType, event) => {
    const { name } = event.target;
    switch (name) {
      case 'questionInputType':
        if (questionType !== '') {
          dispatch(changeQuestionType(currentQuestionSetIndex, currentQuestionIndex, questionType));
        }
        break;
      case 'questionLabelType':
        dispatch(changeQuestionLabel(currentQuestionSetIndex, currentQuestionIndex, questionType));
        break;
      default:
        break;
    }
  };

  const onEditQuestionIdClick = () => {
    setIsEditQuestionId(!isEditQuestionId);
  };

  return (
    <form>
      {currentQuestionIndex > -1 && (
        <div>
          <div className="form-group">
            <FieldGroup
              id="questionSetId"
              name="questionSetId"
              label="Question Set ID"
              onChange={onChange}
              placeholder={questionSetId}
              value={questionSetId}
              disabled
            />
          </div>
          <div className="form-group">
            <FieldGroup
              id="questionId"
              name="questionId"
              label="Question ID"
              onChange={onChange}
              placeholder={questionId}
              value={questionId}
              disabled={isEditQuestionId}
            />
          </div>
          <div className="form-group">
            <label htmlFor="edit-question-id" id="edit-question-id-label">
              <input id="edit-question-id" type="checkbox" onClick={onEditQuestionIdClick} />
              &nbsp;edit question id (not recommended)
            </label>
          </div>
          <div className="form-group">
            <FieldGroup
              id="question"
              name="question"
              label="Question"
              onChange={onChange}
              placeholder={question}
              value={question}
            />
          </div>
          <div className="form-group">
            <FieldGroup
              id="questionText"
              name="questionText"
              label="Question Pre Text"
              placeholder={questionText}
              onChange={onChange}
              value={questionText}
            />
          </div>
          <div className="form-group">
            <FieldGroup
              id="questionPostText"
              name="questionPostText"
              label="Question Post Text"
              placeholder={questionPostText}
              onChange={onChange}
              value={questionPostText}
            />
          </div>
          <div className="form-group">
            <label htmlFor="questionInputType">Question Type</label>
            <SelectInput
              id="questionInputType"
              name="questionInputType"
              labelId="questionInputType"
              options={INPUT_TYPE_OPTIONS}
              onSelect={onSelect}
              displayValue={questionInputType}
            />
          </div>
          <div className="form-group">
            <label htmlFor="questionLabelType">Question label type</label>
            <SelectInput
              id="questionLabelType"
              name="questionLabelType"
              labelId="questionLabelType"
              options={QUESTION_LABEL_OPTIONS}
              onSelect={onSelect}
              displayValue={questionLabelType}
            />
          </div>
        </div>
      )}
      {(questionInputType === 'checkboxOptionsInput' ||
        questionInputType === 'selectInput' ||
        questionInputType === 'radioOptionsInput') &&
        questionInputOptions &&
        currentQuestionIndex > -1 && (
          <QuestionOptionEditor
            questionInputOptions={questionInputOptions}
            questionId={questionId}
            currentQuestionPanelIndex={currentQuestionPanelIndex}
            currentQuestionSetIndex={currentQuestionSetIndex}
            currentQuestionIndex={currentQuestionIndex}
          />
        )}
      <div className="form-group">
        <label htmlFor="questionLabelType">Suggested answers</label>
        <InputTags
          currentQuestionSetIndex={currentQuestionSetIndex}
          currentQuestionIndex={currentQuestionIndex}
        />
      </div>
      <ButtonBarEditor currentQuestionPanelIndex={currentQuestionPanelIndex} />
      <div className="btn-group">
        {currentQuestionIndex > -1 && (
          <DeleteQuestionButton
            currentQuestionSetIndex={currentQuestionSetIndex}
            currentQuestionIndex={currentQuestionIndex}
          />
        )}
        {currentQuestionIndex > -1 && (
          <AddQuestionButton
            questionSetId={questionSetId}
            currentQuestionSetIndex={currentQuestionSetIndex}
          />
        )}
      </div>
      <br />
    </form>
  );
};

QuestionEditor.propTypes = {
  editQuestionId: PropTypes.func.isRequired,
  editQuestion: PropTypes.func.isRequired,
  editQuestionText: PropTypes.func.isRequired,
  editQuestionPostText: PropTypes.func.isRequired,
  changeQuestionType: PropTypes.func.isRequired,
  updateNextQuestionTarget: PropTypes.func.isRequired,
  questionSetId: PropTypes.string.isRequired,
  questionId: PropTypes.string,
  question: PropTypes.string,
  questionText: PropTypes.string,
  questionPostText: PropTypes.string,
  questionInputType: PropTypes.string,
  questionInputOptions: PropTypes.object,
  currentQuestionSetIndex: PropTypes.number.isRequired,
  currentQuestionIndex: PropTypes.number.isRequired,
  questionTarget: PropTypes.string,
  questionTargetMatch: PropTypes.string,
  currentQuestionPanelIndex: PropTypes.number.isRequired,
};

QuestionEditor.defaultProps = {
  questionId: '',
  question: '',
  questionText: '',
  questionPostText: '',
  questionInputType: '',
  questionInputOptions: fromJS([]),
  questionTarget: '',
  questionTargetMatch: '',
};

export default QuestionEditor;

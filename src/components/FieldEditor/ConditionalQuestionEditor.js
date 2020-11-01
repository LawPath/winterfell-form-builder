import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import {
  saveConditionalQuestion,
  deleteConditionalQuestion,
} from '../../actions/winterfellFormBuilderActions';
import FieldGroup from '../InputTypes/FieldGroup';
import { AddConditionalQuestionButton, DeleteConditionalQuestionButton } from '../FormMenu/';
import SelectInput from '../InputTypes/SelectInput';
import ConditionalQuestionOptionEditor from './ConditionalQuestionOptionEditor';
import { INPUT_TYPE_OPTIONS } from '../../common/constants';

class ConditionalQuestionEditor extends PureComponent {
  constructor(props) {
    super(props);

    const { conditionalQuestions } = props;

    this.state = {
      conditionalQuestions: conditionalQuestions.toJS(),
    };

    this.onChange = this.onChange.bind(this);
    this.onSaveConditionalQuestion = this.onSaveConditionalQuestion.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      conditionalQuestions: nextProps.conditionalQuestions.toJS(),
    });
  }

  onChange(event, index) {
    const { name, value } = event.target;
    const copyConditionalQuestions = Object.assign([], this.state.conditionalQuestions);
    copyConditionalQuestions[index][name] = value;
    this.setState({ conditionalQuestions: copyConditionalQuestions });
  }

  onSelect(questionType, index) {
    const copyConditionalQuestions = Object.assign([], this.state.conditionalQuestions);
    copyConditionalQuestions[index].input.type = questionType;
    this.setState({ conditionalQuestions: copyConditionalQuestions });
  }

  onSaveConditionalQuestion(conditionalQuestionIndex, path) {
    const { questionId, question, text, postText, input } = this.state.conditionalQuestions[
      conditionalQuestionIndex
    ];
    const newPath = Object.assign([], path);
    newPath.push('conditionalQuestions');
    newPath.push(conditionalQuestionIndex);
    this.props.saveConditionalQuestion(
      newPath,
      questionId,
      question,
      text,
      postText,
      input.type,
      input.options,
    );
  }

  getConditionalQuestions() {
    return this.state.conditionalQuestions.map((conditionalQuestion, ix) => {
      const { questionId, question, text, postText, input } = conditionalQuestion;

      const conditionalPath = Object.assign([], this.props.parentPath);

      conditionalPath.push('conditionalQuestions');
      conditionalPath.push(ix);
      return (
        // return #2
        <div className="w-100 mt-3" key={ix}>
          <hr />
          <div className="form-group">
            <FieldGroup
              id="questionId"
              name="questionId"
              label={`Conditional Question ID ${ix + 1}:`}
              onChange={(e) => this.onChange(e, ix)}
              value={questionId}
            />
          </div>
          <div className="form-group">
            <FieldGroup
              id="question"
              name="question"
              label={`Conditional Question ${ix + 1}:`}
              onChange={(e) => this.onChange(e, ix)}
              value={question}
            />
          </div>
          <div className="form-group">
            <FieldGroup
              id="text"
              name="text"
              label={`Conditional Question Pre Text ${ix + 1}:`}
              onChange={(e) => this.onChange(e, ix)}
              value={text}
            />
          </div>
          <div className="form-group">
            <FieldGroup
              id="postText"
              name="postText"
              label={`Conditional Question Post Text ${ix + 1}:`}
              onChange={(e) => this.onChange(e, ix)}
              value={postText}
            />
          </div>
          <div className="form-group">
            <label htmlFor="questionInputType">Question Type</label>
            <SelectInput
              id="questionInputType"
              labelId="questionInputType"
              options={INPUT_TYPE_OPTIONS}
              onSelect={(e) => this.onSelect(e, ix)}
              displayValue={input.type}
            />
          </div>
          {(input.type === 'checkboxOptionsInput' ||
            input.type === 'selectInput' ||
            input.type === 'radioOptionsInput') && (
            <ConditionalQuestionOptionEditor
              questionInputOptions={input.options}
              questionId={questionId}
              currentQuestionPanelIndex={this.props.currentQuestionPanelIndex}
              currentQuestionSetIndex={this.props.currentQuestionSetIndex}
              path={conditionalPath}
            />
          )}
          <br />
          <div>
            <DeleteConditionalQuestionButton
              className="w-50"
              path={conditionalPath}
              deleteConditionalQuestion={this.props.deleteConditionalQuestion}
            />
            <button
              type="button"
              className="btn w-50"
              title="save this conditional question"
              onClick={() => this.onSaveConditionalQuestion(ix, this.props.parentPath)}
            >
              save
            </button>
          </div>
          <hr />
        </div>
      ); // end of return #2
    }); // end of return #1
  }

  render() {
    return (
      <div className="winterfell-form-builder-conditional-questions alert alert-info">
        <div className="row w-100 m-0">
          <h6>{`Option '${this.props.parentOptionText}' Conditional Questions:`}</h6>
          <h6>
            <i>Display these questions if this option is selected</i>
          </h6>
          {this.props.conditionalQuestions && this.getConditionalQuestions()}
        </div>
        <div className="row w-100 m-0">
          <br />
          <AddConditionalQuestionButton path={this.props.parentPath} className="w-100" />
          <br />
        </div>
      </div>
    );
  }
}

ConditionalQuestionEditor.propTypes = {
  conditionalQuestions: PropTypes.object,
  currentQuestionSetIndex: PropTypes.number.isRequired,
  parentOptionText: PropTypes.string.isRequired,
  currentQuestionPanelIndex: PropTypes.number.isRequired,
  saveConditionalQuestion: PropTypes.func.isRequired,
  deleteConditionalQuestion: PropTypes.func.isRequired,
  parentPath: PropTypes.array.isRequired,
};

ConditionalQuestionEditor.defaultProps = {
  conditionalQuestions: fromJS([]),
};

function mapStateToProps(state, ownProps) {
  return {
    conditionalQuestions: state.getIn(['form', ...ownProps.parentPath, 'conditionalQuestions']),
  };
}

export default connect(mapStateToProps, { saveConditionalQuestion, deleteConditionalQuestion })(
  ConditionalQuestionEditor,
);

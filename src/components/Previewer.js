import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Winterfell from 'winterfell';
import { connect, useDispatch } from 'react-redux';

import { updateQuestionAnswers } from '../actions/winterfellFormBuilderActions';
import DateInputType from '../components/InputTypes/DateInputType';
import addressInputType from '../components/InputTypes/addressInputType';
import textAreaInputType from '../components/InputTypes/textAreaInputType';
import SuggestionInputs from './InputTypes/SuggestionInputs';

const onRenderDefault = () => {
  console.log('Great news! Winterfell rendered successfully');
};

const onSwitchPanelDefault = (panel) => {
  console.log(`Moving on to the panel that is identified as ${panel.panelId}`);
};

const onSubmitDefault = (questionAndAnswers, target) => {
  console.log('Form submitted!', questionAndAnswers);
  console.log('-----');
  console.log('For this example, we disabled normal form submission functionality. ');
  console.log('-----');
  console.log('Target: ', target);
  console.log('-----');
  // alert('Submitted. Check the console to see the answers!');
};

const Previewer = ({
  currentPanelId = null,
  schema = {},
  onRender = onRenderDefault,
  onSubmit = onSubmitDefault,
  onSwitchPanel = onSwitchPanelDefault,
  questionAnswers = {},
  onUpdate = () => {},
}) => {
  const dispatch = useDispatch();

  const onUpdateQuestionAnswers = (questionAndAnswers) => {
    console.log('Question Updated! The current set of answers is: ', questionAndAnswers);

    dispatch(updateQuestionAnswers(questionAndAnswers));
  };

  const onClickSuggestion = (event, { questionId, item }) => {
    const selectedAnswer = {};
    selectedAnswer[questionId] = item.id;
    dispatch(updateQuestionAnswers(selectedAnswer));
  };

  Winterfell.addInputTypes({
    dateInput: DateInputType,
    addressInput: addressInputType,
    textAreaInput: textAreaInputType,
  });
  Winterfell.addPostQuestionComponent('suggestion', SuggestionInputs);

  const displayWinterFellForm = () =>
    schema.formPanels.map((formPanel, index) => {
      return (
        (formPanel.panelId === currentPanelId && (
          <Winterfell
            schema={schema}
            disableSubmit
            onRender={onRender}
            onUpdate={onUpdateQuestionAnswers}
            onSwitchPanel={onSwitchPanel}
            onSubmit={onSubmit}
            questionAnswers={questionAnswers}
            panelId={currentPanelId}
            key={index}
          />
        )) ||
        (currentPanelId === 'Select Page' && (
          <Winterfell
            schema={schema}
            disableSubmit
            onRender={onRender}
            onUpdate={onUpdate}
            onSwitchPanel={onSwitchPanel}
            onSubmit={onSubmit}
            questionAnswers={questionAnswers}
          />  
        ))
      );
    });

  return (
    <div className="card p-3">
      {schema &&
        schema.formPanels &&
        schema.formPanels.length > 0 &&
        currentPanelId &&
        currentPanelId !== 'Select Page' &&
        displayWinterFellForm()}
    </div>
  );
};

Previewer.propTypes = {
  currentPanelId: PropTypes.number.isRequired,
  schema: PropTypes.object.isRequired,
  onRender: PropTypes.func,
  onSubmit: PropTypes.func,
  onSwitchPanel: PropTypes.func,
  questionAnswers: PropTypes.object,
  onUpdate: PropTypes.func,
};

Previewer.defaultProps = {
  currentPanelId: null,
  schema: {},
  onRender: onRenderDefault,
  onSubmit: onSubmitDefault,
  onSwitchPanel: onSwitchPanelDefault,
  questionAnswers: {},
  onUpdate: () => {},
};

export default Previewer;

import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Winterfell from 'winterfell';
import { connect, useDispatch } from 'react-redux';

import { updateQuestionAnswers } from '../actions/winterfellFormBuilderActions';
import DateInputType from '../components/InputTypes/DateInputType';
import addressInputType from '../components/InputTypes/addressInputType';
import textAreaInputType from '../components/InputTypes/textAreaInputType';
import {
  BOOTSTRAP_CLASSES,
  DEFAULT_SUGGESTIONS,
  PANEL_CONSTANTS,
  PROGRESS,
  SUGGESION_PANEL_DEFAULT,
} from '../common/constants';
import SuggestionSet from './InputTypes/SuggestionSet';

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
  const [localSchema, setLocalSchema] = useState(
    !schema.suggestionPanel ? { ...schema, suggestionPanel: SUGGESION_PANEL_DEFAULT } : schema,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    schema.questionPanels.forEach((qp) => {
      qp.progress = PROGRESS;
    });

    if (!schema.suggestionPanel) {
      setLocalSchema({ ...schema, suggestionPanel: SUGGESION_PANEL_DEFAULT });
      return;
    }
    setLocalSchema(schema);
  }, [schema]);

  const onUpdateQuestionAnswers = (questionAndAnswers) => {
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
  const displayWinterFellForm = () =>
    localSchema.formPanels.map((formPanel, index) => {
      localSchema.suggestionPanel = SUGGESION_PANEL_DEFAULT;
      localSchema.panelConstants = PANEL_CONSTANTS;
      localSchema.defaultSuggestions = DEFAULT_SUGGESTIONS;
      localSchema.classes = BOOTSTRAP_CLASSES;
      localSchema.formPanels[index].progress = PROGRESS;

      return (
        (formPanel.panelId === currentPanelId && (
          <Winterfell
            schema={localSchema}
            disableSubmit
            onRender={onRender}
            onUpdate={onUpdateQuestionAnswers}
            onSwitchPanel={onSwitchPanel}
            onSubmit={onSubmit}
            questionAnswers={questionAnswers}
            panelId={currentPanelId}
            key={index}
            answersSuggestionComponent={SuggestionSet}
          />
        )) ||
        (currentPanelId === 'Select Page' && (
          <Winterfell
            schema={localSchema}
            disableSubmit
            onRender={onRender}
            onUpdate={onUpdate}
            onSwitchPanel={onSwitchPanel}
            onSubmit={onSubmit}
            questionAnswers={questionAnswers}
            answersSuggestionComponent={SuggestionSet}
          />
        ))
      );
    });

  return (
    <div className="winterfell-panel-preview card p-3">
      {localSchema &&
        localSchema.formPanels &&
        localSchema.formPanels.length > 0 &&
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

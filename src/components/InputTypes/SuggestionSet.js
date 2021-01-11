/* eslint-disable react/no-danger */
import React from 'react';

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const SuggestionItem = ({ data, onClick }) => {
  return (
    <span onClick={() => onClick(data)} className="suggestion-item">
      {data.id}
    </span>
  );
};

const Suggestions = ({
  onAnswerChange,
  questionId,
  questionLabel,
  postText,
  suggestions,
  defaultSuggestions,
}) => {
  const handleOnChangeAnsewer = (answer) => {
    onAnswerChange(questionId, answer.text, questionLabel);
  };

  return (
    <div>
      {suggestions ? (
        <div>
          {suggestions.map((item) => (
            <SuggestionItem onClick={handleOnChangeAnsewer} data={item} />
          ))}
        </div>
      ) : postText ? (
        <div>{postText}</div>
      ) : (
        <div
          dangerouslySetInnerHTML={{
            __html:
              defaultSuggestions[getRandomInt(defaultSuggestions.length)]
                .content,
          }}
        />
      )}
    </div>
  );
};

const SuggestionSet = ({
  questions,
  suggestionPanel,
  onAnswerChange,
  defaultSuggestions,
  classes,
  panelConstants,
}) => {
  return (
    <>
      <div className="question-panel-post-body-header">
        <div className={classes.postBodyHeader}>
          <img
            className={classes.postBodyHeaderIcon}
            src={panelConstants.titleIcon}
          />
          <span className={classes.postBodyHeaderText}>
            {panelConstants.postBodyHeaderText}
          </span>
        </div>
      </div>
      <div className="question-panel-post-body">
        <div className={suggestionPanel.classes.panel}>
          <div className={suggestionPanel.classes.body}>
            {questions.map((question) => (
              <Suggestions
                onAnswerChange={onAnswerChange}
                defaultSuggestions={defaultSuggestions}
                {...question}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SuggestionSet;

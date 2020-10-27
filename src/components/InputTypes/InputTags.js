import React from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import { useDispatch, useSelector } from 'react-redux';
import { changeSuggestedAnswers } from '../../actions/winterfellFormBuilderActions';
import { List, Map } from 'immutable';

const KeyCodes = {
  comma: 188,
  enter: 13,
};
const delimiters = [KeyCodes.comma, KeyCodes.enter];
const defaultPlaceholder = 'Enter suggestions';
const defaultClassnames = { tagInputField: 'form-control' };

const SUGGESTION_COMPONENT = 'suggestion';
const setData = (data) => {
  return List(data);
};

const InputTags = ({
  currentQuestionSetIndex,
  currentQuestionIndex,
  placeholder = defaultPlaceholder,
}) => {
  const path = [
    'form',
    'schema',
    'questionSets',
    currentQuestionSetIndex,
    'questions',
    currentQuestionIndex,
    'suggestions',
  ];
  const tags = useSelector((state) => {
    const results = state.getIn(path);
    return !results ? [] : List.isList(results) ? results.toJS() : results;
  });

  const dispatch = useDispatch();

  const handleDelete = (i) => {
    const updatedTags = tags.filter((tag, index) => index !== i);
    dispatch(
      changeSuggestedAnswers(currentQuestionSetIndex, currentQuestionIndex, setData(updatedTags)),
    );
  };

  const handleAddition = (tag) => {
    const updatedTags = [...tags, tag];
    dispatch(
      changeSuggestedAnswers(currentQuestionSetIndex, currentQuestionIndex, setData(updatedTags)),
    );
  };

  const handleDrag = (tag, currPos, newPos) => {
    const currentTags = [...tags];
    const newTags = currentTags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    dispatch(
      changeSuggestedAnswers(currentQuestionSetIndex, currentQuestionIndex, setData(newTags)),
    );
  };

  return (
    <ReactTags
      inline
      placeholder={placeholder}
      classNames={defaultClassnames}
      tags={tags}
      handleDelete={handleDelete}
      handleAddition={handleAddition}
      handleDrag={handleDrag}
      delimiters={delimiters}
      autofocus={false}
    />
  );
};

export default InputTags;

import React from "react";
import FieldSelector from "../FieldSelector";

const QuestionPanels = ({ title, schema, currentQuestionPanelIndex }) => {
  return (
    <>
      <h3>{title}</h3>
      {schema && currentQuestionPanelIndex >= 0 && <FieldSelector currentQuestionPanelIndex={currentQuestionPanelIndex} />}
    </>
  );
};
export default QuestionPanels;

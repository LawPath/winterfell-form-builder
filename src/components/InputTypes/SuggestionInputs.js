import React from 'react';

const SuggestionInputs = ({ questionId, data, onClick }) => {
  return data ? (
    <div>
      <div>
        <label>Suggestions</label>
      </div>
      <div>
        {data.map((item) => (
          <span
            onClick={(e) => onClick(e, { questionId, item, data })}
            className="badge badge-primary m-1"
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  ) : null;
};

export default SuggestionInputs;

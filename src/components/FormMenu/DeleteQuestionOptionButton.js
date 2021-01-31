import React from 'react';
import PropTypes from 'prop-types';

const DeleteQuestionOptionButton = (props) => {
  const { questionOptionIndex, onDeleteQuestionOption } = props;

  const onConfirmDelete = (e) => {
    e.preventDefault();
    onDeleteQuestionOption(questionOptionIndex);
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-delete"
        data-toggle="modal"
        data-target={`#deleteQuestionOptionButton-${questionOptionIndex}`}
      >
        <i className="material-icons">delete</i>
      </button>
      <div
        className="modal fade"
        id={`deleteQuestionOptionButton-${questionOptionIndex}`}
        tabIndex="-1"
        key="deleteQuestionOptionButtonModal"
      >
        <div className="modal-dialog bg-white">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title">Delete Option Confirmation</div>
            </div>
            <div className="modal-body">Are you sure you want to delete this option?</div>
            <div className="modal-footer">
              <button className="btn btn-danger" data-dismiss="modal">
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-dark"
                data-dismiss="modal"
                onClick={onConfirmDelete}
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DeleteQuestionOptionButton.propTypes = {
  onDeleteQuestionOption: PropTypes.func.isRequired,
};

export default DeleteQuestionOptionButton;

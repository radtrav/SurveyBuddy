import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = formFields.map(({ label, name }) => {
    return (
      <div key={name}>
        <label htmlFor="label"> {label} </label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries </h5>
      {reviewFields}
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Back
      </button>

      <button
        className="teal btn-flat right white-text"
        onClick={() => submitSurvey(formValues, history)}
      >
        <div> Send Survey </div>
        <i className="material-icons">email</i>
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    formValues: state.form.surveyForm.values,
  };
};

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));

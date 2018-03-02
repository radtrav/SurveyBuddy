import React from 'react';

const SurveyField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label htmlFor="surveyTitle"> {label}</label>
      <input style={{ marginBottom: 5 }} {...input} />
      <div className="red-text" style={{ marginBottom: 20 }}>
        {touched && error}
      </div>
    </div>
  );
};

export default SurveyField;

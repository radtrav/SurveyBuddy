import React from 'react';

const SurveyField = ({ input }) => {
  console.log('input', input)
  return (
    <div>
      <input {...input} />
    </div>

  );
};

export default SurveyField;

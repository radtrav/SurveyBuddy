// SurveyNew shows SurveyForm and SurveyReview
import React,  { Component } from 'react';
import SurveyForm from './SurveyForm';

class SurveyNew extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        SurveyNew!
        <SurveyForm/>
      </div>
    );
  }
}

export default SurveyNew;
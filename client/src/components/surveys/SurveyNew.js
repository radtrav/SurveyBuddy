import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import { reduxForm } from 'redux-form';

class SurveyNew extends Component {
  state = { showFormReview: false };

  renderContent = () => {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  };

  render() {
    return (<div style={{ marginTop: 45 }}>
      <div className="center" style={{fontSize: 40, marginBottom: 20, marginTop:20, fontWeight: 600}}> Create a New Survey</div>
      <hr/>
      <br />
      {this.renderContent()}
    </div>);
  }
}

export default reduxForm({
  form: 'surveyForm',
}) (SurveyNew);

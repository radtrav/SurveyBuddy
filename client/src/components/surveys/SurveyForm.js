import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
  { label: 'Survey Title', name: 'title' },
  { label: 'Subject Line', name: 'subject' },
  { label: 'Email Body', name: 'body' },
  { label: 'Recipient List', name: 'emails' },
];

class SurveyForm extends Component {
  constructor() {
    super();
  }

  renderFields() {
    return FIELDS.map(({ label, name}) => (
      <Field
        key={name}
        label={label}
        name={name}
        type="text"
        component={SurveyField}
      />
    ));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat left white-text" type="submit">
            Cancel
          </Link>
          <button className="teal btn-flat right white-text" type="submit">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};


  errors.emails = validateEmails(values.emails);

  FIELDS.forEach(({ name }) => {
    if(!values[name]) {
      errors[name] = `You must add a value`
    }
  });

  return errors;
};

export default reduxForm({
  validate,
  form: 'surveyForm',
})(SurveyForm);

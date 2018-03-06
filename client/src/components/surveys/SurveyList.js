import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PieChart from 'react-minimal-pie-chart';
import { connect } from 'react-redux';

import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }
  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div
          style={{ padding: 0 }}
          key={survey._id}
          className="card darken- 1"
        >
          <div className="row">
            <div className="col s4">
              <PieChart
                radius={40}
                data={[
                  { value: parseInt(survey.yes), key: 1, color: '#E38627' },
                  { value: parseInt(survey.no), key: 2, color: '#6A2135' },
                ]}
              />
            </div>
            <div className="col s8 card-content">
              <span style={{ fontWeight: 600 }} className="card-title">
                {survey.title}
              </span>
              <hr />
              <p>{survey.body}</p>
            </div>
          </div>

          <div className="card-action">
            <a style={{ color: '#E38627' }} href="#">
              YES: {survey.yes}
            </a>
            <a style={{ color: '#6A2135' }} href="#">
              NO: {survey.no}
            </a>
            <span className="right">
              Sent on: {new Date(survey.dateSent).toLocaleDateString()}
            </span>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div
          className="center"
          style={{
            fontSize: 40,
            marginBottom: 20,
            marginTop: 20,
            fontWeight: 600,
          }}
        >
          {' '}
          My Surveys
        </div>
        <hr />
        <br />
        {this.renderSurveys()}
      </div>
    );
  }
}

const mapStateToProps = ({ surveys }) => ({
  surveys,
});

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);

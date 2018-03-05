import React, { Component} from 'react';
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
        <div style={{padding: 40}} key={survey._id} className="card darken- 1">
          <div className="row">
            <div className="col s4">
              <PieChart
                data={[
                  { value: parseInt(survey.yes), key: 1, color: '#E38627' },
                  { value: parseInt(survey.no), key: 2, color: '#C13C37' },
                ]}
              />
            </div>
            <div className="col s8 card-content">
              <span className="card-title"> {survey.title}</span>
              <p>{survey.body}</p>
              <p className="right">
                Sent on: {new Date(survey.dateSent).toLocaleDateString()}
              </p>
            </div>

          </div>

          <div className="card-action">
            <a style={{color: '#E38627' }} href="#"> YES: {survey.yes}</a>
            <a style={{color: '#C13C37' }} href="#"> NO: {survey.no}</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

const mapStateToProps = ({ surveys }) => ({
  surveys,
});

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);

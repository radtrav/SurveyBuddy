import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  render() {
    return <div>SurveyLIst</div>;
  }
}

const mapStateToProps = ({ surveys }) => ({
  surveys,
});

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);

import React from 'react';
import { Link } from 'react-router-dom';
const backgroundImage1 = require('../images/background1.jpg');

const styles = {
  buttons: {
    margin: 10,
  },
};

const Landing = () => {
  return (
    <div style={{ minHeight: 350 }}>
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <br />
          <h1 className="header center teal-text">
            Survey Buddy
          </h1>
          <div className="row center">
            <h5 className="header col s12 light">
              A quick and efficient way to send out survey emails!
            </h5>
          </div>
          <div className="row center">
            <Link
              style={styles.buttons}
              className="btn-large waves-effect waves-light teal"
              to="/surveys/"
            >
              View My Surveys
            </Link>
            <Link
              style={styles.buttons}
              className="btn-large waves-effect waves-light teal"
              to="/surveys/new"
            >
              Make a new Survey
            </Link>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Landing;

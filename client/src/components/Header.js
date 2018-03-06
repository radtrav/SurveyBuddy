import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

const styles = {
  navWrapper: {
    height: 80,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 5,
  },
  icon: {
    color: 'teal',
    fontSize: 56,
  }
};

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="4">
            <a href="/">Home</a>
          </li>,
          <li key="5">
            <a href="/surveys">Surveys</a>
          </li>,
          <li key="5">
            <a href="/surveys/new">New</a>
          </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>,
          <li key="3" style={{ margin: '0 10px' }}>
            <div>Credits: {this.props.auth.credits}</div>
          </li>,
          <li key="1">
            <Payments />
          </li>,
        ];
    }
  }

  render() {
    return (
      <nav className="navbar-fixed">
        <div style={styles.navWrapper} className="nav-wrapper black">
          <div>
            <Link
              to={this.props.auth ? '/' : '/'}
              className="left brand-logo"
            >
              <i className="material-icons teal-text" style={styles.icon}>assessment</i>
              SurveyBuddy
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {this.renderContent()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);

/**
 * Created by twy on 2018-02-06.
 */
import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';


class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="SurveyBuddy"
        description="5$ for 5 email credits"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        // stripeKey={process.env.STRIPE_PUBLISHABLE_KEY}
      >
        {console.log('process.env', process.env)}
        <button className="btn"> Add Credits </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);

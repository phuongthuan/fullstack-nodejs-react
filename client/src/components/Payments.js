import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { Button } from "semantic-ui-react";
import { handleToken } from './../actions';

class Payments extends Component {
  render() {
    const { handleToken } = this.props;
    return (
        <StripeCheckout
          ComponentClass="div"
          name="Emaily"
          description="$10 for 10 email credits"
          amount={1000}
          token={token => handleToken(token)}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
          <Button animated='fade'>
            <Button.Content visible>Add Credits Card</Button.Content>
            <Button.Content hidden>$10 for 10 credits</Button.Content>
          </Button>
        </StripeCheckout>
    );
  }
}

Payments.propTypes = {
  handleToken: PropTypes.func.isRequired,
};

export default connect(null, {handleToken})(Payments);
import React, { Component } from 'react';

class stripe extends Component {


componentDidMount(){
    var stripe = Stripe('pk_test_mBYHGStdYRK5CWYhWpg4My6B002QkWbZro');
stripe.redirectToCheckout({
    // Make the id field from the Checkout Session creation API response
    // available to this file, so you can provide it as parameter here
    // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
    sessionId: '{{CHECKOUT_SESSION_ID}}'
  }).then(function (result) {
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `result.error.message`.
  });
}

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default stripe;
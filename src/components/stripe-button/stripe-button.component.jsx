import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_y49QPRgi8EOJv3W1ERj7GhFA00Tb3VYf6D';

    const onToken = token => {
        console.log(token);
        alert("Payment Succesful");
    }

    return (
        <StripeCheckout
        label="Pay Now"
        name="CRWN Clothing"
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
        ></StripeCheckout>
    )
}

export default StripeCheckoutButton;
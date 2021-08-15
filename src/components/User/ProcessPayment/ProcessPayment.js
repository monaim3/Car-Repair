import React from 'react';
import { CardElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from '../SimpleCardForm/SimpleCardForm';

const stripePromise = loadStripe('pk_test_51Ie1iKIepqUdlQr1YEoDJ6R92y5h16l89uwGt2LbgukmNnC6JqVJiIjvS3mSk3bafIcZzT7SLOrVuDf2BcYDrqTK00rxaRqPIx');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm/>
        </Elements>
    );
};

export default ProcessPayment;
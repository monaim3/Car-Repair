import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Book from '../Book/Book';


const stripePromise = loadStripe('pk_test_51IeGmhJLORZbO7JkpoWbxdDRvXyI1EQuIolpR4ZMRh0y2POU7d1e5mMEZFJoTfAGmyyXUt9aiDIl3ejSQXyTrSEV00kg5d7Moe');

const PaymentProcess = () => {
    return (
        <Elements stripe={stripePromise}>
            <Book/>
        </Elements>
    );
};

export default PaymentProcess;
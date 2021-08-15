import React, { useContext, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { UserContext } from '../../../App';
import { useForm } from 'react-hook-form';
import './SimpleCardForm.css';

const SimpleCardForm = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState('');
    const [paymentSuccess, setPaymentSuccess] = useState('');

    const onSubmit = async (event) => {
        const bookingsData = {
            name: event.name,
            email: event.email,
            service: event.service
        }
        console.log(bookingsData)
        fetch('https://shrouded-harbor-51949.herokuapp.com/addBookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingsData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // if (data) {
                //     alert('You Paid Successfully')
                // }
            })

        // event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });
        if (error) {
            setPaymentError(error.message)
            setPaymentSuccess(null);
        } else {
            setPaymentSuccess(paymentMethod.id)
            setPaymentError(null);
        }
    };

    return (
        <div className="container">
            <form className="simpleCard-form" onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue={loggedInUser.name} {...register("name", { required: true })} placeholder="Your Name" />
                {errors.name && <span className="error">Name is required</span>}
                <input name="email" defaultValue={loggedInUser.email} {...register("email", { required: true })} placeholder="Enter Your Email" />
                {errors.email && <span className="error">Name is required</span>}
                <input name="service"  {...register("service", { required: true })} placeholder="Enter the service you want" />
                {errors.service && <span className="error">Which Service do you want?</span>}
                <br />
                <CardElement />
                <br />
                <button type="submit" className="btn btn-lg text-white" disabled={!stripe}>Payment</button>
            </form>
            {
                paymentError && <p style={{ color: 'red' }}>{paymentError}</p>
            }
            {
                paymentSuccess && <p style={{ color: 'green' }}>Your Paid Successfully</p>
            }
        </div>
    );
};

export default SimpleCardForm;
































// import React from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// const SimpleCardForm = () => {
//     const stripe = useStripe();
//     const elements = useElements();

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         if (!stripe || !elements) {
//             return;
//         }
//         const cardElement = elements.getElement(CardElement);
//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: 'card',
//             card: cardElement,
//         });
//         if (error) {
//             console.log('[error]', error);
//         } else {
//             console.log('[PaymentMethod]', paymentMethod);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <CardElement />
//             <br/>
//             <button type="submit" className="btn btn-brand text-white" disabled={!stripe}>Pay</button>
//         </form>
//     );
// };

// export default SimpleCardForm;
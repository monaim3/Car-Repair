import React, { useContext } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import './Book.css';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
// import { useElements, useStripe } from '@stripe/react-stripe-js';

const Book = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (event) => {
        const bookingsData ={
            name: event.name,
            email:event.email,
            service:event.service
        }
        console.log(event);
        fetch('https://shrouded-harbor-51949.herokuapp.com/addBookings',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingsData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('You Paid Successfully')
                }
            })
    }
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <div className="container py-5">
                    <h1 className="text-warning">Book</h1>
                </div>
                <div>
                    {/* <form className="book-form" onSubmit={handleSubmit(onSubmit)}>
                        <input name="name" defaultValue={loggedInUser.name} {...register("name", { required: true })} placeholder="Your Name" />
                        {errors.name && <span className="error">Name is required</span>}
                        <input name="email" defaultValue={loggedInUser.email} {...register("email", { required: true })} placeholder="Your Email" />
                        {errors.email && <span className="error">Name is required</span>}
                        <input name="service"  {...register("service", { required: true })} placeholder="Enter the service you want" />
                        {errors.service && <span className="error">Which Service do you want?</span>}
                        <button className="btn btn-brand text-black mt-4">Pay</button>
                    </form> */}

<div className="col-md-10">
                <div className="container py-5">
                    <h1 className="text-brand">Book</h1>
                </div>
                <div className="col-md-6">
                <ProcessPayment></ProcessPayment>
                </div>
            </div>
                </div>
            </div>
        </div>
    );
};

export default Book;






// maybe will workerimport React, { useContext } from 'react';
// import Sidebar from '../../Dashboard/Sidebar/Sidebar';
// import { useForm } from 'react-hook-form';
// import { UserContext } from '../../../App';
// import './Book.css';
// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

// const Book = () => {
//     const stripe = useStripe();
//     const elements = useElements();

//     const [loggedInUser, setLoggedInUser] = useContext(UserContext);
//     const { register, handleSubmit, watch, formState: { errors } } = useForm();
//     const onSubmit = (event) => {
//         event.preventDefault();
//         console.log(event);

//         if (!stripe || !elements) {
//             return;
//         }

//         const cardElement = elements.getElement(CardElement);

//         const { error, paymentMethod } = stripe.createPaymentMethod({
//             type: 'card',
//             card: cardElement,
//         });

//         if (error) {
//             console.log('[error]', error);
//         } else {
//             console.log('[PaymentMethod]', paymentMethod);
//         }
//     }
//     return (
//         <div className="row">
//             <div className="col-md-2">
//                 <Sidebar />
//             </div>
//             <div className="col-md-10">
//                 <div className="container py-5">
//                     <h1 className="text-brand">Book</h1>
//                 </div>
//                 <div>
//                     <form className="book-form" onSubmit={handleSubmit(onSubmit)}>
//                         <input name="name" defaultValue={loggedInUser.name} {...register("name", { required: true })} placeholder="Your Name" />
//                         {errors.name && <span className="error">Name is required</span>}
//                         <input name="email" defaultValue={loggedInUser.email} {...register("email", { required: true })} placeholder="Your Name" />
//                         {errors.email && <span className="error">Name is required</span>}
//                         <input name="service"  {...register("service", { required: true })} placeholder="Enter the service you want" />
//                         {errors.service && <span className="error">Which Service do you want?</span>}
//                         <button className="btn btn-brand text-white mt-4">Pay</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Book;
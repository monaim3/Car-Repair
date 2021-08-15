import React from 'react';
import './Contact.css';
const Contact = (props) => {
    return (
       <section className="contact  py-2">
           <div className="container">
               <div className="section-header text-center text-white mb-5">

                    <h1>Get In Touch</h1>
               </div>
               <div className="col-md-9 mx-auto" data-aos="zoom-in-down">
                   <form action="">
                       <div className="form-group d-flex">
                           <input type="text" className="form-control w-50 " placeholder="Frist Name *"/>
                           <input type="text" className="form-control w-50 ml-2" placeholder="Last Name *"/>
                       </div>
                       <div className="form-group d-flex">
                           <input type="email" className="form-control w-50" placeholder="email *"/>
                           <input type="number" className="form-control w-50 ml-2" placeholder="phone *"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group text-center">
                           <button  type="button" className="btn btn-warning"> Submit </button>
                       </div>
                   </form>
               </div>
           </div>
       </section>
    );
};

export default Contact;
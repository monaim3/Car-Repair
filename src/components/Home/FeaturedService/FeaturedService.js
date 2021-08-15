import React from 'react';
import './FeaturedService.css'
import truck from '../../../images/truck(1).png';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const FeaturedService = () => {
    return (
        <section className="features-service  p-3 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                   <div className="col-md-2"data-aos="fade-right" data-aos-easing="linear"
        data-aos-duration="1000">
                      <img src={truck} alt=""/>
                   </div>
                   <div className="col-md-6  mt-4" data-aos="fade-down" data-aos-easing="linear"
        data-aos-duration="1000">
                       <h1>24 Hours Breakdown Service</h1>
                       <p>To order a Breakdown Recovery Service now or if you require a quote, please contact us</p>
                   </div>

                   <div className="col-md-4  mt-4 " data-aos="fade-left"data-aos-easing="linear"
        data-aos-duration="1000">
                    
                      <div className="icon d-flex">
                      <i class="fas fa-phone call"></i>
                      <h1 className='ml-3'> 1-800-123-4567</h1>
                      </div>
                   <p>Whether you’re the driver of your own car or a rental, you’re covered 24/7, 365 days a year</p>
                   </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;
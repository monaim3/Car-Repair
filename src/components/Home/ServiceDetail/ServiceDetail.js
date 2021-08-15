import React from 'react';
import { Link } from 'react-router-dom';
import  './ServiceDetails.css'
const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-3  text-center card card2 mt-2" data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000">
            <h5 className="mt-3 mb-3">{service.title}</h5>
            <h5 style={{color:'#ffb90f', fontSize:'38px'}}className="mt-3 mb-3">${service.price}</h5>
            <img className="service-image" src={service.image} alt="" />
            
            <p className="">{service.description}</p>
 

                      {
                       <Link to="/bookingList">
                            <button className="btn btn-brand text-white bg-warning"
                            onClick={()=>service.handleAddService}>Choose this Plan</button>
                        </Link>
                    }
                    
              </div>
                   
        
    );
};

export default ServiceDetail;
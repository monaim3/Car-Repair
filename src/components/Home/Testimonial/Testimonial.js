import React from 'react';

const Testimonial = (props) => {
    const {description,name,location,image} = props.testimonial;
    return (
        <div className="card shadow-sm" data-aos="zoom-in" data-aos-easing="linear"
        data-aos-duration="1000">
           
            <div className="card-footer d-flex  align-items-center">
                <img style={{borderRadius:'50%',width:'80px', height:'90px'}} className="mx-3" src={image} alt="" width="60"/>
                <div>
                    <h6 className="text-black">{name}</h6>
                    <p className="m-0">{location}</p>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-center">{description}</p>
            </div>
       </div>
    );
};

export default Testimonial;
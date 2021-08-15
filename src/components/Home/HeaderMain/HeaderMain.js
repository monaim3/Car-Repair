import React from 'react';

import './HeaderMain.css';
const HeaderMain = () => {
    return (
        <main style={{height:'600px' }} className="row d-flex align-items-center">
            <div className="col-md-5 offset-md-1 wrapper" data-aos="fade-right">
                <h1 className="header-txt1" >Multi - Point</h1>
                <h1 className="header-txt2">Vehicle Inspection</h1>
                 <p style={{color: 'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <a href="#service" className="extra btn-brand"> Get APPOINTMENT</a>
            </div>
            <div className="col-md-6">
               
            </div>
        </main>
    );
};

export default HeaderMain;
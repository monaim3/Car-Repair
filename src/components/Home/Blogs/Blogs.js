import React from 'react';
import car1 from '../../../images/auto-1868726_640.jpg'
import car2 from '../../../images/car.jpg'
import car3 from '../../../images/car-893224_640.jpg'
import man from '../../../images/man-362150_640.jpg'
import './Blogs.css'


const Blogs = () => {
    return (
       <section className="blogs my-5">
           <div className="container">
               <div className="section-header text-center">
    
                    <h1 className="news">News & Update</h1>
               </div>
               <div className="row ">
               <div className="col-md-4 card-deck mt-5" data-aos="fade-right" data-aos-easing="linear"
        data-aos-duration="1000">
                    <img src={car2} alt=""/>
                    <h4>05.04.2021</h4>
                 <h4>
          ABS has become pretty much standard equipment on most vehicles
             </h4>
             <a className="read" href="#"> Read more </a>

               </div>


               <div className="col-md-4 card-deck mt-5 ml-2 mr-2" data-aos="fade-down" data-aos-easing="linear"
        data-aos-duration="1000">
                    <img src={car3} alt=""/>
                    <h4>05.04.2021</h4>
                 <h4>
          ABS has become pretty much standard equipment on most vehicles
             </h4>
             <a  className="read" href="#"> Read more </a>
               </div>


               <div className="col-md-4 card-deck mt-5" data-aos="fade-left" data-aos-easing="linear"
        data-aos-duration="1000">
                    <img src={man} alt=""/>
                    <h4>05.04.2021</h4>
                 <h4>
          ABS has become pretty much standard equipment on most vehicles
             </h4>
             <a className="read" href="#"> Read more </a>
               </div>

               </div>
               
           </div>
       </section>
    );
};

export default Blogs;
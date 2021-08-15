import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';


// const testimonialData = [
//     {
//         quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name : 'Lagne john',
//         from : 'California',
//         img : 'https://i.ibb.co/sVWy6gC/irene-strong-v2a-Knj-Mb-P-k-unsplash.jpg'
//     },
//     {
//         quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name : 'Aiseh Harry',
//         from : 'California',
//         img : 'https://i.ibb.co/XpsdX8b/christian-buehner-DIt-Ylc26z-VI-unsplash.jpg'
//     },
//     {
//         quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name : 'John Doen',
//         from : 'California',
//         img : 'https://i.ibb.co/ZXQTT3f/sigmund-Qj-CNk0-Tx-Gfc-unsplash.jpg'
//     }
// ]

const Testimonials = () => {
      
    const [Review, setReview] = useState([]);
    useEffect(() => {
        fetch('https://shrouded-harbor-51949.herokuapp.com/Review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
  
    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   
                   <h1>Testimonial</h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        Review.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;
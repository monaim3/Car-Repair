import React, { useContext, useState} from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import { useForm  } from 'react-hook-form';
import axios from 'axios';
import { UserContext } from '../../../App';
import './Review.css';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [image, setImage] = useState({});
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '51e0ee40006994fc21dafaa450445f33');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImage(response.data.data.display_url);
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    const onSubmit = (data) => {
        const reviewsData = {
            image: image,
            name: data.name,
         
            location: data.location,
            description: data.description
        }
        console.log(reviewsData);
        fetch('https://shrouded-harbor-51949.herokuapp.com/addReviews',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewsData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
                alert('Thanks for your feedback')
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
                    <h1 className="text-warning">Review</h1>
                </div>
                <div>
                    <form className="review-form" onSubmit={handleSubmit(onSubmit)}>
                        <input name="name" defaultValue={loggedInUser.name} {...register("name", { required: true })} placeholder="Your Name" />
                        {errors.name && <span className="error">Name is required</span>}
         
                        <input name="location"  {...register("location", { required: true })} placeholder="Enter your location " />
                        {errors.location && <span className="error">What is your location?</span>}
                        <input name="image" type="file" onChange={handleImageUpload} />
                        <input name="description" {...register("description", { required: true })} placeholder="Write Your Thoughts"/>
                        <br />
                        <button className="btn btn-brand text-white mt-4">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;
import React from 'react';

const BookedItem = (props) => {
    console.log(props);
    const { image, title, price, description, _id } = props.service;
    console.log(_id)
    return (
        <div className="col-md-4 d-flex justify-content-center">
            <div className="shadow-lg" style={{ width: '20rem', cursor: 'pointer' }}>
                <img className="card-img-top img-fluid" style={{ transform: 'scale(0.7)' }} src={image} alt="" />
                <div className="card-body text-center">
                    <h4 className="text-brand">{title}</h4>
                    <p className="text-center text-brand" style={{ fontWeight: '700', fontSize: '20px' }}>$ {price}</p>
                    <p className="card-text text-secondary">{description}</p>
                    <button className="btn btn-danger text-white" onClick={()=>props.cancelService(_id)}>Cancel Booking</button>
                </div>
            </div>
        </div>
    );
};

export default BookedItem;
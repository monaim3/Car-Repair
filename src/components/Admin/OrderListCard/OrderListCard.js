import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const OrderListCard = ({ order }) => {
    return (
        <div className="container-fluid col-md-12 d-flex justify-content-between border-bottom">
            <p className="col-md-4">{order.name}</p>
            <p className="col-md-4">{order.email}</p>
            <p className="col-md-4">{order.service}</p>
        </div>
    );
};

export default OrderListCard;
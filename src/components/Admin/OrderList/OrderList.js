import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import OrderListCard from '../OrderListCard/OrderListCard';

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://shrouded-harbor-51949.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div style={{padding:'0px'}} className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10 py-5">
                    <div className="container">
                        <h1 className="text-warning">Order List</h1>
                        <div className="col-md-12 d-flex justify-content-between border-bottom mt-5">
                            <div className="col-md-4"><p><b>Name</b></p></div>
                            <div className="col-md-4"><p><b>Email</b></p></div>
                            <div className="col-md-4"><p><b>Ordered Service</b></p></div>
                        </div>
                        {
                            orders.map(order => <OrderListCard order={order} key={order._id}></OrderListCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderList;
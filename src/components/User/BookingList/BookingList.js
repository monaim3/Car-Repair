import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { removeFromDatabseBookingList } from '../../Utilities/databaseManager';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import BookedItem from '../BookedItem/BookedItem';

const BookingList = () => {
    const [addService, setAddService] = useState([]);
    const history =useHistory();
       console.log(addService)
    const cancelService = (serviceId)=>{
        const newService = addService.filter(service => service._id !== serviceId);
        setAddService(newService);
        removeFromDatabseBookingList(serviceId);
    }

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar/>
            </div>
            <div className="col-md-10">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            {
                                addService.map(service => <BookedItem key={service._id} cancelService={cancelService} service={service}></BookedItem>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingList;
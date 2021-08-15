import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import { addToDatabseBookingList } from '../../Utilities/databaseManager';
import './Services.css';
// const serviceData = [

//     {
//         name: 'Synthetic Blend Oil Change',
//         img: 'https://i.ibb.co/zJMyqjT/pricing-box02-img01.png',
//         price: '20',
//         text:'Includes oil filter, up to 5 qts of synthetic blend oil, complete inspection.'
//     },
//     {qqgg
//         name: 'Internal Transmission Repair',
//         img: 'https://i.ibb.co/k4LBrpc/pricing-box02-img05.png',
//         price: '29',
//         text:'Includes oil filter, up to 5 qts of synthetic blend oil, complete inspection.'
//     },
//     {
//         name: 'Engine Coolant Inspection',
//         img:'https://i.ibb.co/DWc2X8g/pricing-box02-img03.png',
//         price: '39',
//         text:'Includes oil filter, up to 5 qts of synthetic blend oil, complete inspection.'
//     }
// ]
const Services = () => {
    const [services, setservices] = useState([]);
    const [bookingList, setBookingList] = useState([]);
    useEffect(() => {
        fetch('https://shrouded-harbor-51949.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setservices(data))
    }, [])
    const handleAddService = (service) => {
        const toBeAddedId = service._id;
        const sameService = bookingList.find(service => service._id === toBeAddedId);
        let count = 1;
        let newBookingList;
        if(sameService){
            count = sameService.qunatity + 1;
            sameService.qunatity = count;
            const others = bookingList.filter(service => service._id !== toBeAddedId);
            newBookingList= [...others,sameService];
        }
        else {
            service.quantity = 1;
            newBookingList = [...bookingList, service];
        }
        setBookingList(newBookingList);
        addToDatabseBookingList(service._id,count);
    }

    return (
 
        <section id="service" className="services-container  p-5">
            <div className="text-center">
                <h1 style={{color: '#343a40'}}>Our Featured Services</h1>
                <h6> We offer full service auto repair  maintenance </h6>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                   services.map(service => <ServiceDetail service={service} key={service._id} showAddtoBookingList={true} handleAddService={handleAddService}></ServiceDetail>)
                }
             
            </div>
        </div>
        </section>
    );
};

export default Services;
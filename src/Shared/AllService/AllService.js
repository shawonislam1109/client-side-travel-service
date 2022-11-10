import React from 'react';
import { useLoaderData } from 'react-router-dom'
import UseTitle from '../../Component/Hooks/UserTitle';
import ServiceSingle from './SingleService';

const AllService = () => {
    const allData = useLoaderData();
    UseTitle('Service')
    return (
        <div className='grid md:grid-cols-1  lg:grid-cols-3 w-9/12 mx-auto'>
            {
                allData.service.map(service => <ServiceSingle key={service._id} service={service}></ServiceSingle>)
            }
        </div>
    );
};

export default AllService;
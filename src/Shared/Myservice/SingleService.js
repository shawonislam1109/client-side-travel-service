import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const SingleService = () => {
    const serviceData = useLoaderData();
    const { cost, img, details, rating, name } = serviceData;
    return (
        <div className='w-9/12 mx-auto  my-20 bg-slate-100'>
            <div className="card  shadow-xl bg-slate-100 py-5 rounded-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title lg:text-5xl mb-3 text-3xl  font-bold text-yellow-600">{name}</h2>
                    <p className='lg:text-2lx  text-xl font-bold '>{details}</p>
                    <h1 className='text-3xl mt-5 font-bold'><span className='text-yellow-600 text-4xl'>cost : $</span>{cost} <span className='text-2xl font-semibold'>/personal</span></h1>
                    <div className='w-40 flex  '>
                        <p className='mt-3 text-xl font-bold'>Rating : {rating}  </p>
                        <div className='flex justify-center items-center mt-3 text-yellow-500'><FaStar /> <FaStar /> <FaStar /></div>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;
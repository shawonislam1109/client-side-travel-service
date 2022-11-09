import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const MyserviceDetails = ({ service }) => {
    const { img, name, cost, details, _id, rating } = service
    return (
        <div className="card card-compact  bg-base-100 shadow-xl my-10 m-10">
            <div className='relative'>
                <figure><img className='rounded-md' src={img} alt="Shoes" /></figure>
                <div className='flex items-center absolute top-2 right-3'>
                    <p className='text-xl font-bold '>{rating}  </p>
                    <FaStar className='text-yellow-500'></FaStar>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title font-bold text-yellow-600">{name}</h2>
                <p className='font-semibold text-slate-800'>{details ? details.slice(0, 100) + `...see more` : 'undefined'}</p>
                <h1 className='text-3xl font-bold'><span className='text-yellow-600 text-4xl'>$</span>{cost} <span className='text-2xl font-semibold'>/personal</span></h1>
                <div className="card-actions justify-end">
                    <Link to={`/SingleService/${_id}`}><button className="btn btn-primary font-bold">Details</button></Link>
                </div>

            </div>
        </div>
    );
};

export default MyserviceDetails;
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const ServiceSingle = ({ service }) => {
    const { img, name, cost, details, _id, rating } = service;
    console.log(_id);
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
                <p className='font-semibold text-xl  text-slate-800'>{
                    details ? details.slice(0, 100) + ' ...see more'
                        : 'undefined'}</p>

                <h1 className='text-3xl font-bold'><span className='text-yellow-600 text-4xl'>$</span>{cost} <span className='text-2xl font-semibold'>/personal</span></h1>
                <div className="card-actions justify-end">
                    <Link to={`/SingleService/${_id}`}><button className="btn btn-ghost bg-red-500  text-slate-900 font-bold">Details</button></Link>
                    <Link to='/review'><button className="btn btn-ghost text-slate-900 bg-yellow-600 font-bold">Review</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceSingle;
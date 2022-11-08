import React from 'react';
import { Link } from 'react-router-dom';

const MyserviceDetails = ({ service }) => {
    const { img, name, rating, cost, details, _id } = service
    return (
        <div className="card card-compact  bg-base-100 shadow-xl my-10 m-10">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-yellow-600">{name}</h2>
                <p className='font-semibold text-slate-800'>{details ? details.slice(0, 100) + `...see more` : 'undefined'}</p>
                <h1 className='text-3xl font-bold'><span className='text-yellow-600 text-4xl'>$</span>{cost} <span className='text-2xl font-semibold'>/personal</span></h1>
                <div className="card-actions justify-end">
                    <Link to={_id}><button className="btn btn-primary font-bold">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default MyserviceDetails;
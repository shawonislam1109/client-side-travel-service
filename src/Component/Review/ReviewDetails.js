import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewDetails = ({ reviewData, deleteReview }) => {



    const { author, image, address, spaces, _id } = reviewData;
    console.log(_id)
    return (
        <div className='md:w-9/12 p-10 md:p-5 border-4 lg:ml-20 ml-10 shadow-xl my-10 rounded-xl bg-slate-800'>
            <div className='flex justify-center items-center'>
                <img className='w-20 h-20 rounded-full border-yellow-500 border-4' src={image} alt="" />
            </div>
            <h1 className='text-xl font-bold text-center mt-3 text-white'>{author}</h1>
            <p className='text-center font-bold text-white'>{address}</p>
            <div className=' flex justify-center items-center text-yellow-600 text-md font-bold text-center mt-3'>
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </div>
            <div className='mt-7'>
                <p className='text-sm font-semibold text-white mt-3'>{spaces}</p>
            </div>
            <div className='text-end'>
                <button onClick={() => deleteReview(_id)} className='btn btn-ghost bg-yellow-500 text-black font-semibold'>Delete</button>
            </div>
        </div>
    );
};

export default ReviewDetails;
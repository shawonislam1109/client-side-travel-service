import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewDisplay = ({ review }) => {

    const { image, author, spaces, address } = review;
    console.log(author)
    return (
        <div>
            <div className=' p-10 md:p-5  border-4   shadow-xl  rounded-xl bg-slate-800'>
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
            </div>
        </div>
    );
};

export default ReviewDisplay;
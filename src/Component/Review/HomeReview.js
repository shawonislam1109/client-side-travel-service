import React, { useState, useEffect } from 'react';
import ReviewDisplay from './ReviewDisplay';


const HomeReview = () => {
    const [homeReview, setHomereview] = useState([]);

    const reviewData = homeReview.slice(0, 3);
    console.log(reviewData);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => {
                setHomereview(data)
            })
    }, [])
    return (
        <div className='md:w-9/12 mx-auto mt-10'>
            <h1 className='md:text-5xl text-3xl font-bold lg:font-extrabold text-center '><span className='text-yellow-500'>MY SERVICE</span> <span className='text-red-500'>REVIEW </span> </h1>
            <p className='text-center mt-9 md:text-xl font-bold text-blue-900'> This is my Service review  if you do like this  tourism service center <br />  you can comment this section and you can knows your opinion </p>

            <div className='grid lg:grid-cols-3 md:grid-cols-1 my-10  px-10 md:px-5' >
                {
                    reviewData.map(review => <ReviewDisplay
                        key={review._id}
                        review={review}
                    ></ReviewDisplay>)
                }
            </div>
        </div>
    );
};

export default HomeReview;
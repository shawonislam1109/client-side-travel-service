import React from 'react';

const WorkExpre = () => {
    return (
        <div>
            <div className='md:w-9/12 mx-auto mt-10 lg:mt-20'>
                <h1 className='md:text-5xl text-3xl font-bold lg:font-extrabold text-center '><span className='text-yellow-500'>MY WORK</span> <span className='text-red-500'>EXPERIENCE  </span> </h1>
                <p className='text-center mt-9 md:text-xl font-bold text-blue-900 '> My work experience is very good <br />  i have experience good work a lot and  with tourism company  </p>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 mt-20 justify-center items-center'>
                    <img className='w-40 h-40' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC-x0lFXnBSc2e5d70i2m288qOux3fYvqvCQ&usqp=CAU" alt="" />
                    <img className='w-40 h-40' src="https://previews.123rf.com/images/valterz/valterz1901/valterz190100002/122380586-vector-airline-logotype-travel-agency-tourism-app-flight-logo-air-company-logo-design-vector-templat.jpg" alt="" />
                    <img className='w-40 h-40' src="https://cdn.dribbble.com/users/3333696/screenshots/16304583/media/eba21ca6a56fd5064e03f762e15cf25e.gif?compress=1&resize=400x300" alt="" />
                    <img className='w-40 h-40' src="https://cdn.dribbble.com/users/2512810/screenshots/14349482/media/b8e7617409691249060120773787274e.jpg?compress=1&resize=400x300&vertical=top" alt="" />

                </div>
            </div>
        </div>
    );
};

export default WorkExpre;
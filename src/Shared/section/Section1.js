import React from 'react';
import logo from './shape.png'
const Section1 = () => {
    return (
        <div className='w-9/12 mx-auto my-28'>
            <h1 className='text-5xl text-center font-extrabold mb-10'> START YOUR  NEW <span className='text-yellow-500'>ADVENTURE</span> <br /> AROUND THE WORLD</h1>
            <div className='md:flex justify-around'>
                <div>
                    <img src={logo} alt="" />
                </div>

                <div className='ml-10'>
                    <p className='text-2xl mt-16 text-slate-500 font-bold'> my  experience brining adventure to
                        start the <br /> journey , all outdoor destinations in <br />
                        the world are our specialties</p>
                    <p className='mt-10 font-bold text-slate-500  text-2xl '>
                        So don't hesitate to start your adventure right now, <br /> nature has already called you !
                    </p>
                    <div className='lg:flex justify-between mt-20 mb-4'>
                        <div className='shadow-xl p-3 text-center bg-slate-100 rounded-lg mb-5'>
                            <h1 className='md:text-5xl font-extrabold text-yellow-500'>12K+</h1>
                            <p className='md:text-xl text-slate-500'>success <br /> journey</p>
                        </div>

                        <div className='shadow-xl p-3 text-center bg-slate-100 rounded-lg mb-5'>
                            <h1 className='md:text-5xl font-extrabold text-yellow-500'>16K+</h1>
                            <p className='md:text-xl text-slate-500'>Award <br /> wining</p>
                        </div>

                        <div className='shadow-xl p-3 text-center bg-slate-100 rounded-lg mb-5'>
                            <h1 className='md:text-5xl font-extrabold text-yellow-500'>20K+</h1>
                            <p className='md:text-xl text-slate-500'>Year of <br /> experience</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;
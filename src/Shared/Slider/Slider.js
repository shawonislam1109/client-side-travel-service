import React from 'react';
import './silder.css'

import image1 from './image/img1.jpg'
import image2 from './image/img2.jpg'
import image3 from './image/img3.jpg'
import image4 from './image/side.png'
import { Link } from 'react-router-dom';


const Slider = () => {


    return (
        <div className='lg:w-9/12 mx-auto mt-5'>
            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item  relative  w-full height">

                    <div className='carousel-item img-gradient w-full'>
                        <img alt='' src={image2} className="w-full brightness-75  lg:rounded-lg" />
                    </div>

                    <div className="absolute flex    transform -translate-y-1/2 left-7 top-20   md:left-20 md:top-32 ">
                        <h1 className=' text-2xl md:text-5xl text-left text-white  font-bold'> LIVE YOUR <br /> <span className='text-yellow-600 ml-3'>ADVENTURE</span></h1>
                    </div>
                    <div className="absolute flex    transform -translate-y-1/2 left-7 top-44 md:left-20 md:top-60">
                        <p className='text-left md:text-xl md:font-semibold text-white'>Don't wait until tomorrow, discover your <br />
                            adventure now and feel this sensation <br />
                            of closeness to nature around you </p>
                    </div>
                    <div className="absolute flex transform translate-y-1/2 md:-right-36 bottom-20  -right-40 ">
                        <img className='w-4/5 ' src={image4} alt="" />
                    </div>

                    <div className="absolute flex    transform -translate-y-1/2 left-20  bottom-48 md:bottom-36 ">
                        <Link to='/service'> <button className="btn btn-outline btn-warning">Explore more</button></Link>
                    </div>
                    <div className="absolute flex    transform -translate-y-1/2   left-5  bottom-5 ">
                        <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item  relative  w-full height">

                    <div className='carousel-item img-gradient w-full'>
                        <img alt='' src={image1} className="w-full brightness-75  lg:rounded-lg" />
                    </div>

                    <div className="absolute flex    transform -translate-y-1/2 left-7 top-20   md:left-20 md:top-32 ">
                        <h1 className=' text-2xl md:text-5xl text-left text-white  font-bold'> LIVE YOUR <br /> <span className='text-yellow-600 ml-3'>ADVENTURE</span></h1>
                    </div>
                    <div className="absolute flex    transform -translate-y-1/2 left-7 top-44 md:left-20 md:top-60">
                        <p className='text-left md:text-xl md:font-semibold text-white'>Don't wait until tomorrow, discover your <br />
                            adventure now and feel this sensation <br />
                            of closeness to nature around you </p>
                    </div>
                    <div className="absolute flex transform translate-y-1/2 md:-right-36 bottom-20  -right-40 ">
                        <img className='w-4/5 ' src={image4} alt="" />
                    </div>

                    <div className="absolute flex    transform -translate-y-1/2   left-20 md:bottom-36 bottom-48 ">
                        <Link to='/service'> <button className="btn btn-outline btn-warning">Explore more</button></Link>
                    </div>
                    <div className="absolute flex    transform -translate-y-1/2   left-5  bottom-5 ">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item  relative  w-full height">

                    <div className='carousel-item img-gradient w-full'>
                        <img alt='' src={image3} className="w-full brightness-75  lg:rounded-lg" />
                    </div>

                    <div className="absolute flex    transform -translate-y-1/2 left-7 top-20   md:left-20 md:top-32 ">
                        <h1 className=' text-2xl md:text-5xl text-left text-white  font-bold'> LIVE YOUR <br /> <span className='text-yellow-600 ml-3'>ADVENTURE</span></h1>
                    </div>
                    <div className="absolute flex    transform -translate-y-1/2 left-7 top-44 md:left-20 md:top-60">
                        <p className='text-left md:text-xl md:font-semibold text-white'>Don't wait until tomorrow, discover your <br />
                            adventure now and feel this sensation <br />
                            of closeness to nature around you </p>
                    </div>
                    <div className="absolute flex transform translate-y-1/2 md:-right-36 bottom-20  -right-40 ">
                        <img className='w-4/5 ' src={image4} alt="" />
                    </div>

                    <div className="absolute flex    transform -translate-y-1/2   left-20 md:bottom-36 bottom-48 ">
                        <Link to='/service'> <button className="btn btn-outline btn-warning">Explore more</button></Link>
                    </div>
                    <div className="absolute flex    transform -translate-y-1/2   left-5  bottom-5 ">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Slider;
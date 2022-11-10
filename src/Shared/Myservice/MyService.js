import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Myservice.css'
import MyserviceDetails from './MyserviceDetails';

const MyService = () => {
    const [count, setCount] = useState(0);
    const [service, setService] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(3);


    useEffect(() => {
        fetch(`http://localhost:5000/services?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setCount(data.count);
                setService(data.service);
            })
    }, [page, size])

    const pages = Math.ceil(count / size)

    return (
        <div className='md:w-9/12 mx-auto'>
            <h1 className='md:text-5xl text-3xl font-bold lg:font-extrabold text-center '>MY <span className='text-yellow-500'>SERVICE</span> </h1>
            <p className='text-center mt-9 md:text-xl font-bold text-blue-900'>my service is service is best service from anyone . <br />  My service is this  section in down</p>


            <div className='md:grid md:grid-cols-1 lg:grid-cols-3 mt-14 items-center justify-between'>
                {
                    service.map(service => <MyserviceDetails key={service._id} service={service}></MyserviceDetails>)
                }
            </div>

            <div className='text-end'>
                <button className='btn btn-ghost bg-yellow-500 w-32'><Link className='text-center' to='/service'>See all</Link></button>
            </div>

            {/* pagination  section */}
            <div className='md:w-9/12 mx-auto pagination'>
                {
                    [...Array(pages).keys()].map(number => <button
                        key={number}
                        className={page === number && 'selected'}

                        onClick={() => setPage(number)}
                    >
                        {number + 1}
                    </button>)
                }
                <select className='w-12 ml-5 bg-red-500 h-16 rounded-md' onBlur={(event) => setSize(event.target.value)}>
                    <option value="2">2</option>
                    <option value="3" selected>3</option>
                </select>
            </div>

        </div>
    );
};

export default MyService;
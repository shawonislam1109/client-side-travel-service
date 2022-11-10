import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Update = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const reviewData = useLoaderData();
    const [update, setUpdate] = useState({});

    const handleUpdate = (event) => {
        event.preventDefault();

        fetch(`https://service-review-sever.vercel.app/review/${reviewData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('update successfully')
                navigate('/review')

            })
    }

    const handleBlur = (event) => {

        const form = event.target;

        const filed = form.name;
        const value = form.value;

        const updateData = { ...update }
        updateData[filed] = value;
        setUpdate(updateData);
    }



    return (
        <div>
            <div className='md:w-9/12 w-4/6 mx-auto p-5 md:p-3'>
                <form onSubmit={handleUpdate}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-10'>
                        <div>
                            <label className='text-xl font-bold' htmlFor="">Author name</label>
                            <input onChange={handleBlur} name='author' type="text" placeholder=" name" className="input input-bordered w-full" required />
                        </div>

                        <div>
                            <label className='text-xl font-bold' htmlFor="">Author Photo URL</label>
                            <input onChange={handleBlur} name='image' type="text" placeholder="Your Photo link " className="input input-bordered w-full " required />
                        </div>
                        <div>
                            <label className='text-xl font-bold' htmlFor="">Author Address</label>
                            <input onChange={handleBlur} name='address' type="text" placeholder="Author Address " className="input input-bordered w-full " required />
                        </div>

                        <div>
                            <label className='text-xl font-bold' htmlFor="">Email</label>
                            <input onChange={handleBlur} name='email' type="text" placeholder="your email" className="input input-bordered w-full " defaultValue={user?.email} readOnly />
                        </div>
                    </div>
                    <textarea onChange={handleBlur} name='spaces' className="textarea textarea-bordered my-5 w-full h-32" placeholder="Bio"></textarea>
                    <div className='text-center mb-5'>
                        <button className="btn btn-ghost bg-yellow-500 font-bold">Updated</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;
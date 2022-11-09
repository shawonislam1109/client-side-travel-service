import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Review = () => {

    const { user } = useContext(AuthContext);
    const handlePlaceOrder = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const email = user?.email || 'unregister'
        const spaces = form.spaces.value;
        const address = form.address.value;


        const review = {
            author: name,
            email,
            image,
            address,
            spaces
        }
        console.log(review)

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset();
                    toast.success('Successfully Added Review')
                }
            })
            .catch(er => console.error(er));
    }
    return (
        <div className='md:w-4/12 w-4/6 mx-auto p-5 md:p-3'>
            <form onSubmit={handlePlaceOrder}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-10'>
                    <div>
                        <label className='text-xl font-bold' htmlFor="">Author name</label>
                        <input name='name' type="text" placeholder=" name" className="input input-bordered w-full " required />
                    </div>

                    <div>
                        <label className='text-xl font-bold' htmlFor="">Author Photo URL</label>
                        <input name='image' type="text" placeholder="Your Photo link " className="input input-bordered w-full " required />
                    </div>
                    <div>
                        <label className='text-xl font-bold' htmlFor="">Author Address</label>
                        <input name='address' type="text" placeholder="Author Address " className="input input-bordered w-full " required />
                    </div>

                    <div>
                        <label className='text-xl font-bold' htmlFor="">Email</label>
                        <input name='email' type="text" placeholder="your email" className="input input-bordered w-full " defaultValue={user?.email} readOnly />
                    </div>
                </div>
                <textarea name='spaces' className="textarea textarea-bordered my-5 w-full h-32" placeholder="Bio"></textarea>
                <div className='text-center mb-5'>
                    <button className="btn btn-ghost bg-yellow-500 font-bold">Add review</button>
                </div>
            </form>
        </div>
    );
};

export default Review;
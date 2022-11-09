import React from 'react';
import { Navigate } from 'react-router-dom';


const AddService = () => {
    const handlePlaceOrder = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.Location.value;
        const img = form.photo.value;
        const details = form.details.value;
        const rating = form.rating.value;
        const cost = form.cost.value;


        const addReview = {
            name,
            img,
            details,
            rating,
            cost

        }
        console.log(addReview)

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset();
                    <Navigate to='/service'></Navigate>
                }
            })
            .catch(er => console.error(er));
    }
    return (
        <div className='md:w-9/12 mx-auto'>
            <form onSubmit={handlePlaceOrder}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-10'>
                    <div>
                        <label className='text-xl font-bold' htmlFor="">Location Name</label>
                        <input name='Location' type="text" placeholder="Location" className="input input-bordered w-full " required />

                    </div>
                    <div>
                        <label className='text-xl font-bold' htmlFor="">Photo URL Link</label>
                        <input name='photo' type="text" placeholder="Your Photo url" className="input input-bordered w-full " required />
                    </div>
                    <div>
                        <label className='text-xl font-bold' htmlFor="">Place Rating</label>
                        <input name='rating' type="text" placeholder="rating" className="input input-bordered w-full " required />
                    </div>
                    <div>
                        <label className='text-xl font-bold' htmlFor="">Cost</label>
                        <input name='cost' type="number" placeholder="cost" className="input input-bordered w-full " required />
                    </div>

                </div>
                <div>
                    <label className='text-xl font-bold' htmlFor="">Place Details</label>
                    <textarea name='details' className="textarea textarea-bordered my-5 w-full h-32" placeholder="details"></textarea>
                </div>
                <div className='text-center mb-5'>
                    <button className="btn btn-ghost bg-yellow-500 font-bold">ADD SERVICE</button>
                </div>
            </form>
        </div>
    );
};

export default AddService;
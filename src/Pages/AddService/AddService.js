import React from 'react';

const AddService = () => {

    const handelAddService = (event) => {

        event.preventDefault();
        const element = event.target;
        const image = element.image.value;
        const serviceName = element.serviceName.value;
        const fee = parseFloat(element.fee.value);
        const rating = parseFloat(element.rating.value);
        const description = element.description.value;

        const insertService = {
            image, serviceName, fee, rating, description
        }
        console.log(insertService);

        fetch('https://service-review-server-armanaru07.vercel.app/addService', {

            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(insertService)
        }).then((res) => res.json())
            .then((data) => {
                console.log(data);
                element.reset();
            }).catch((error) => {
                console.error(error.message);
            })

    }


    return (
        <div>
            <h1 className='lg:text-6xl text-center p-4'>Add Services</h1>
            <form onSubmit={handelAddService} className='m-4 p-4'>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="text" name='image' placeholder="Image URL" className="input input-bordered w-full max-w-xs" required/>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Service Name</span>
                    </label>
                    <input type="text" name='serviceName' placeholder="Service Name" className="input input-bordered w-full max-w-xs" required/>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Fee</span>
                    </label>
                    <input type="text" name='fee' placeholder="Fee" className="input input-bordered w-full max-w-xs" required/>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="number" name='rating' placeholder="Rating" className="input input-bordered w-full max-w-xs" required/>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" name='description' placeholder="Description" className="input input-bordered w-full max-w-xs" required/>
                </div>
                <button className="btn btn-outline btn-primary m-4">Add service</button>
            </form>
        </div>
    );
};

export default AddService;
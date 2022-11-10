import React from 'react';

const AddService = () => {
    return (
        <div>
            <h1 className='lg:text-6xl text-center p-4'>Add Services</h1>
            <div className='m-4 p-4'>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Service ID</span>
                    </label>
                    <input type="number" placeholder="Service ID" className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="text" placeholder="Image URL" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Service Name</span>
                    </label>
                    <input type="text" placeholder="Service Name" className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Fee</span>
                    </label>
                    <input type="number" placeholder="Fee" className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="number" placeholder="Rating" className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" placeholder="Description" className="input input-bordered w-full max-w-xs" />
                </div>
            </div>
        </div>
    );
};

export default AddService;
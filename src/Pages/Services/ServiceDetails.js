import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const ServiceDetails = () => {
    const servicesDetails = useLoaderData();
    console.log(servicesDetails);
    return (
        <div>
            <div className=" border rounded hero min-h-screen bg-base-200 mb-6">
                <div className="hero-content flex-col lg:flex-row">
                    <PhotoProvider>
                        <PhotoView src={servicesDetails[0].image}>
                        <img alt='' src={servicesDetails[0].image} className="max-w-lg rounded-lg shadow-2xl" />
                        </PhotoView>
                    </PhotoProvider>
                    
                    <div>
                        <h1 className="text-5xl font-bold">{servicesDetails[0].serviceName}</h1>
                        <p className="py-6">{servicesDetails[0].description}</p>
                        <p className='font-bold'>Fee:$ {servicesDetails[0].fee}</p>
                        <p className='font-bold'>Rating: {servicesDetails[0].rating}</p>
                        <button className="btn btn-outline btn-success m-4 ">Book Appointment</button>
                    </div>
                </div>
            </div>
            <h1 className="text-5xl text-center font-bold">Ratting</h1>
            <div className=" border rounded hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                    <input type="text" placeholder="Feedback" className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ServiceDetails;
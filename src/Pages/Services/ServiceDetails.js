import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const ServiceDetails = () => {
    const servicesDetails = useLoaderData();
    console.log(servicesDetails);

    const { user } = useContext(AuthContext);


    const [review, setReview] = useState([])

    useEffect(() => {

        fetch(`http://localhost:5000/serviceReview?${review.serviceName}`).then((res) => res.json()).then((data) => {

            setReview(data);
        }).catch((error) => {
            console.log(error.message);
        })

    }, [review.serviceName])

    console.log(review)


    const handelSubmit = (event) => {

        event.preventDefault();
        const element = event.target;
        const text = element.text.value;
        const email = user?.email || 'unauthorized-user';
        const serviceName = servicesDetails[0].serviceName;

        console.log(text);

        const reviewData = {
            text, email, serviceName
        }

        fetch('https://service-review-server-armanaru07.vercel.app/review', {

            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewData)


        }).then((res) => res.json()).then((data) => {
            console.log(data);
        }).catch((error) => {
            console.error(error.message);
        })





    }
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
            <h1 className="text-5xl text-center font-bold">Feedback</h1>

            <div className=" border rounded hero bg-base-200">
                <div className="m-4 p-4">

                    {
                        review.map(review => <ul key={review._id}>
                            <li className='border m-2 p-4'>{review.email} <br />{review.text}</li>
                        </ul>)
                    }
                </div>
            </div>
            {
                user?.email ?
                    <div className=" border rounded hero bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <form onSubmit={handelSubmit}>
                                <div>
                                    <input type="text" name='text' placeholder="Your Feedback" className="input input-bordered input-primary w-full max-w-xs" required />
                                </div>
                                <button className="btn btn-outline btn-success m-4 ">Submit</button>
                            </form>
                        </div>
                    </div>
                    :
            <di>
                <p className='text-center'>If You want to feedback Please <Link className='font-bold' to='/login'>Login</Link></p>
            </di>

            }



        </div>
    );
};

export default ServiceDetails;
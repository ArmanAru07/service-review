import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const MyReview = () => {

    const {user}=useContext(AuthContext);

    const [review, setReview] = useState([])


    const Delete = (_id) => {
        const confirmation = window.confirm("Are you sure you want to DELETE this review");
        if (confirmation) {
            console.log(_id)
            fetch(`https://service-review-server-armanaru07.vercel.app/reviews/${_id}`, {
                method: 'DELETE',
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.acknowledged) {
                        alert('Success')
                    }
                    const remaining = review.filter(rev => rev._id !== _id);
                    setReview(remaining);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }


    useEffect(() => {

        fetch(`hhttps://service-review-server-armanaru07.vercel.app/MyReview?email=${user?.email}`).then((res) => res.json()).then((data) => {

            setReview(data);
        }).catch((error) => {
            console.log(error.message);
        })

    },[user?.email])

    console.log(review)




    return (

        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                </label>
                            </th>
                            <th>User</th>
                            <th>Service Name</th>
                            <th>Feedback</th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        review.map(review => <tbody key={review._id}>
                            {/* <!-- row 1 --> */}
                            <tr>
                                <th>
                                    <button onClick={()=>Delete(review._id)} className="btn btn-square btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.image} alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{review.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {review.serviceName}
                                    <br />
                                </td>
                                <td>{review.text}</td>
                                <th>
                                    <button className="btn btn-outline btn-xs">Edit</button>
                                </th>
                            </tr>
                        </tbody>)
                    }
                    
                    {/* <!-- foot --> */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>User</th>
                            <th>Service Name</th>
                            <th>Feedback</th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
            </div>


        </div>


    );
};

export default MyReview;
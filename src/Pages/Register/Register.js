import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.img.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, image, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                navigate('/login');
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
    }
    return (
        <div>
            <h1 className="text-center text-5xl font-bold p-4">Register now..!</h1>
            <div className="hero ">
                <div className="hero-content">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        {/* register form */}
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">image url</span>
                                </label>
                                <input name='img' type="text" placeholder="image url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>
                            <p className='text-danger'>{error}</p>
                        </form>
                        <p className='m-4 text-center'>If you have an account <Link to='/login' className='text-primary font-bold'>Login</Link></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
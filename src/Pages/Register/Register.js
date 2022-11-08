import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleSignUp = event => {
        event.preventDefault();
    }
    return (
        <div>
        <h1 className="text-center text-5xl font-bold p-4">Register now..!</h1>
        <div className="hero ">
        <div className="hero-content">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                {/* register form */}
                <form onSubmit={handleSignUp} className="card-body">
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
                        <input className="btn btn-primary" type="submit" value="Register"/>
                    </div>
                </form>
                <p className='m-4 text-center'>If you have an account <Link to='/login' className='text-primary font-bold'>Login</Link></p>
                
            </div>
        </div>
    </div>
    </div>
    );
};

export default Register;
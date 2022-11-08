import { GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle } from "react-icons/fa";
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const {providerLogin, signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    //google signIn
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate('/')
        })
        .catch(error => console.error(error))
    }
    //login with email and pass
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                setError('');
                navigate(from, {replace: true});
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
        
    }

    return (
        <div>
            <h1 className="text-center text-5xl font-bold p-4">Login now..!</h1>
            <div className="hero ">
            <div className="hero-content">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    {/* login form */}
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login"/>
                            <button className="m-3 rounded btn btn-outline btn-primary" onClick={handleGoogleSignIn}><FaGoogle></FaGoogle> Google Sign in</button>
                        </div>
                        <p className='text-danger'>{error}</p>
                    </form>
                    <p className='m-4 text-center'>New to hare Please <Link to='/register' className='text-primary font-bold'>Register</Link></p>
                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;
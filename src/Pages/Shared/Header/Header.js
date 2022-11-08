import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar h-16 mb-2 bg-base-100">
            <div className="flex-1">
                <Link to={"/"} className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div className="flex-1 font-semibold">
                <Link to={"/"} className="mr-5">Home</Link>
                <Link to={"/services"} className="mr-5">Services</Link>
                <Link to={"/review"} className="mr-5">Review</Link>
                <Link to={"/blog"} className="mr-5">Blog</Link>
            </div>
            <div className="flex-none gap-2">
                <Link to={"/login"} className="mr-5">Login</Link>
                <Link to={"/register"} className="mr-5">Register</Link>

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt='' src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a href='/' className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a href='/'>Settings</a></li>
                        <li><a href='/'>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
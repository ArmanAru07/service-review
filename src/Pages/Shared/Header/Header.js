import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to={"/"} className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div className="flex-1">
                <Link to={"/services"} className="mr-5">Services</Link>
                <Link to={"/review"}>Review</Link>
            </div>
            <div className="flex-none gap-2">

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
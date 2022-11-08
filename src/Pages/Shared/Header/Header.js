import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className="navbar h-16 mb-2 bg-base-100">
            <div className="flex-1">
                <Link to={"/"} className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div className="flex-1 font-semibold">
                <Link to={"/"} className="mr-5">Home</Link>
                <Link to={"/services"} className="mr-5">Services</Link>
                <Link to={"/blog"} className="mr-5">Blog</Link>
            </div>
            <div className="flex-none font-semibold gap-2">

                {
                    user?.email ?
                        <>
                            <Link to={"/add-services"} className="mr-5">Add Services</Link>
                            <Link to={"/my-review"} className="mr-5">My Review</Link>
                            <div className="dropdown dropdown-end">
                                <span >{user?.displayName}</span>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt='' src={user?.photoURL} />
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
                                    <li><a onClick={handleLogOut} href='/'>Logout</a></li>
                                </ul>
                            </div>

                        </>
                        :
                        <>
                            <Link to={"/login"} className="mr-5">Login</Link>
                            <Link to={"/register"} className="mr-5">Register</Link>
                        </>
                }

            </div>
        </div>
    );
};

export default Header;
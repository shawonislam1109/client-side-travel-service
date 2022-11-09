import React, { useContext } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import logo from './travle-removebg-preview.png'
import { AuthContext } from '../../Component/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const Logout = () => {
        logOut()
            .then(() => { })
            .then(error => console.error(error));
    }


    return (
        <div className=' h-16 lg:w-9/12 mx-auto ' >
            <div className="navbar bg-base-100 backgrounds border  shadow-xl">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="   bg-yellow-400 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='text-lg text-slate-800 font-semibold'><Link to='/home'>Home</Link></li>
                            <li className='text-lg text-slate-800 font-semibold' tabIndex={0}><Link to='/service' >Service</Link>
                            </li>
                            <li className='text-lg text-slate-800 font-semibold'><Link to='/review'>Review</Link></li>
                            <li className='text-lg text-white font-semibold'><Link to='/blog'>Blog</Link></li>
                        </ul>
                    </div>
                    <div className='flex justify-center items-center '>
                        <img className='w-9 ml-5 lg:ml-10 md:w-12' src={logo} alt="" />
                        <Link to='/home' className="btn btn-ghost  normal-case lg:text-2xl text-md text-yellow-500 lg:font-bold">LOVE TO TRAVEL</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex ml-5 lg:ml-10">
                    <ul className="menu menu-horizontal p-0">
                        <li className='text-lg text-white  '><Link to='/home'>Home</Link></li>
                        <li className='text-lg text-white ' tabIndex={0}>
                            <Link to='/service'>Service</Link>
                        </li>
                        <li className='text-lg text-white '><Link to='/review'>Review</Link></li>
                        <li className='text-lg text-white '><Link to='/blog'>Blog</Link></li>

                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.uid ?
                            <>
                                <button onClick={Logout} className='btn btn-ghost md:text-md text-white md:font-medium '><Link>Log Out</Link></button>
                                <img className='md:w-12 md:h-12 h-7 w-7 rounded-full' src={user.photoURL} alt="" />
                            </>
                            :
                            <>
                                <button className=' btn  btn-ghost md:text-md text-white md:font-medium' tabIndex={0}>
                                    <Link to='/login'>Log In </Link>
                                </button>
                                <button className='md:text-md btn  btn-ghost text-white md:font-medium'><Link to='/signup'>Sign Up</Link></button>

                            </>
                    }
                </div>
            </div>
        </div >
    );
};

export default Header;
import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import logo from './travle-removebg-preview.png'

const Header = () => {
    return (
        <div className=' h-16 lg:w-9/12 mx-auto ' >
            <div className="navbar bg-base-100 backgrounds border  shadow-xl">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link>Item 1</Link></li>
                            <li tabIndex={0}>
                                <Link className="justify-between">
                                    Parent
                                </Link>

                            </li>
                            <li><Link>Item 3</Link></li>
                        </ul>
                    </div>
                    <div className='flex justify-center items-center '>
                        <img className='w-16' src={logo} alt="" />
                        <Link className="btn btn-ghost  normal-case text-3xl text-yellow-500 font-bold">LOVE TO TRAVEL</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link>Item 1</Link></li>
                        <li tabIndex={0}>
                            <Link>parent</Link>
                        </li>
                        <li><Link>Item 3</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn">Get started</Link>
                </div>
            </div>
        </div >
    );
};

export default Header;
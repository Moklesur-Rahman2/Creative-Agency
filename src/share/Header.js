import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'

const Header = () => {
    return (
        <header className=' absolute w-full top-0 z-10'>
            <div className="container mx-auto">
                <div className="navbar pt-5">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabindex="0" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li tabindex="0">
                                    <a className="justify-between">
                                        Parent
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                    </a>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>
                        <Link to='/' className="btn btn-ghost normal-case text-xl">
                            <img src={logo} alt="logo" className=' w-36' />
                        </Link>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal p-0">
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/'>Our Portfolio</Link></li>
                                <li><Link to='/'>Our Team</Link></li>
                                <li><Link to='/'>Contact Us</Link></li>
                            </ul>
                        </div>
                        <Link to='/login' className="btn btn-secondary text-white">Login</Link>
                    </div>
                </div>
            </div>

        </header>
    );
};

export default Header;
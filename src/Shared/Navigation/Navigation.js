import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import {AiOutlineMenu} from "react-icons/ai";
import {BsCart2} from "react-icons/bs";

const Navigation = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <header>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                        className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
                        href="#pablo"
                        >
                        <img src={logo} alt="Logo" style={{width: '150px'}} />
                        </Link>
                        <button
                        className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                        <AiOutlineMenu />
                        </button>
                    </div>
                    <div
                        className={
                        "lg:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:mr-auto">
                            <li className="nav-item">
                                <Link to="/home" className="px-3 py-2 text-md uppercase text-black hover:opacity-75">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/products" className="px-3 py-2 text-md uppercase text-black hover:opacity-75">
                                    Explore More
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="px-3 py-2 text-md uppercase text-black hover:opacity-75">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blog" className="px-3 py-2 text-md uppercase text-black hover:opacity-75">
                                    Blog
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="px-3 py-2 text-md uppercase text-black hover:opacity-75">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        <div className="flex flex-items-center lg:ml-auto">
                            <button><BsCart2 className="mr-2 text-2xl"/></button>
                            <Link to="/login" className="mx-2 px-4 py-2 bg-blue-500 text-white">Login</Link>
                            <Link to="/register" className="ml-2 px-4 py-2 bg-blue-500 text-white">Register</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navigation;
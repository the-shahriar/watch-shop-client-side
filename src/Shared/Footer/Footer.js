import React from 'react';
import {GiSelfLove} from "react-icons/gi";
import {BsFacebook, BsInstagram, BsTwitter, BsYoutube} from "react-icons/bs";

import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer bg-white relative pt-1 border-b-2 border-blue-700">
            <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
                <div className="container mx-auto px-6">
                    <div className="sm:flex sm:mt-8">
                        <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                            <div className="flex flex-col">
                                <img style={{width: "220px"}} src={logo} alt="" />
                                <p className="md:text-md text-sm font-medium text-gray-500 mt-3">Discover Leading Designer Brands At The UK's <br /> Largest Independent Online Watch Retailer. Buy Now <br /> & Pay Later By Spreading Your Payments Monthly With <br /> Openpay. 0% Finance Available. Free Next Day Delivery* Price Promise. </p>
                                <div className="flex mt-4">
                                    <BsFacebook className="text-2xl text-gray-600 mr-5"/>
                                    <BsInstagram className="text-2xl text-gray-600 mr-5"/>
                                    <BsTwitter className="text-2xl text-gray-600 mr-5"/>
                                    <BsYoutube className="text-2xl text-gray-600"/>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-xl text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                                    Links
                                </span>
                                <span className="my-2">
                                    <Link to="/about" className="text-gray-700 font-semibold text-md hover:text-blue-500">About Us
                                    </Link>
                                </span>
                                <span className="my-2">
                                    <Link to="/contact" className="text-gray-700 font-semibold text-md hover:text-blue-500">Contact
                                    </Link>
                                </span>
                                <span className="my-2">
                                    <Link to="/faq" className="text-gray-700 font-semibold text-md hover:text-blue-500">FAQ
                                    </Link>
                                </span>
                                <span className="my-2">
                                    <Link to="/terms" className="text-gray-700 font-semibold text-md hover:text-blue-500">Terms & Conditions
                                    </Link>
                                </span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-xl text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                                    Newsletter
                                </span>
                                <div className="form-container">
                                    <input className="newsletter-form border-2 border-blue-600" type="text" placeholder="Enter your email.." />
                                    <button className="subscribe px-5 py-2 bg-blue-500 text-white">Subscribe</button>
                                    <p className="font-medium text-sm text-gray-500">Subscribe to get offers and latest news</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-6">
                    <div className="text-center pt-12 pb-6">
                        <p className="text-sm text-gray-700 font-bold mb-2">
                            Made with <button><GiSelfLove className="text-xl text-red-600"/></button> from <a href="https://the-shahriar.github.io">Shahriar Islam</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
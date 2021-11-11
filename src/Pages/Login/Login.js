import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import {HiMail} from "react-icons/hi";
import {FaLock} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";

const Login = () => {
    return (
        <div>
            {/* Header Here */}
            <Navigation></Navigation>

            <div className="flex flex-col h-screen bg-white">
                <div className="grid place-items-center mx-2 my-20 sm:my-auto">

                    <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
                        px-6 py-10 sm:px-10 sm:py-6 
                        bg-gray-100 rounded-lg shadow-md lg:shadow-lg">

                        <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
                            Login
                        </h2>

                        <form className="mt-10">
                            <label htmlFor="email" className="block text-xs mb-2 font-semibold text-gray-600 uppercase">E-mail</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><HiMail className="mdi mdi-email-outline text-gray-400 text-lg" /></div>
                                <input type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="johnsmith@example.com" required/>
                            </div>

                            <label htmlFor="password" className="block mt-8 mb-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><FaLock className="mdi mdi-lock-outline text-gray-400 text-lg" /></div>
                                <input type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="************" required/>
                            </div>

                            <input type="submit" value="Login" className="w-full py-3 mt-10 bg-blue-700 rounded-sm font-medium text-white uppercase cursor-pointer focus:outline-none hover:bg-gray-700 hover:shadow-none"/>

                            <p className="text-gray-700 text-xl text-center">or</p>

                            <button className="py-2 w-full mt-5 border-gray-400 border-2 rounded-sm font-medium text-gray-700 uppercase cursor-pointer focus:outline-none hover:bg-gray-200 hover:shadow-none">
                                 Continue with <FcGoogle className="text-4xl inline"/> 
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Footer Here */}
            <Footer></Footer>
        </div>
    );
};

export default Login;
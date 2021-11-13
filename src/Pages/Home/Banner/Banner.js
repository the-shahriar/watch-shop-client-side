import React from 'react';
import bannerImage from '../../../assets/bannerImage/slider-bg1.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className="home-banner">
            <div className="banner flex flex-col lg:flex-row">
                <div className="left">
                    <p className="text-2xl font-semibold mb-5 text-gray-500">Here to make heads turn</p>
                    <h2 className="text-5xl font-bold mb-5 uppercase title text-gray-600">The future of tech is here</h2>
                    <button className="px-5 py-3 bg-blue-600 text-white">Shop Now</button>
                </div>
                <div>
                    <img className="banner-image" src={bannerImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
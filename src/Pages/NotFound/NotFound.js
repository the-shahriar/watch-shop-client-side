import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/404error.png';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const NotFound = () => {
    return (
        <div>
            {/* Header Here */}
            <Navigation></Navigation>
            <div className="text-center my-16">
                <img src={image} alt="" style={{margin: 'auto'}} />
                <Link to="/home">
                   <button className="px-5 py-2 bg-blue-600 text-white">Back To Home</button>
                </Link>
            </div>

            {/* Footer Here */}
            <Footer></Footer>
        </div>
    );
};

export default NotFound;
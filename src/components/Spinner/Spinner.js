import React from 'react';
import './Spinner.css';

const Spinner = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-700"
            ></div>
        </div>
    );
};

export default Spinner;
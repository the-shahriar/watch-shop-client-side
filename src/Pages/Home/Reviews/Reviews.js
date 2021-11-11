import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import {BsStarFill, BsStar} from "react-icons/bs";
import './Reviews.css';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/reviews')
        .then(result => {
            setReviews(result.data);
        })
    },[])


    return (
       <div className="my-36">
            <h2 className="font-bold text-4xl text-center capitalize text-gray-600">Reviews of our valuable clients</h2>
            <div className="home-banner grid grid-cols-2 md:grid-cols-2 gap-8 mx-auto">
            
                {
                        reviews.map(singleReview => {
                            const {_id, name, review, rating} = singleReview;
                            return (
                                <div key={_id} className="review p-12">
                                    <Rating
                                        initialRating={rating}
                                        readonly
                                        emptySymbol={<BsStar  className="text-yellow-400"/>}
                                        fullSymbol={<BsStarFill className="text-yellow-400"/>}
                                    />
                                    <h2 className="font-semibold text-xl text-gray-700">{name}</h2>
                                    <p className="text-md font-semibold w-4/5">{review}</p>
                                </div>
                            )
                        })
                    }
            </div>
       </div>
    );
};

export default Reviews;
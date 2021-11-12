import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const Review = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axios.put('http://localhost:5000/reviews', data)
        .then(result => {
            console.log(result.data);
            if(data.acknowledged){
                alert("Thank you for your review")
                reset();
            }
        })
    };

    return (
        <div className="home-banner">
            <h2 className="text-3xl ml-7 text-green-700 font-medium uppercase">Feedback are an inspiration</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="ml-4 mt-6">
                <div className="w-3/5 px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">Your Name</label>
                    <div className="flex">
                        <input {...register("name")} type="text" className="w-full pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="Adam Smith" />
                    </div>
                </div>
                <div className="w-3/5 px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">Your Email</label>
                    <div className="flex">
                        <input {...register("email")} type="email" className="w-full pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="john.smith@gmail.com" />
                    </div>
                </div>
               
                <div className="w-3/5 px-3 mb-4">
                    <label htmlFor="" className="text-xs font-semibold px-1">Write Review</label>
                    <div className="flex">
                        <textarea {...register("review")} className="w-full pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" name="review" placeholder="Your Review" cols="4" rows="5"></textarea>
                    </div>
                </div>

                <div className="ml-4 mb-6">
                    <h2 className="text-md font-medium">Please rate us</h2>
                    <div className="flex">
                        <div className="mr-4">
                            <input  {...register("rating")} type="radio" name="rating" value="1" />
                            <label htmlFor="very poor"> Very poor</label>
                        </div>

                        <div className="mr-4">
                            <input {...register("rating")} type="radio" name="rating" value="2" />
                            <label htmlFor="Poor"> Poor</label>
                        </div>
                        <div className="mr-4">
                            <input {...register("rating")} type="radio" name="rating" value="3" />
                            <label htmlFor="Good"> Good</label>
                        </div>
                        <div className="mr-4">
                            <input {...register("rating")} type="radio" name="rating" value="4" />
                            <label htmlFor="Better"> Better</label>
                        </div>

                        <div>
                            <input {...register("rating")} type="radio" name="rating" value="5" />
                            <label htmlFor="Best"> Best</label>
                        </div>
                    </div>
                </div>

                <button type="submit" className="px-8 ml-4 mt-2 py-3 bg-blue-600 rounded-sm font-medium text-white uppercase cursor-pointer focus:outline-none hover:bg-gray-600 hover:shadow-none">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Review;
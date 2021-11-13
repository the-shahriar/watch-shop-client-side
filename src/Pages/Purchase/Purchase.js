import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import {BsStar, BsStarFill} from "react-icons/bs";
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";


const Purchase = () => {
    const [addedProduct, setAddedProduct] = useState({});
    const [savedToDb, setSavedToDb] = useState(false);
    const { id } = useParams();
    const { user } = useAuth();
    
    const url = `http://localhost:5000/products/${id}`;
    
    useEffect(()=> {
        axios.get(url)
        .then(result => {
            setAddedProduct(result.data);
        })
    },[url])

    const {image, regularPrice, offerPrice, brand, title, rating, description} = addedProduct;

    // react hook form
    const { register, handleSubmit, setFocus, setValue, reset} = useForm();

    // set value to get the value properly
    useEffect(() => {
        setValue('email', user.email);
        setValue('price', offerPrice? offerPrice : regularPrice);
    }, [user.email, regularPrice, offerPrice, setValue])

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/orders', data)
        .then(result => {
            const confirmation = result.data;
            if(confirmation.acknowledged === true){
                setSavedToDb(true);
            }
        })
        reset();
    };

     // set focus to get field value if missed out
     useEffect(() => {
        setFocus("name");
    }, [setFocus]);

    return (
        <div>
            {/* Hader here */}
            <Navigation></Navigation>
            
                <div className="home-banner">
                    {/* Product Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <img src={image} style={{height: "450px"}} alt="" />
                            <div className="product-info p-8">
                                <h4 className="md:-mt-12 font-medium text-blue-500 text-md uppercase">
                                    {brand}
                                </h4>
                                <h2 className="text-2xl my-3">{title}</h2>
                                <Rating
                                    initialRating={rating}
                                    readonly
                                    emptySymbol={<BsStar  className="text-yellow-500"/>}
                                    fullSymbol={<BsStarFill className="text-yellow-500"/>}
                                />

                                <p className="text-gray-800 font-medium my-3">{description}</p>

                                {
                                    offerPrice ?
                                        <p className="font-bold text-xl text-gray-800">${offerPrice} 
                                            <span className="line-through text-gray-600 text-sm ml-1">     
                                            ${regularPrice}
                                            </span>
                                        </p>
                                    :
                                    <p className="font-bold text-xl text-gray-800">${regularPrice}</p>
                                }
                            </div>
                        </div>

                        {/* Address form */}
                    <div className="md:mt-28">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="w-4/5 px-2 mb-5">
                                <label htmlFor="" className="text-sm font-semibold px-1">Name*</label>
                                <input {...register("name")} type="text" className="w-full pl-3 py-2 rounded-sm border-2 border-gray-200 outline-none focus:border-blue-500" value={user?.displayName} readOnly required />
                            </div>
                            <div className="w-4/5 px-2 mb-5">
                                <label htmlFor="" className="text-sm font-semibold px-1">Phone*</label>
                                <input {...register("phone")} type="text" className="w-full pl-3 py-2 rounded-sm border-2 border-gray-200 outline-none focus:border-blue-500" required />
                            </div>
                            <div className="w-4/5 px-2 mb-5">
                                <label htmlFor="" className="text-sm font-semibold px-1">Email*</label>
                                <input {...register("email")} type="email" className="w-full pl-3 py-2 rounded-sm border-2 border-gray-200 outline-none focus:border-blue-500" defaultValue={user?.email} readOnly required />
                            </div>
                            <div className="w-4/5 px-2 mb-5">
                                <label htmlFor="" className="text-sm font-semibold px-1">Price</label>
                                <input {...register("price")} type="email" className="w-full pl-3 py-2 rounded-sm border-2 border-gray-200 outline-none focus:border-blue-500" defaultValue={regularPrice} readOnly />
                            </div>
                            <div className="w-4/5 px-2 mb-5">
                                <label htmlFor="" className="text-sm font-semibold px-1">Quantity</label>
                                <select className="w-full pl-3 py-2 rounded-sm border-2 border-gray-200 outline-none focus:border-blue-500" required {...register("quantity")}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                            <div className="w-4/5 px-2 mb-5">
                                <label htmlFor="" className="text-sm font-semibold px-1">Full Address* i.e. House, Road, Area</label>
                                <input {...register("address")} type="text" className="w-full pl-3 py-2 rounded-sm border-2 border-gray-200 outline-none focus:border-blue-500" required />
                                {/* Hidded Inputs */}
                                <input 
                                    {...register("productId")} 
                                    type="hidden"
                                    defaultValue={id}
                                />
                                <input 
                                    {...register("status")} 
                                    type="hidden"
                                    defaultValue="pending"
                                />
                            </div>
                            {
                                savedToDb && (
                                    <p className="bg-green-500 px-4 w-3/4 ml-2 py-3 text-white mb-3 text-md">You have successfully purchased the product</p>
                                ) 
                            }
                            <button type="submit" className="bg-gray-600 py-2 ml-2 text-white mt-3 px-12">Purchase</button>
                        </form>
                    </div>
                    </div>
                </div>

            {/* Footer here */}
            <Footer></Footer>
        </div>
    );
};

export default Purchase;
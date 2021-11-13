import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const AddProduct = () => {
    const [productData, setProductData] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...productData };
        newData[field] = value;
        setProductData(newData);
    }

    const addNewProduct = e => {
        axios.post('https://serene-hamlet-29460.herokuapp.com/products', productData)
        .then(result => {
            const data = result.data;
            if(data.insertedId){
                alert("A new product has been added")
            }
        })
        e.target.reset();
        e.preventDefault();
    }

    return (
        <div className="home-banner">
            <h2 className="text-xl ml-7 text-green-700 font-medium">Add A New Product</h2>
            <form onSubmit={addNewProduct} className="md:ml-4 mt-6">
                <div className="w-full md:px-3 mb-5 flex">
                    <div className="md:w-1/2 w-full mr-3">
                        <label htmlFor="" className="text-xs font-semibold px-1">Product Title</label>
                        <div className="flex">
                            <input onBlur={handleOnBlur} name="title" type="text" className="w-full pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="Smartwatch - Smarty"  />
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <label htmlFor="" className="text-xs font-semibold px-1">Brand</label>
                        <div className="flex">
                            <input onBlur={handleOnBlur} name="brand" type="text" className="w-full pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="Amazefit, Xiaomi, Apple" />
                        </div>
                    </div>
                </div>

                <div className="w-full md:px-3 mb-5 flex">
                    <div className="w-1/2 mr-3">
                        <label htmlFor="" className="text-xs font-semibold px-1">Regular Price</label>
                        <div className="flex">
                            <input onBlur={handleOnBlur} name="regularPrice" type="number" className="w-full pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="Regular Price"/>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="" className="text-xs font-semibold px-1">Offer Price</label>
                        <div className="flex">
                            <input onBlur={handleOnBlur} name="offerPrice" type="number" className="w-full pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="Offer Price"/>
                        </div>
                    </div>
                </div>

                <div className="w-full md:px-3 flex md:mb-5">
                    <div className="md:w-1/2 w-full mr-3">
                        <label htmlFor="" className="text-xs font-semibold px-1">Number of Stock</label>
                        <div className="flex">
                            <input onBlur={handleOnBlur} name="stock" type="number" className="w-full pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="Stock"/>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <label htmlFor="" className="text-xs font-semibold px-1">Product Image URL</label>
                        <div className="flex">
                            <input onBlur={handleOnBlur} name="image" type="url" className="w-full pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="Image URL"/>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 md:ml-3 md:mb-5">
                        <label htmlFor="" className="text-xs font-semibold px-1">Prouct Rating</label>
                        <div className="flex">
                            <input onBlur={handleOnBlur} name="rating" type="number" className="w-full pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="Example: 4.4, 4.1, 3.8"/>
                        </div>
                    </div>

                <div className="md:w-1/2 md:ml-3">
                    <label htmlFor="" className="text-xs font-semibold px-1">Product Description</label>
                    <div>
                        <textarea onBlur={handleOnBlur} name="decription" className="w-full pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="Description" cols="3" rows="5"></textarea>
                    </div>
                </div>

                <button type="submit" className="px-8 md:ml-4 mt-4 py-3 bg-blue-600 rounded-sm font-medium text-white uppercase cursor-pointer focus:outline-none hover:bg-gray-600 hover:shadow-none">
                    Add New Product
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
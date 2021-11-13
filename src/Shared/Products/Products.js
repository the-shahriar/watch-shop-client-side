import React from 'react';
import Rating from 'react-rating';
import useProducts from '../../hooks/useProducts';
import { BsStar, BsStarFill } from "react-icons/bs";
import './Products.css';
import { useHistory } from 'react-router';

const Products = () => {

    const [products] = useProducts();
    const randomProducts = products?.slice(0, 6);
    const history = useHistory();

    const handlePurchase = id => {
        history.push(`/purchase/${id}`);
    }

    return (
        <div className="home-banner">
            <h2 className="font-bold md:text-4xl text-2xl text-gray-700 text-center">Production For Displaying The Text, <br /> Number With Good Clarity.</h2>
            <div className="products grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
                {
                    randomProducts.map(product => {
                        const {_id, title, regularPrice, offerPrice, image, brand, rating} = product;
                        return (

                            <div key={_id} className="product text-center px-5 pb-12">
                                <img className="product-image" src={image} alt="productImg" />
                                <Rating
                                    initialRating={rating}
                                    readonly
                                    emptySymbol={<BsStar  className="text-yellow-500"/>}
                                    fullSymbol={<BsStarFill className="text-yellow-500"/>}
                                />
                                <h4 className="brand font-medium bg-blue-600 text-white text-md uppercase px-3 py-1">
                                    {brand}
                                </h4>
                                <h4 className="text-xl font-bold">{title}</h4>
                                
                                 {
                                     offerPrice ?
                                         <p className="font-bold text-xl my-2 text-gray-800">${offerPrice} 
                                            <span className="line-through text-gray-600 text-sm ml-1">     
                                            ${regularPrice}
                                            </span>
                                         </p>
                                     :
                                     <p className="font-bold text-xl text-gray-800">${regularPrice}</p>
                                 }
                                 <button onClick={()=> handlePurchase(_id)} className="bg-gray-600 text-white px-12 py-2 text-md mr-2 mt-2">Purchase</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Products;
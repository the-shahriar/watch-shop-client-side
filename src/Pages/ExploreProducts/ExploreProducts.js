import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import useProducts from '../../hooks/useProducts';
import Rating from 'react-rating';
import {BsStar, BsStarFill} from "react-icons/bs";
import { useHistory } from 'react-router';

const ExploreProducts = () => {
    const [products] = useProducts();
    const history = useHistory();

    const handlePurchase = id => {
        history.push(`/purchase/${id}`);
    }

    return (
        <div>
            {/* Header Here */}
            <Navigation></Navigation>
                
            <div className="home-banner">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 products">
                        {
                            products?.map(product => {
                                const {_id, image, title, stock, rating, regularPrice, offerPrice, description, brand} = product
                                return(
                                    <div className="product">
                                        <img src={image} alt="" />
                                        <div className="product-info p-8">
                                            <h4 className=" font-medium text-blue-500 text-md uppercase">
                                                {brand}
                                            </h4>
                                            <h2 className="text-2xl my-3">{title}</h2>
                                            <p className="font-medium mb-3">{stock} Available</p>
                                            <Rating
                                                initialRating={rating}
                                                readonly
                                                emptySymbol={<BsStar  className="text-yellow-500"/>}
                                                fullSymbol={<BsStarFill className="text-yellow-500"/>}
                                            />

                                            <p className="text-gray-800 font-medium my-3">{description.slice(0, 155)}</p>

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

                                            <button onClick={()=> handlePurchase(_id)} className="bg-gray-600 py-2 text-white mt-3 px-8">Purchase</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                </div>

            </div>

            {/* Footer Here */}
           <Footer></Footer> 
        </div>
    );
};

export default ExploreProducts;
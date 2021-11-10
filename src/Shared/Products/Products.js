import React from 'react';
import useProducts from '../../hooks/useProducts';
import './Products.css';

const Products = () => {

    const [products] = useProducts();
    const randomProducts = products?.slice(0, 6)

    return (
        <div className="home-banner">
            <h2 className="font-bold text-4xl text-gray-700 text-center">Production For Displaying The Text, <br /> Number With Good Clarity.</h2>
            <div className="products grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">
                {
                    randomProducts.map(product => {
                        const {_id, title, regularPrice, offerPrice, image, brand} = product;
                        return (

                            <div key={_id} className="product text-center p-5">
                                <img src={image} alt="productImg" />
                                <h4 className="text-xl font-bold">{title}</h4>
                                <h3 className="font-semibold text-md">Brand: {brand.toUpperCase()}</h3>
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
                                 <button className="bg-gray-600 text-white px-5 py-2 text-md mr-2 mt-2">Add To Cart</button>
                                 <button className="bg-blue-600 text-white px-5 py-2 text-md mt-2">Details</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Products;
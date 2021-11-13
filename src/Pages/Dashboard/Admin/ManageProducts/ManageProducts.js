import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router';
import useProducts from '../../../../hooks/useProducts';

const ManageProducts = () => {
    const [products, setProducts] = useProducts();
    const history = useHistory();

    // delete order from database
    const handleDeleteProduct = id => {
        const proceed = window.confirm("Are you sure want to delete?");
        if(proceed){
            axios.delete(`http://localhost:5000/products/${id}`)
            .then(result => {
                const data = result.data;
                if (data.deletedCount) {
                    alert('Specifiq product has been deleted');
                    const remaining = products.filter(product => product._id !== id)
                    setProducts(remaining);
                }
            })
        }
    }

    const handleUpdateProduct = id => {
        history.push(`/product-update/${id}`)
    }

    return (
        <div className="home-banner">
            <h2 className="text-2xl mb-8 font-medium uppercase text-green-600 text-center">Manage Products</h2>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        >Product Image</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        >Title</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        >Regular Price</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        >Offer Price</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        >Action</th> 
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {
                                        products.map(order=> {
                                            const {_id, image, title, regularPrice, offerPrice} = order;
                                            return (
                                                <tr key={_id}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-500">
                                                            <img src={image} style={{width: '80px'}} alt="" />
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-500">
                                                        {title}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {regularPrice}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {offerPrice}
                                                    </td>
                                                    <td className="text-sm">
                                                        <button onClick={()=> handleUpdateProduct(_id)} className="bg-blue-600 px-4 py-2 text-white md:ml-4 ">Update</button>
                                                        <button onClick={()=> handleDeleteProduct(_id)} className="bg-gray-600 px-4 py-2 text-white md:ml-4 ">Delete</button>
                                                    </td>
                                                    
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ManageProducts;
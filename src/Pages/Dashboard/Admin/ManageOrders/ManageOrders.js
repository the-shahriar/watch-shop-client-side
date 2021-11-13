import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState(false);

    useEffect(()=> {
        axios.get('http://localhost:5000/orders')
        .then(result => {
            setOrders(result.data);
        })
    },[status])

    // delete order from database
    const handleCancelOrder = id => {
        const proceed = window.confirm("Are you sure want to delete?");
        if(proceed){
            axios.delete(`http://localhost:5000/orders/${id}`)
            .then(result => {
                const data = result.data;
                if (data.deletedCount) {
                    alert('Your order has been canceled');
                    const remaining = orders.filter(order => order._id !== id)
                    setOrders(remaining);
                }
            })
        }
    }

    // update order status
    const handleUpdateOrder = id => {
        axios.put(`http://localhost:5000/orders/${id}`)
        .then(result => {
            const data = result.data;
            if(data.modifiedCount > 0){
                setStatus(true);
                alert("Order has been approved");
            }
        })
    }

    return (
        <div className="home-banner">
            <h2 className="text-2xl font-medium uppercase text-green-600 text-center">Manage All Orders</h2>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        >Product ID</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        >Name</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        >Phone</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        >Quantity</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        >Price</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        >Status</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        >Action</th> 
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {
                                        orders.map(order=> {
                                            const {productId, name, phone, price, quantity, status, _id} = order;
                                            return (
                                                <tr key={_id}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-500">
                                                            <a href="#home" className="text-blue-600 underline">{productId}</a>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-500">
                                                            {name}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-500">
                                                        {phone}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {quantity}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {price}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {status}
                                                    </td>
                                                    <td className="text-sm flex mt-1">
                                                        <button onClick={()=> handleUpdateOrder(_id)} className="bg-blue-600 px-4 py-2 text-white">
                                                            Shipped
                                                        </button>
                                                        <button onClick={()=> handleCancelOrder(_id)} className="bg-gray-600 px-4 py-2 text-white md:ml-1">Cancel</button>
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

export default ManageOrders;
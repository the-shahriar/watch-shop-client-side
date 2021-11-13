import React from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../assets/logo/logo.png';
import MyOrders from '../MyOrders/MyOrders';
import AdminRoute from '../../../components/AdminRoute/AdminRoute';
import Review from '../Review/Review';
import Payment from '../Payment/Payment';
import ManageOrders from '../Admin/ManageOrders/ManageOrders';
import ManageProducts from '../Admin/ManageProducts/ManageProducts';
import AddProduct from '../Admin/AddProduct/AddProduct';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';

const Dashboard = () => {
    const {user, logOut, admin} = useAuth();
    let {url, path} = useRouteMatch();

    return (
        <div>
            <nav className="bg-gray-100 pt-2 md:py-3 pb-1 px-3 mt-0 h-auto fixed w-full z-20 top-0">

                <div className="flex flex-wrap items-center">
                    <Link to="/home">
                        <img src={logo} style={{width: "180px"}} alt="" />
                    </Link>
                    <p className="text-sm mt-2 text-blue-600">Dashboard</p>
                    <div className="flex w-full content-center justify-between md:w-1/3 md:justify-end ml-auto">
                        <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                            <li className="flex-1 md:flex-none md:mr-3">
                                <div className="relative inline-block">
                                    <button className="text-md text-gray-600 font-medium">Hi, <span className="text-green-600">{user.displayName}</span> 
                                    </button>
                                </div>
                            </li>
                            
                        </ul>
                        <button onClick={logOut} className="text-md px-4 py-2 bg-blue-600 text-white focus:outline-none">
                            Logout
                        </button>
                    </div>
                </div>
            </nav>

            <div className="flex flex-col">
                <div className="bg-gray-800 shadow-xl fixed bottom-0 mt-12 md:h-screen z-10 w-full md:w-1/5">
                    <div className="md:mt-20 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
                        {/* showing menu */}
                        {
                            admin ? (
                                <ul className="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
                                    <li className="mr-3 flex-1">
                                        <Link to={`${url}`} className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-green-500">
                                            <i className="fas fa-tasks pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-gray-400 block md:inline-block">My Orders</span>
                                        </Link>
                                    </li>
                                    <li className="mr-3 flex-1">
                                        <Link to={`${url}/manage-orders`} className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500">
                                            <i className="fas fa-tasks pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-gray-400 block md:inline-block">Manage All Orders</span>
                                        </Link>
                                    </li>
                                    <li className="mr-3 flex-1">
                                        <Link to={`${url}/manage-products`} className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                                            <i className="fa fa-envelope pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-gray-400 block md:inline-block">Manage All Products</span>
                                        </Link>
                                    </li>
                                    <li className="mr-3 flex-1">
                                        <Link to={`${url}/add-product`} className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-yellow-500">
                                            <i className="fas fa-chart-area pr-0 md:pr-3 text-blue-600"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-gray-400 block md:inline-block">Add New Product</span>
                                        </Link>
                                    </li>
                                    <li className="mr-3 flex-1">
                                        <Link to={`${url}/makeAdmin`} className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-blue-500">
                                            <i className="fas fa-chart-area pr-0 md:pr-3 text-blue-600"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-gray-400 block md:inline-block">Make A Admin</span>
                                        </Link>
                                    </li>
                                </ul>
                            )
                            :
                            (
                                <ul className="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
                                    <li className="mr-3 flex-1">
                                        <Link to={`${url}`} className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500">
                                            <i className="fas fa-tasks pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">My Orders</span>
                                        </Link>
                                    </li>
                                    <li className="mr-3 flex-1">
                                        <Link to={`${url}/review`} className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                                            <i className="fa fa-envelope pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Review</span>
                                        </Link>
                                    </li>
                                    <li className="mr-3 flex-1">
                                        <Link to={`${url}/pay`} className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-yellow-500">
                                            <i className="fas fa-chart-area pr-0 md:pr-3 text-blue-600"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-gray-400 block md:inline-block">Pay</span>
                                        </Link>
                                    </li>
                                </ul>
                            )
                        }
                    </div>
                </div>

                <div className="md:w-4/5 w-full md:absolute left-56 top-12">
                    <Switch>
                        <Route exact path={path}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route exact path={`${path}/review`}>
                            <Review></Review>
                        </Route>
                        <Route exact path={`${path}/pay`}>
                            <Payment></Payment>
                        </Route>

                        <AdminRoute exact path={`${path}/manage-orders`}>
                            <ManageOrders></ManageOrders>
                        </AdminRoute>
                        <AdminRoute exact path={`${path}/manage-products`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>
                        <AdminRoute exact path={`${path}/add-product`}>
                            <AddProduct></AddProduct>
                        </AdminRoute>
                        <AdminRoute exact path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
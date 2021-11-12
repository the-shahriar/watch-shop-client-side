import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axios.put('http://localhost:5000/users/admin', data)
        .then(res => {
            console.log(res);
        })
        reset();
    }
    return (
        <div className="home-banner">
            <h2 className="text-xl text-green-700 ml-3 font-medium mb-3">Make An Admin</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-3/5 px-3 mb-5">
                    <div className="flex">
                        <input {...register("email")} type="email" className="w-full pl-3 pr-3 py-2 rounded-sm border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="john.smith@gmail.com" required/>
                    </div>
                </div>
                <button type="submit" className="bg-blue-600 px-4 py-2 ml-3 text-white">Make Admin</button>
            </form>
        </div>
    );
};

export default MakeAdmin;
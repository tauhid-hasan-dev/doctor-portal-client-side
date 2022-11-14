import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const handleLogin = data => {
        console.log(data)
    }

    return (
        <div className='flex flex-col justify-center items-center py-20'>
            <div className='w-96 border border-black p-7'>
                <div className='flex justify-center '>
                    <p className='text-2xl font-semibold'>Login</p>
                </div>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input className="input input-bordered w-full " {...register("email")} placeholder="Email" type="text" />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Passowrd</span>
                        </label>
                        <input className="input input-bordered w-full" {...register("password")} placeholder="Password" type="password" />
                        <label className="label">
                            <small className="label-text">Forget Password?</small>
                        </label>
                    </div>
                    <input className='btn  w-full btn-accent' type="submit" />
                </form>
                <p className='text-sm mt-3'>New to doctors portal? <span className='text-secondary text-sm underline'><Link to='/signup' >Create new account</Link></span> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignUp = data => {
        console.log(data);
    }
    return (
        <div className='flex flex-col justify-center items-center py-20'>
            <div className='w-96 border border-black p-7'>
                <div className='flex justify-center '>
                    <p className='text-2xl font-semibold'>Signup</p>
                </div>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            {...register("name", {
                                required: 'Your Full Name is required',
                            })}
                            className="input input-bordered w-full "
                            placeholder="Name"
                            type="text" />

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            {...register("email", {
                                required: 'Email is required',
                            })}
                            className="input input-bordered w-full "
                            placeholder="Email"
                            type="email" />
                    </div>
                    <div className="form-control w-full mb-7 ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            {...register("password", {
                                required: 'Password is required',
                            })}
                            className="input input-bordered w-full"
                            placeholder="Password"
                            type="password" />
                        {errors.password && <p className='text-red-500 mt-1'>{errors.password.message}</p>}
                    </div>
                    <input className='btn  w-full btn-accent' value='Sign Up' type="submit" />
                </form>
                <p className='text-sm mt-3'>Already have an account? <span className='text-secondary text-sm underline'><Link to='/login' >Please Login</Link></span> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;
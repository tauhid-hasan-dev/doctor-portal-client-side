import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signupError, setSignupError] = useState('')


    const handleSignUp = data => {
        console.log(data);
        console.log(data.name)
        setSignupError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('User created successfully!')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(err => console.log(err))
            })
            .catch(err => {
                console.log(err.message);
                setSignupError(err.message);
            })
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
                        {errors.name && <p className='text-red-500 mt-1'>{errors.name.message}</p>}


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
                        {errors.email && <p className='text-red-500 mt-1'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full mb-7 ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            {...register("password", {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password should be at least 6 characters' },
                                pattern: { value: /(?=.*[A-Z])(?=.*[0-9])/, message: 'Password must be strong' }
                            })}
                            className="input input-bordered w-full"
                            placeholder="Password"
                            type="password" />
                        {errors.password && <p className='text-red-500 mt-1'>{errors.password.message}</p>}
                        {signupError && <p className='text-red-500'>{signupError}</p>}
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
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'
    const handleLogin = data => {
        console.log(data)
        setLoginError('')
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })

            })
            .catch(err => {
                console.log(err.message);
                setLoginError(err.message)

            })
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
                        <input className="input input-bordered w-full " {...register("email",
                            { required: "Email is required!" })}
                            aria-invalid={errors.email ? "true" : "false"}
                            placeholder="Email"
                            type="email" />

                        {errors.email && <p className='mt-2 text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input className="input input-bordered w-full" {...register("password",
                            {
                                required: "Password is required!",
                                minLength: { value: 6, message: "Password must be at least 6 character" }
                            })}
                            aria-invalid={errors.password ? "true" : "false"}
                            placeholder="Password"
                            type="password" />

                        {errors.password && <p className='mt-2 text-red-600' role="alert">{errors.password?.message}</p>}
                        {loginError && <p className='text-red-500'>{loginError}</p>}

                        <label className="label">
                            <small className="label-text">Forget Password?</small>
                        </label>
                    </div>
                    <input className='btn  w-full btn-accent' value='Log In' type="submit" />
                </form>
                <p className='text-sm mt-3'>New to doctors portal? <span className='text-secondary text-sm underline'><Link to='/signup' >Create new account</Link></span> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;
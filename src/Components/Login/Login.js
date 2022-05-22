import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import logo from '../../Assets/logo.png';
import loginBanner from '../../Assets/login-banner.png';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div>
            <div className="hero min-h-screen bg-gradient-to-tr from-primary to-secondary">
                <div className="hero-content">
                    <div className='lg:w-3/6 lg:flex lg:justify-end'>
                        <div className="card flex-shrink-0 lg:w-96 w-80 shadow-2xl bg-base-100">
                            <h1 className='text-center text-2xl font-bold text-primary mt-9'><img className='w-8 inline-block mt-[-6px]' src={logo} alt="" /> Credible Technologies</h1>
                            <p className='text-center font-bold mt-3'>USER LOGIN</p>
                            <div className="card-body">

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" className="input input-bordered" {...register("email", {
                                            required: {
                                                value: true,
                                                message: "Email is required"
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: "Provide a valid email"
                                            }
                                        })} />
                                        <label className="label">
                                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                        </label>
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" className="input input-bordered" {...register("password", {
                                            required: {
                                                value: true,
                                                message: "Password is required"
                                            },
                                            minLength: {
                                                value: 6,
                                                message: "Minimum 6 characters required"
                                            }
                                        })} />
                                        <label className="label">
                                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                            <Link to="/reset-password"><span className="label-text-alt link-hover link">Forget Password?</span></Link>
                                        </label>
                                    </div>

                                    <input type="submit" value='Log in' className="btn text-white w-full mt-3" />
                                </form>

                                <div class="divider">OR</div>
                                <div className="form-control">
                                    <button className="btn btn-outline" >
                                        <FcGoogle className='text-2xl mr-2' /> Continue with google
                                    </button>
                                </div>
                                <Link to="/sign-up" className="text-center text-sm label-text-alt link link-hover mt-2">New here? PLease create account</Link>
                            </div>
                        </div>
                    </div>
                    <div class="hidden lg:block w-8/12">
                        <img className='mx-auto' src={loginBanner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
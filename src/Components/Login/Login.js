import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import logo from '../../Assets/logo.png';
import loginBg from '../../Assets/login-bg.jpg';
import auth from '../../Firebase/firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import PageTitle from '../PageTitle/PageTitle';
import useToken from '../../hooks/useToken';
import Swal from 'sweetalert2';
import '../../App.css';

const Login = () => {

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);


    const { register, formState: { errors }, handleSubmit } = useForm();

    useEffect(() => {
        if (googleError?.message === "Firebase: Error (auth/popup-closed-by-user).") {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'You closed the popup',
                showConfirmButton: false,
                timer: 2000
            })
        };

        if (error?.message === "Firebase: Error (auth/wrong-password).") {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'You entered a wrong password',
                showConfirmButton: false,
                timer: 2000
            })
        };

        if (error?.message === "Firebase: Error (auth/invalid-email).") {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Invalid Email',
                showConfirmButton: false,
                timer: 2000
            })
        };

        if (error?.message === "Firebase: Error (auth/user-not-found).") {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'No user found. Please check your E-mail',
                showConfirmButton: false,
                timer: 2000
            })
        };
    }, [error?.message, googleError?.message])

    const onSubmit = async data => {
        await signInWithEmailAndPassword(data.email, data.password);
    };

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();

    const [token] = useToken(user || googleUser)

    useEffect(() => {
        if (user || googleUser || token) {
            navigate(from, { replace: true });
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Login Successful',
                showConfirmButton: false,
                timer: 2000
            })
        }
    }, [from, user, googleUser, navigate, token])

    return (
        <section>

            <PageTitle title="Login" />

            {
                loading || googleLoading ?

                    <Loading />

                    :

                    <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: `url(${loginBg})` }}>
                        <div className="hero-overlay bg-opacity-50"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="lg:my-20">
                                <div className='mx-auto glass p-9 rounded-xl'>

                                    <h1 className='text-center lg:text-2xl text-xl font-bold text-primary'><img className='w-8 contrast-200 App-logo inline-block mt-[-6px]' src={logo} alt="" /> Credible Technologies</h1>
                                    <p className='text-center font-bold my-3 text-white'>USER LOGIN</p>

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-white">Email</span>
                                            </label>
                                            <input type="email" placeholder="email" className="input input-bordered text-black" {...register("email", {
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
                                                <span className="label-text text-white">Password</span>
                                            </label>
                                            <input type="password" placeholder="password" className="input input-bordered text-black" {...register("password", {
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
                                                <Link to="/reset-password"><span className="label-text-alt link-hover link text-white">Forget Password?</span></Link>
                                            </label>
                                        </div>

                                        <input type="submit" value='Log in' className="btn text-white w-full mt-3" />
                                    </form>

                                    <div className="divider text-white">OR</div>
                                    <div className="form-control">
                                        <button onClick={() => signInWithGoogle()} className="btn btn-outline text-white" >
                                            <FcGoogle className='text-2xl mr-2' /> Continue with google
                                        </button>
                                    </div>
                                    <Link to="/sign-up" className="text-sm link link-hover flex justify-center mt-4 text-white">New here? Please create account</Link>

                                </div>
                            </div>
                        </div>
                    </div>
            }
        </section>
    );
};

export default Login;
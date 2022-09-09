import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import registration from '../../Assets/registration.png';
import logo from '../../Assets/logo.png';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import { Slide } from 'react-reveal';
import PageTitle from '../PageTitle/PageTitle';
import useToken from '../../hooks/useToken';
import Swal from 'sweetalert2';

const SignUp = () => {

    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth,
        { sendEmailVerification: true });

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [token] = useToken(user || googleUser);

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();

    useEffect(() => {
        if (user || googleUser || token) {
            navigate(from, { replace: true });
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Account created successful',
                showConfirmButton: false,
                timer: 2000
            })
        }
    }, [from, user, googleUser, navigate, token]);

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        reset();
    };

    if (googleError || error || updateError) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Something went wrong. Please try again.',
            showConfirmButton: false,
            timer: 2000
        })
    }

    return (
        <section>

            <PageTitle title="Signup" />

            {
                loading || googleLoading || updating ?

                    <Loading />

                    :

                    <div className="hero min-h-screen bg-gradient-to-tr from-primary to-secondary overflow-x-hidden">
                        <div className="hero-content">
                            <Slide left>
                                <div className='lg:w-3/6 lg:flex lg:justify-end'>
                                    <div className="card flex-shrink-0 lg:w-96 w-80 shadow-2xl bg-base-100">
                                        <h1 className='text-center text-2xl font-bold text-primary mt-9'><img className='w-8 inline-block mt-[-6px]' src={logo} alt="" /> Credible Technologies</h1>
                                        <p className='text-center font-bold mt-3'>CREATE ACCOUNT</p>
                                        <div className="card-body">
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Name</span>
                                                    </label>
                                                    <input type="text" placeholder="your name" className="input input-bordered" {...register("name", {
                                                        required: {
                                                            value: true,
                                                            message: "Name is required"
                                                        }
                                                    })} />
                                                    <label className="label">
                                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                                    </label>
                                                </div>

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
                                                    </label>
                                                </div>

                                                <input type="submit" value='Sign Up' className="btn text-white w-full mt-3" />
                                            </form>
                                            <div className="divider">OR</div>
                                            <div className="form-control">
                                                <button onClick={() => signInWithGoogle()} className="btn btn-outline" >
                                                    <FcGoogle className='text-2xl mr-2' /> Continue with google
                                                </button>
                                            </div>
                                            <Link to="/login" className="text-center text-sm label-text-alt link link-hover mt-2">Already have an account? Login</Link>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                            <Slide right>
                                <div className="hidden lg:block w-full ml-14">
                                    <img className='mx-auto w-full' src={registration} alt="" />
                                </div>
                            </Slide>
                        </div>
                    </div>
            }
        </section>
    );
};

export default SignUp;
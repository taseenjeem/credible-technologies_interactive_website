import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import bg from '../../Assets/login-bg.jpg';
import logo from '../../Assets/logo.png';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
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

            <PageTitle title="Sign Up" />

            {
                loading || googleLoading || updating ?

                    <Loading />

                    :

                    <div className="h-screen my-16 bg-cover bg-no-repeat pt-10" style={{ backgroundImage: `url(${bg})` }}>

                        <div className='lg:w-[27%] w-[90%] mx-auto glass p-9 rounded-xl '>

                            <h1 className='text-center lg:text-2xl text-xl font-bold text-primary'><img className='w-8 App-logo inline-block mt-[-6px]' src={logo} alt="" /> Credible Technologies</h1>
                            <p className='text-center font-bold mt-3 text-white uppercase'>Create Account</p>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Name</span>
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
                                        <span className="label-text text-white">Email</span>
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
                                        <span className="label-text text-white">Password</span>
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
                            <div className="divider text-white">OR</div>
                            <div className="form-control">
                                <button onClick={() => signInWithGoogle()} className="btn btn-outline text-white" >
                                    <FcGoogle className='text-2xl mr-2' /> Continue with google
                                </button>
                            </div>
                            <Link to="/login" className="text-sm link link-hover flex justify-center mt-4 text-white">Already have an account? Login</Link>

                        </div>

                    </div>
            }
        </section>
    );
};

export default SignUp;
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import bg from '../../Assets/login-bg.jpg';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import Loading from '../Loading/Loading';
import PageTitle from '../PageTitle/PageTitle';
import Swal from 'sweetalert2';

const ResetPass = () => {

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    if (error) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Something went wrong. Please check your email and try again',
            showConfirmButton: false,
            timer: 2000
        })
    };

    const onSubmit = async data => {
        await sendPasswordResetEmail(data.email);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Reset link sent successfully. Please check your email !!',
            showConfirmButton: false,
            timer: 2000
        })
        reset();
    };

    return (
        <section>

            <PageTitle title="Reset Password" />

            {
                sending ?

                    <Loading />

                    :

                    <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: `url(${bg})` }}>
                        <div className="hero-overlay bg-opacity-50"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <div className='mx-auto glass p-9 rounded-xl'>

                                    <h1 className='text-center lg:text-2xl text-xl font-bold text-primary'><img className='w-8 contrast-200 App-logo inline-block mt-[-6px]' src={logo} alt="" /> Credible Technologies</h1>
                                    <p className='text-center font-bold my-3 text-white'>USER LOGIN</p>

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-white">Your existing email</span>
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

                                        <input type="submit" value='Reset Password' className="btn text-white w-full mt-3" />
                                    </form>


                                    <Link to="/Login" className="text-sm link link-hover flex justify-center mt-4 text-white">Return to login page</Link>

                                </div>
                            </div>
                        </div>
                    </div>
            }
        </section>
    );
};

export default ResetPass;
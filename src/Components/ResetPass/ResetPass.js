import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import resetPass from '../../Assets/reset-pass.png';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';
import { Slide } from 'react-reveal';
import PageTitle from '../PageTitle/PageTitle';

const ResetPass = () => {

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    if (error) {
        toast.error("Something went wrong. Please check your email and try again");
    };

    const onSubmit = async data => {
        await sendPasswordResetEmail(data.email);
        toast.success('Reset link sent successfully. Please check your email !!');
    };

    return (
        <div>

            <PageTitle title="Reset Password" />

            {
                sending ?

                    <Loading />

                    :

                    <div className="hero min-h-screen bg-gradient-to-tr from-primary to-secondary overflow-x-hidden">
                        <div className="hero-content">
                            <Slide left>
                                <div className='lg:w-3/6 lg:flex lg:justify-end'>
                                    <div className="card flex-shrink-0 lg:w-96 w-80 shadow-2xl bg-base-100">
                                        <h1 className='text-center text-2xl font-bold text-primary mt-9'><img className='w-8 inline-block mt-[-6px]' src={logo} alt="" /> Credible Technologies</h1>
                                        <p className='text-center font-bold mt-3'>FORGOT PASSWORD?</p>
                                        <div className="card-body">

                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Your existing email</span>
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


                                            <Link to="/Login" className="text-center text-sm label-text-alt link link-hover mt-2">Return to login page</Link>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                            <Slide right>
                                <div className="hidden lg:block w-8/12">
                                    <img className='mx-auto w-4/5' src={resetPass} alt="" />
                                </div>
                            </Slide>
                        </div>
                    </div>
            }
        </div>
    );
};

export default ResetPass;
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateProfile = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { id } = useParams();

    const onSubmit = data => {

        const url = `https://credible-technologies.herokuapp.com/update-a-profile/${id}`;

        fetch(url,
            {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(result => {
                toast.success("Successfully profile updated")
                reset();
            })

    }

    return (
        <section className='px-3'>
            <div className='lg:w-3/6 mx-auto bg-white shadow-2xl p-4 mb-20 mt-10 rounded-3xl'>

                <h1 className='text-center text-2xl font-semibold'>Update Profile Info</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input type="text" placeholder="Your full address" className="input input-bordered" {...register("address", {
                            required: {
                                value: true,
                                message: "address is required"
                            }
                        })} />
                        <label className="label">
                            {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Education</span>
                        </label>
                        <input type="text" placeholder="Your education" className="input input-bordered" {...register("education", {
                            required: {
                                value: true,
                                message: "Education is required"
                            }
                        })} />
                        <label className="label">
                            {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors.education.message}</span>}
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="number" placeholder="Enter your mobile number" className="input input-bordered" {...register("phone", {
                            required: {
                                value: true,
                                message: "mobile number is required"
                            }
                        })} />
                        <label className="label">
                            {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">LinkedIn</span>
                        </label>
                        <input type="url" placeholder="Enter your linkedin profile link" className="input input-bordered" {...register("linkedin", {
                            required: {
                                value: true,
                                message: "linkedin link is required"
                            }
                        })} />
                        <label className="label">
                            {errors.linkedin?.type === 'required' && <span className="label-text-alt text-red-500">{errors.linkedin?.message}</span>}
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Facebook</span>
                        </label>
                        <input type="url" placeholder="Enter your facebook profile link" className="input input-bordered" {...register("facebook", {
                            required: {
                                value: true,
                                message: "facebook link is required"
                            }
                        })} />
                        <label className="label">
                            {errors.facebook?.type === 'required' && <span className="label-text-alt text-red-500">{errors.facebook?.message}</span>}
                        </label>
                    </div>

                    <input type="submit" value='Update' className="btn text-white w-full mt-3" />

                </form>
            </div>
        </section>
    );
};

export default UpdateProfile;
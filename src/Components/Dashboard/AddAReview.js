import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddAReview = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageApiKey = "26f5722991a391c4ea65feceaa75940c";

    const onSubmit = data => {

        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageApiKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success && data.rate !== "Please give us ratings") {
                    const img = result.data.url;

                    const review = {
                        name: data.name,
                        img: img,
                        location: data.location,
                        rate: data.rate,
                        message: data.message
                    }

                    fetch("https://credible-technologies.herokuapp.com/add-review", {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(review)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Review added successfully',
                                    showConfirmButton: false,
                                    timer: 2000
                                })
                                reset();
                            }
                            else {
                                Swal.fire({
                                    position: 'center',
                                    icon: 'error',
                                    title: 'Something went wrong',
                                    showConfirmButton: false,
                                    timer: 2000
                                });
                            }
                        })
                } else {
                    Swal.fire(
                        'Error',
                        'Please select "Rate Us" section',
                        'error'
                    );
                }
            })

    }

    return (
        <section className='px-3'>
            <div className='lg:w-3/6 mx-auto bg-white shadow-2xl p-4 mb-20 mt-10 rounded-3xl'>

                <h1 className='text-center text-2xl font-semibold'>Add a review</h1>

                <form className='px-3' onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Your name" className="input input-bordered" {...register("name", {
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
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text" placeholder="Your address" className="input input-bordered" {...register("location", {
                            required: {
                                value: true,
                                message: "Your address is required"
                            }
                        })} />
                        <label className="label">
                            {errors.location?.type === 'required' && <span className="label-text-alt text-red-500">{errors.location.message}</span>}
                        </label>
                    </div>

                    <div className="form-control my-3">
                        <label className="label">
                            <span className="label-text">Profile Photo</span>
                        </label>
                        <input type="file" {...register("img", {
                            required: {
                                value: true,
                                message: "Image is required"
                            }
                        })} />
                        <label className="label">
                            {errors.img?.type === 'required' && <span className="label-text-alt text-red-500">{errors.img.message}</span>}
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rate us</span>
                        </label>

                        <select required {...register('rate', {
                            required: {
                                value: true,
                                message: "Rating is required"
                            }
                        })} className="select select-bordered w-full">
                            <option disabled selected>Please give us ratings</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <label className="label">
                            {errors.rate?.type === 'required' && <span className="label-text-alt text-red-500">{errors.rate.message}</span>}
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your thought about us</span>
                        </label>
                        <textarea type="number" placeholder="About the product" className="textarea textarea-bordered" {...register("message", {
                            required: {
                                value: true,
                                message: "Review is required"
                            }
                        })} />
                        <label className="label">
                            {errors.message?.type === 'required' && <span className="label-text-alt text-red-500">{errors.message.message}</span>}
                        </label>
                    </div>

                    <input type="submit" value='ADD Review' className="btn text-white w-full mt-3" />
                </form>

            </div>
        </section>
    );
};

export default AddAReview;
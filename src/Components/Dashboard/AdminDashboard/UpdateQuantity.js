import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateQuantity = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { id } = useParams();

    const onSubmit = data => {

        const url = `https://credible-technologies-server.onrender.com/update-product-quantity/${id}`;

        if (data.qnt < 0) {
            Swal.fire(
                'Error',
                'Please enter a positive number',
                'error'
            )
            reset()
        } else {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'New Stock Added Successfully',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    reset();
                })
        }


    }

    return (
        <div className='lg:w-3/6 mx-auto bg-white shadow-2xl p-4 my-20 rounded-3xl'>

            <h1 className='text-center text-2xl font-semibold'>Update your stock</h1>

            <form className='px-3' onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Update Quantity</span>
                    </label>
                    <input type="number" placeholder="How many items you want to store" className="input input-bordered" {...register("qnt", {
                        required: {
                            value: true,
                            message: "Quantity is required"
                        }
                    })} />
                    <label className="label">
                        {errors.qnt?.type === 'required' && <span className="label-text-alt text-red-500">{errors.qnt.message}</span>}
                    </label>
                </div>
                <input type="submit" value='Update product' className="btn text-white w-full mt-3" />
            </form>
        </div>
    );
};

export default UpdateQuantity;
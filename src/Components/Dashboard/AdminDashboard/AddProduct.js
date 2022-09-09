import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddProduct = () => {

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
                if (result.success) {
                    const img = result.data.url;

                    const product = {
                        name: data.name,
                        img: img,
                        brand: data.brand,
                        manufacturer: data.manufacturer,
                        price: data.price,
                        qnt: data.qnt,
                        minimumQnt: data.minimumQnt,
                        description: data.description
                    }

                    fetch("https://credible-technologies.herokuapp.com/add-product", {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Product Added Successfully',
                                    showConfirmButton: false,
                                    timer: 2000
                                })
                                reset();
                            }
                            else {
                                Swal.fire({
                                    position: 'center',
                                    icon: 'error',
                                    title: 'Failed add product',
                                    showConfirmButton: false,
                                    timer: 2000
                                });
                            }
                        })
                }
            })
    }

    return (
        <div className='lg:w-3/6 mx-auto bg-white shadow-2xl p-4 my-20 rounded-3xl'>

            <h1 className='text-center text-2xl font-semibold'>Add a product</h1>

            <form className='px-3' onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" placeholder="product name" className="input input-bordered" {...register("name", {
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
                        <span className="label-text">Brand Name</span>
                    </label>
                    <input type="text" placeholder="brand name" className="input input-bordered" {...register("brand", {
                        required: {
                            value: true,
                            message: "Brand Name is required"
                        }
                    })} />
                    <label className="label">
                        {errors.brand?.type === 'required' && <span className="label-text-alt text-red-500">{errors.brand.message}</span>}
                    </label>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Manufacturer</span>
                    </label>
                    <input type="text" placeholder="manufacturer name" readOnly value="Credible Technologies Ltd." className="input input-bordered" {...register("manufacturer", {
                        required: {
                            value: true,
                            message: "Manufacturer is required"
                        }
                    })} />
                    <label className="label">
                        {errors.manufacturer?.type === 'required' && <span className="label-text-alt text-red-500">{errors.manufacturer.message}</span>}
                    </label>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" placeholder="Price per unit" className="input input-bordered" {...register("price", {
                        required: {
                            value: true,
                            message: "Price is required"
                        }
                    })} />
                    <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                    </label>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <input type="number" placeholder="Available quantity" className="input input-bordered" {...register("qnt", {
                        required: {
                            value: true,
                            message: "Quantity is required"
                        }
                    })} />
                    <label className="label">
                        {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                    </label>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Minimum order quantity</span>
                    </label>
                    <input type="number" placeholder="minimum quantity" className="input input-bordered" {...register("minimumQnt", {
                        required: {
                            value: true,
                            message: "Minimum order quantity is required"
                        }
                    })} />
                    <label className="label">
                        {errors.minimumQnt?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimumQnt.message}</span>}
                    </label>
                </div>

                <div className="form-control my-3">
                    <label className="label">
                        <span className="label-text">Product Photo</span>
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
                        <span className="label-text">Description</span>
                    </label>
                    <textarea type="number" placeholder="About the product" className="textarea textarea-bordered" {...register("description", {
                        required: {
                            value: true,
                            message: "description is required"
                        }
                    })} />
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                    </label>
                </div>

                <input type="submit" value='ADD PRODUCT' className="btn text-white w-full mt-3" />
            </form>
        </div>
    );
};

export default AddProduct;
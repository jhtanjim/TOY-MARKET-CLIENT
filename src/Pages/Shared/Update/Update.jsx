import React from 'react';
import { useLoaderData, } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';

const Update = () => {
    const toy = useLoaderData()
    // const { id } = useParams()
    console.log(toy);
    const { _id, name, details, price, photo, quantity } = toy;






    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // Log form data
        console.log(data);

        // Send data to server
        fetch(`http://localhost:5000/alltoy/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                    });
                }
            })
            .catch((error) => {
                console.error(error);
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to update toy',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            });
    };




    return (
        <div className="bg-gray-100 px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-8">Update Toys</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
                <div className="mb-6">
                    <label className="block font-medium mb-1" htmlFor="name">
                        Toy Name
                    </label>
                    <input
                        type="text"
                        {...register('name', { required: true })}
                        placeholder="Toy Name"
                        className="w-full px-3 py-2 border rounded"
                    />
                    {errors.name && <span className="text-red-500">This field is required</span>}
                </div>

                <div className="mb-6">
                    <label className="block font-medium mb-1" htmlFor="quantity">
                        Available Quantity
                    </label>
                    <input
                        type="number"
                        {...register('quantity', { required: true })}
                        placeholder="Available Quantity"
                        className="w-full px-3 py-2 border rounded"
                    />
                    {errors.quantity && <span className="text-red-500">This field is required</span>}
                </div>



                <div className="mb-6">
                    <label className="block font-medium mb-1" htmlFor="category">
                        Category
                    </label>
                    <select
                        {...register('category', { required: true })}
                        className="w-full px-3 py-2 border rounded"
                    >
                        <option value="sports-car">Sports Car</option>
                        <option value="truck">Truck</option>
                        <option value="mini-fire-truck">Mini Fire Truck</option>
                        <option value="mini-police-car">Mini Police Car</option>
                    </select>
                    {errors.category && <span className="text-red-500">This field is required</span>}
                </div>

                <div className="mb-6">
                    <label className="block font-medium mb-1" htmlFor="details">
                        Details
                    </label>
                    <input
                        type="text"
                        {...register('details')}
                        placeholder="Details"
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-6">
                    <label className="block font-medium mb-1" htmlFor="photo">
                        Photo URL
                    </label>
                    <input
                        type="text"
                        {...register('photo')}
                        placeholder="Photo URL"
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-6">
                    <label className="block font-medium mb-1" htmlFor="price">
                        Price
                    </label>
                    <input
                        type="number"
                        {...register('price')}
                        placeholder="Price"
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-6">
                    <label className="block font-medium mb-1" htmlFor="rating">
                        Rating (1-5)
                    </label>
                    <input
                        type="number"
                        {...register('rating', { min: 1, max: 5 })}
                        placeholder="Rating should be 1-5"
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <button type="submit" className="btn btn-primary w-full bg-blue-500 text-white font-bold py-2 rounded">
                    Update
                </button>
            </form>
        </div>
    );
};

export default Update;
import React from 'react';
import Swal from 'sweetalert2'

const AddToys = () => {







    const handleAddToys = event => {

        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const quantity = form.quantity.value
        const seller = form.seller.value
        const email = form.email.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value
        const price = form.price.value
        const rating = form.rating.value

        const newtoy = { name, quantity, seller, email, category, details, photo, price, rating }
        console.log(newtoy);



        // send data to server
        fetch('http://localhost:5000/toy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newtoy)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Added Succesfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })



    }

    return (

        <div className="bg-[#F4F3F0] px-24">
            <h2 className="text-3xl font-extrabold">Add Toys</h2>
            <form onSubmit={handleAddToys}>
                {/* form row */}

                {/* form name and quantity row */}
                <div className="md:flex " >

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="name" placeholder="Toy Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control ml-4 md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form  suuplier row */}
                <div className="md:flex mb-8" >

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">seller Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="seller" placeholder="seller" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">seller Email</span>
                        </label>
                        <label className="input-group">

                            <input type="email" name="email" placeholder="Seller Email" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                {/* form  category and detailsrow */}
                <div className="md:flex mb-8" >

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control ml-4 md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form  photo url row */}
                <div className="mb-8" >

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="md:flex mb-8" >
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">

                                <input type="number" name="price" placeholder="price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">

                                <input type="number" name="rating" placeholder="rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                </div>

                <input className="btn btn-block" type="submit" value="Add Toy" />
            </form>
        </div>
    );
};

export default AddToys;
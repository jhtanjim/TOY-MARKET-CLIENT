import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToysCard = ({ toy }) => {
    const { _id, name, details, price, photo, quantity } = toy;
    const [toys, setToys] = useState({ toy }); // Store toys in an array




    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://toy-store-server-one.vercel.app/alltoy/${_id}`, {
                    method: 'DELETE',
                })

                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter((toy) => toy._id !== _id);
                            setToys(remaining);
                        }
                    })
            }
        })
    }













    // const handleDelete = (_id) => {
    //     console.log('Delete', _id);
    //     fetch(`https://toy-store-server-one.vercel.app/alltoy/${_id}`, {
    //         method: 'DELETE',
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             if (data.deletedCount > 0) {
    //                 alert('Are you want to sure to deelete?');
    //                 const remaining = toys.filter((toy) => toy._id !== _id);
    //                 setToys(remaining);
    //             }
    //         });
    // };

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={photo} alt={toy.name} className="card-image" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{toy.name}</h2>
                        <p>${price}</p>
                        <p>${quantity}</p>
                        <p>Rating: {details}</p>
                        <div className="card-actions justify-end">
                            <div className="d-flex">
                                <Link to={`/update/alltoy/${_id}`}>

                                    <button className="btn btn-primary">Update</button>
                                </Link>
                                <button onClick={() => handleDelete(_id)} className="btn btn-primary">
                                    X
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyToysCard;

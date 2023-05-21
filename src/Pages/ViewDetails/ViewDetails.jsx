import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {

    const toys = useLoaderData()


    const { name, picture, price, quantity, subcategory, description } = toys
    console.log(toys);

    console.log(toys);
    return (
        <div>






            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6 text-3xl font-semibold">{description}</p>
                        <p className='text-xl text-purple-900 font-bold'>Price: ${price}</p>
                        <p className='text-xl text-purple-900 font-bold'>quantity: {quantity}</p>
                        <p className='text-xl text-purple-900 font-bold'>subcategory: {subcategory}</p>
                        <p className='text-xl text-purple-900 font-bold'>quantity: {quantity}</p>
                    </div>
                </div>
            </div>






        </div>
    );
};

export default ViewDetails;
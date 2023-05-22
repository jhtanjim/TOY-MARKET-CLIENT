import React from 'react';

const AllToysView = ({ toy }) => {
    const { name, picture, price, quantity, subcategory, description } = toy || {};

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={picture} className="max-w-sm rounded-lg shadow-2xl" alt={name} />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6 text-3xl font-semibold">{description}</p>
                        <p className="text-xl text-purple-900 font-bold">Price: ${price}</p>
                        <p className="text-xl text-purple-900 font-bold">Quantity: {quantity}</p>
                        <p className="text-xl text-purple-900 font-bold">Subcategory: {subcategory}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllToysView;

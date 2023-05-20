import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const toys = useLoaderData()
    const { _id, name, quantity, seller, email, category, details, photo, price, rating } = toys
    return (
        <div>
            <h2>  toys are:{toys.length}</h2>
        </div>
    );
};

export default ViewDetails;
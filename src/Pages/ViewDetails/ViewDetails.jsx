import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const toys = useLoaderData()

    console.log(toys);
    return (
        <div>
            <h2>  toys are:{toys.price}</h2>
        </div>
    );
};

export default ViewDetails;
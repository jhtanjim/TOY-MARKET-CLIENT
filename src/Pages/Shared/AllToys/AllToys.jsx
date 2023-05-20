import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {

    const toys = useLoaderData()
    return (
        <div>
            <h1>All toys : {toys.length}</h1>
        </div>
    );
};

export default AllToys;
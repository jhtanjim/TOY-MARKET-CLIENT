import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadToys = useLoaderData()

    return (
        <div>
            <h3>update info of {loadToys.name}</h3>
        </div>
    );
};

export default Update;
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import MyToysCard from './MyToysCard';

const MyToys = () => {

    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([])
    const url = `http://localhost:5000/alltoy/${user?.email}`



    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })

    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                toys.map(toy => <MyToysCard
                    toy={toy}

                ></MyToysCard>)
            }
        </div>
    );
};

export default MyToys;
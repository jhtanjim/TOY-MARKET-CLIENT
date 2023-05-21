import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import MyToysCard from './MyToysCard';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [sortBy, setSortBy] = useState('asc');
    const url = `http://localhost:5000/alltoy/${user?.email}`;

    useEffect(() => {
        const fetchToys = async () => {
            try {
                const response = await fetch(`${url}?sort=price:${sortBy}`);
                const data = await response.json();
                setToys(data);
            } catch (error) {
                console.log('Error fetching toys:', error);
            }
        };

        fetchToys();
    }, [url, sortBy]);

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    return (
        <div>
            <div className="mb-4">
                <label htmlFor="sortSelect" className="mr-2">
                    Sort By Price:
                </label>
                <select id="sortSelect" value={sortBy} onChange={handleSortChange}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {toys.map((toy) => (
                    <MyToysCard key={toy._id} toy={toy} />
                ))}
            </div>
        </div>
    );
};

export default MyToys;

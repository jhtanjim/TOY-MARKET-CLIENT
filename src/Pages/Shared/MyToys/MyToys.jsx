import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import MyToysCard from './MyToysCard';

const MyToys = () => {
    // Retrieve the user from the AuthContext
    const { user } = useContext(AuthContext);

    // Set up state variables
    const [toys, setToys] = useState([]);
    const [sortBy, setSortBy] = useState('asc');

    // Construct the API URL based on the user's email
    const url = `https://toy-store-server-one.vercel.app/alltoydata/${user?.email}`;

    // Fetch the toys from the API and update the state
    useEffect(() => {
        const fetchToys = async () => {
            try {
                const response = await fetch(`${url}`);
                let data = await response.json();

                // Sort the toys based on the selected sort option
                data.sort((a, b) => {
                    if (sortBy === 'asc') {
                        return a.price - b.price;
                    } else {
                        return b.price - a.price;
                    }
                });

                setToys(data);
            } catch (error) {
                console.log('Error fetching toys:', error);
            }
        };

        fetchToys();
    }, [url, sortBy]);

    // Handle the sort change event
    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    // Render the component
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

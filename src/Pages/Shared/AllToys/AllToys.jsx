import React, { useEffect, useState } from 'react';
import AllToysRow from './AllToysRow';

const AllToys = () => {
    const [searchInput, setSearchInput] = useState('');
    const [toys, setToys] = useState([]);
    const [limit, setLimit] = useState(20);

    useEffect(() => {
        fetch(`https://toy-store-server-one.vercel.app/alltoy?limit=${limit}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            });
    }, [limit]);

    const handleSearch = () => {
        fetch(`https://toy-store-server-one.vercel.app/alltoy?limit=${limit}&name=${encodeURIComponent(searchInput)}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            });
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-center">All Toys</h1>

            <div className="flex justify-center my-4">
                <input
                    type="text"
                    className="p-2 border border-gray-300 mr-2 w-64 sm:w-auto"
                    placeholder="Search by Toy Name"
                    value={searchInput}
                    onChange={e => setSearchInput(e.target.value)}
                />
                <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleSearch}>
                    Search
                </button>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full sm:min-w-max">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Seller</th>
                            <th className="px-4 py-2">Toy Name</th>
                            <th className="px-4 py-2">Sub-category</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Available Quantity</th>
                            <th className="px-4 py-2">View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {toys.map(toy => (
                            <AllToysRow key={toy.name} toy={toy} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;

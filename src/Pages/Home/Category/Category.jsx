import React, { useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { Link } from 'react-router-dom';

const Category = () => {
    const [toys, setToys] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/toyCategory')
            .then((res) => res.json())
            .then((data) => {
                setToys(data);
            });
    }, []);



    return (
        <div className="text-center space-x-3">
            <Tabs>
                <TabList>
                    <Tab>
                        <button className="btn btn-primary">Sports Car</button>
                    </Tab>
                    <Tab>
                        <button className="btn btn-secondary">Truck</button>
                    </Tab>
                    <Tab>
                        <button className="btn btn-success">Mini Fire Truck</button>
                    </Tab>
                    <Tab>
                        <button className="btn btn-warning">Mini Police Car</button>
                    </Tab>
                </TabList>

                <TabPanel>
                    <h2>Sports Car</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {toys
                            .filter((toy) => toy.subcategory === 'Sports Car')
                            .map((toy) => (
                                <div key={toy.id} className="card card-compact bg-base-100 shadow-xl">
                                    <div className="card w-96 bg-base-100 shadow-xl">
                                        <figure>
                                            <img src={toy.picture} alt={toy.name} className="card-image" />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{toy.name}</h2>
                                            <p>${toy.price}</p>
                                            <p>Rating: {toy.rating}</p>
                                            <div className="card-actions justify-end">

                                                <Link to={`/toy/${toy._id}`}>
                                                    <button className="btn btn-primary">View Details</button>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </TabPanel>

                <TabPanel>
                    <h2>Truck</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {toys
                            .filter((toy) => toy.subcategory === 'Truck')
                            .map((toy) => (
                                <div key={toy.id} className="card card-compact bg-base-100 shadow-xl">
                                    <div className="card w-96 bg-base-100 shadow-xl">
                                        <figure>
                                            <img src={toy.picture} alt={toy.name} className="card-image" />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{toy.name}</h2>
                                            <p>${toy.price}</p>
                                            <p>Rating: {toy.rating}</p>
                                            <div className="card-actions justify-end">

                                                <Link to={`/toy/${toy._id}`}>
                                                    <button className="btn btn-primary">View Details</button>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </TabPanel>

                <TabPanel>
                    <h2>Mini Fire Truck</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {toys
                            .filter((toy) => toy.subcategory === 'Mini Fire Truck')
                            .map((toy) => (
                                <div key={toy.id} className="card card-compact bg-base-100 shadow-xl">
                                    <div className="card w-96 bg-base-100 shadow-xl">
                                        <figure>
                                            <img src={toy.picture} alt={toy.name} className="card-image" />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{toy.name}</h2>
                                            <p>${toy.price}</p>
                                            <p>Rating: {toy.rating}</p>
                                            <div className="card-actions justify-end">

                                                <Link to={`/toy/${toy._id}`}>
                                                    <button className="btn btn-primary">View Details</button>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </TabPanel>

                <TabPanel>
                    <h2>Mini Police Car</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {toys
                            .filter((toy) => toy.subcategory === 'Mini Police Car')
                            .map((toy) => (
                                <div key={toy.id} className="card card-compact bg-base-100 shadow-xl">
                                    <div className="card w-96 bg-base-100 shadow-xl">
                                        <figure>
                                            <img src={toy.picture} alt={toy.name} className="card-image" />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{toy.name}</h2>
                                            <p>${toy.price}</p>
                                            <p>Rating: {toy.rating}</p>
                                            <div className="card-actions justify-end">

                                                <Link to={`/toy/${toy._id}`}>
                                                    <button className="btn btn-primary">View Details</button>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Category;

import React from 'react';

const Blogs = () => {
    return (
        <div className='mb-8'>
            <h1 className='bg-base-200 text-4xl font-bold text-center py-6'>Blog
            </h1>
            <hr />
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/GpfbYhz/Screenshot20220401174003.png" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl font-bold">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                        <h2 className='text-xl font-bold text-orange-700'>Answer:</h2>
                        <p className="py-3">An access token is a credential that allows a client to access protected resources on behalf of a user. A refresh token is used to obtain a new access token when the original one expires. They should be securely stored on the client-side, typically in a secure storage mechanism such as an HTTP-only cookie or a secure storage facility provided by the operating system or framework.</p>

                    </div>
                </div>
            </div>

            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/jfP1RRT/sql-vs-no-sql-1.png" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl font-bold">Compare SQL and NoSQL databases?</h1>
                        <h2 className='text-xl font-bold text-orange-700'>Answer:</h2>
                        <p className="py-3">SQL databases are structured, relational databases that use tables to store data and rely on structured query language (SQL) for data manipulation. NoSQL databases are unstructured or semi-structured, providing more flexibility in data storage and retrieval, and they often use alternative query languages or APIs.</p>

                    </div>
                </div>
            </div>

            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/TW1Kkvm/1677307548915.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl font-bold">What is express js? What is Nest JS
                            ?</h1>
                        <h2 className='text-xl font-bold text-orange-700'>Answer:</h2>
                        <p className="py-3">
                            Express.js is a minimalist web application framework for Node.js, used for building web applications and APIs.
                            NestJS is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications, leveraging TypeScript and architectural patterns inspired by Angular.</p>

                    </div>
                </div>
            </div>

            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/kxsF7gH/Aggregation.webp" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl font-bold">What is MongoDB aggregate and how does it work?
                        </h1>
                        <h2 className='text-xl font-bold text-orange-700'>Answer:</h2>
                        <p className="py-3">
                            MongoDB's aggregate is a powerful aggregation framework that allows for complex data analysis and processing operations. It provides a flexible way to perform operations such as grouping, filtering, sorting, and transforming data within a MongoDB collection, using a pipeline of stages to define the sequence of operations.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Gallery from '../Gallery/Gallery';
import About from '../About/About';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <div className='max-w-7xl  mx-auto'>
                <h1 className='text-4xl text-center my-10 font-bold text-teal-900	'>About Khelnar Dokan</h1>
                <About></About>

            </div>
            <div className='max-w-7xl  mx-auto'>
                <h1 className='text-4xl text-center my-10 font-bold text-teal-900	'>Gallery Section</h1>
                <Gallery></Gallery>

            </div>
            <div className='max-w-7xl  mx-auto'>
                <h1 className='text-4xl text-center my-10 font-bold text-teal-900	'>Shop by category</h1>
                <Category></Category>

            </div>
            <div className='max-w-7xl  mx-auto'>
                <h1 className='text-4xl text-center my-10 font-bold text-teal-900	'>Toy Cars Accesories </h1>
                <Category></Category>

            </div>

        </div>
    );
};

export default Home;
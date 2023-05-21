import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import your components
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Gallery from '../Gallery/Gallery';
import About from '../About/About';
import Accesories from '../Accesories/Accesories';

const Home = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <Banner />
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-4xl text-center my-10 font-bold text-teal-900' data-aos='fade-up'>About Khelnar Dokan</h1>
                <About />
            </div>
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-4xl text-center my-10 font-bold text-teal-900' data-aos='fade-up'>Gallery Section</h1>
                <Gallery />
            </div>
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-4xl text-center my-10 font-bold text-teal-900' data-aos='fade-up'>Shop by category</h1>
                <Category />
            </div>
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-4xl text-center my-10 font-bold text-teal-900' data-aos='fade-up'>Toy Cars Accessories</h1>
                <Accesories />
            </div>
        </div>
    );
};

export default Home;

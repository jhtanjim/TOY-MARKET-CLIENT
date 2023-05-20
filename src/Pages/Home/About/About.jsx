import React from 'react';

const About = () => {
    return (
        <div><div className="hero py-8  bg-base-900">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/TwcnV39/mikko-o-rg-Mnd-GKTFYM-unsplash.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">About Khelnar Dokan</h1>
                    <p className="py-6 text-cyan-900 text-xl">Welcome to Khelnar Dokan, your ultimate destination for toy cars and more! We are passionate about providing a wide range br of toy cars that ignite the imagination and bring joy to children of all ages. With a focus on quality and variety, we strive to offer the latest and most popular toy car models, ensuring endless hours of fun and excitement for kids.</p>
                    <button className="btn btn-primary">Visit Us</button>
                </div>
            </div>
        </div>

        </div>
    );
};

export default About;
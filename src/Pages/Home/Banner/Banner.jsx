
import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

const Banner = () => {




    return (
        <div className="carousel w-full ">
            <AwesomeSlider animation="cubeAnimation" className="slider">
                <div className="bg-black">
                    <img
                        className=""
                        src="https://i.ibb.co/5GLt3VQ/pexels-mike-bird-97353.jpg"
                        alt="Slider 1"
                    />

                </div>
                <div >
                    <img
                        className=""
                        src="https://i.ibb.co/GnyjmhM/pexels-lorena-mart-nez-2320208.jpg"
                        alt="Slider 2"
                    />

                </div>
                <div >
                    <img
                        className=""
                        src="https://i.ibb.co/my5Z5pk/pexels-mike-bird-132539.jpg"
                        alt="Slider 3"
                    />

                </div>
                <div >
                    <img
                        className=""
                        src="https://i.ibb.co/syJr7d4/pexels-revac-film-s-photography-552139.jpg"
                        alt="Slider 4"
                    />

                </div>
            </AwesomeSlider>
        </div>
    );
};

export default Banner;


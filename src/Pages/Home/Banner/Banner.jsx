import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[800px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/sF4h6Sf/pexels-pixabay-163546.jpg" className="w-full" alt="Slide 1" />

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle mr-5">
                            ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://cdn.pixabay.com/photo/2016/11/06/05/33/miniature-1802333_960_720.jpg" className="w-full" alt="Slide 2" />

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle mr-5">
                            ❮
                        </a>
                        <a href="#slide3" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://cdn.pixabay.com/photo/2014/11/23/12/11/toy-542701_960_720.jpg" className="w-full" alt="Slide 3" />

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle mr-5">
                            ❮
                        </a>
                        <a href="#slide4" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://cdn.pixabay.com/photo/2017/02/22/18/52/model-car-2090291_960_720.jpg" className="w-full" alt="Slide 4" />

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle mr-5">
                            ❮
                        </a>
                        <a href="#slide1" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[800px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src='https://cdn.pixabay.com/photo/2016/11/06/06/36/toy-1802372_960_720.jpg' className="w-full  " />
                    <div className="absolute flex  items-center  h-full   left-0 top=0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] pl-12">
                        <div className='text-white space-y-7 w-1/2 '>
                            <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-primary mr-5">Discover More</button>
                                <button className="btn btn-outline btn-success">Latest Project</button>

                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src='https://cdn.pixabay.com/photo/2016/11/06/05/33/miniature-1802333_960_720.jpg' className="w-full  " />
                    <div className="absolute flex  items-center  h-full   left-0 top=0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] pl-12">
                        <div className='text-white space-y-7 w-1/2 '>
                            <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-primary mr-5">Discover More</button>
                                <button className="btn btn-outline btn-success">Latest Project</button>

                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src='https://cdn.pixabay.com/photo/2014/11/23/12/11/toy-542701_960_720.jpg' className="w-full  " />
                    <div className="absolute flex  items-center  h-full   left-0 top=0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] pl-12">
                        <div className='text-white space-y-7 w-1/2 '>
                            <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-primary mr-5">Discover More</button>
                                <button className="btn btn-outline btn-success">Latest Project</button>

                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src='https://cdn.pixabay.com/photo/2017/02/22/18/52/model-car-2090291_960_720.jpg' className="w-full  " />
                    <div className="absolute flex  items-center  h-full   left-0 top=0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] pl-12">
                        <div className='text-white space-y-7 w-1/2 '>
                            <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-primary mr-5">Discover More</button>
                                <button className="btn btn-outline btn-success">Latest Project</button>

                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
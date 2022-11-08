import React from 'react';
import banner from '../../../Assets/image/banner/banner1.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img alt='' src={banner} className="w-full rounded-xl banner-img" />
                <div className='banner-img'>

                </div>
                <div className="absolute flex justify-end transform -translate-y1/2 left-24 top-1/4">
                    <h1 className='lg:text-6xl font-bold text-white'>
                        Online Counselling <br />
                        & Therapy <br /><br />
                        Helped over <br />
                        Thousand of users
                    </h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
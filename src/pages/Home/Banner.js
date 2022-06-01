import React from 'react';
import banner from '../../assets/images/hero-image.png'
import './Home.css'

const Banner = () => {
    return (
        <section className=' bg-primary relative'>
            <div className="container mx-auto pt-36">
                <div className="hero w-full">
                    <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full">
                        <div className=' flex-1 justify-end'>
                            <img src={banner} className="rounded-lg" alt='banner' />
                        </div>
                        <div className=' flex-1'>
                            <h1 className="text-5xl font-bold max-w-sm leading-tight text-secondary">Let’s Grow Your Brand To The Next Level</h1>
                            <p className="py-6 max-w-md">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-secondary text-white">Hire us</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="custom-shape-divider-bottom-1654070372">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>
        </section>
    );
};

export default Banner;
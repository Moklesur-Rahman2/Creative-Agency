import React from 'react';
import slack from '../../assets/images/brand1.png'
import google from '../../assets/images/brand2.png'
import uber from '../../assets/images/brand3.png'
import netflix from '../../assets/images/brand4.png'
import airbnb from '../../assets/images/brand5.png'

const Brands = () => {
    return (
        <section>
            <div className="container mx-auto py-16">
                <div className="brands grid grid-flow-row grid-cols-5 justify-center items-center w-9/12 mx-auto">
                    <div className="brand">
                        <img src={slack} alt="slack" className=' w-32 mx-auto' />
                    </div>
                    <div className="brand">
                        <img src={google} alt="google" className=' w-32 mx-auto' />
                    </div>
                    <div className="brand">
                        <img src={uber} alt="uber" className=' w-28 mx-auto' />
                    </div>
                    <div className="brand">
                        <img src={netflix} alt="netflix" className=' w-32 mx-auto' />
                    </div>
                    <div className="brand">
                        <img src={airbnb} alt="airbnb" className=' w-36 mx-auto' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brands;
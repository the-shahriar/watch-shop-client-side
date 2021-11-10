import React from 'react';
import featureImage from '../../../assets/fillerImage.png';
import img1 from '../../../assets/featureImages/1.jpg';
import img2 from '../../../assets/featureImages/2.jpg';
import img3 from '../../../assets/featureImages/3.jpg';
import img4 from '../../../assets/featureImages/4.jpg';

const Features = () => {
    return (
        <div className="mt-32">
            <div className="home-banner grid grid-cols-1 gap-12 md:grid-cols-2">
                <div>
                    <img style={{width: '95%'}} src={featureImage} alt="feature" />
                </div>
                <div className="grid grid-cols-2 gap-12">
                    <div>
                        <div className="mb-12">
                            <img src={img1} alt="" />
                            <h3 className="font-semibold text-xl">Build Quality and Design</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam hic possimus molestias porro laborum nam.</p>
                        </div>
                        <div>
                            <img src={img2} alt="" />
                            <h3 className="font-semibold text-xl">Excellent battery life</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi a facilis velit deserunt corrupti voluptatum.</p>
                        </div>
                    </div>
                    <div>
                        <div className="mb-12">
                            <img src={img3} alt="" />
                            <h3 className="font-semibold text-xl">Better Battery Life</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo iusto rem quia qui fuga labore?</p>
                        </div>
                        <div>
                            <img src={img4} alt="" />
                            <h3 className="font-semibold text-xl">Accurate activity tracking</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, perspiciatis! Asperiores porro quam animi iure?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
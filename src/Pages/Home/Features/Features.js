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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <div className="mb-12">
                            <img src={img1} alt="" />
                            <h3 className="font-semibold text-xl">Build Quality and Design</h3>
                            <p>And we hoped a deep roar would bellow from a gleaming example of exquisite design, superior build quality and space-age technology.</p>
                        </div>
                        <div>
                            <img src={img2} alt="" />
                            <h3 className="font-semibold text-xl">Excellent Battery Life</h3>
                            <p>Charging is improving, faster and more convenient. But you can make some adjustments here and there to help you squeeze out every last bit of juice, and together they might just help your phone to keep going as long as you do.</p>
                        </div>
                    </div>
                    <div>
                        <div className="mb-12">
                            <img src={img3} alt="" />
                            <h3 className="font-semibold text-xl">Better Battery Life</h3>
                            <p>Charging is improving, faster and more convenient. But you can make some adjustments here and there to help you squeeze out every last bit of juice.</p>
                        </div>
                        <div>
                            <img src={img4} alt="" />
                            <h3 className="font-semibold text-xl">Accurate Activity Tracking</h3>
                            <p>And we hoped a deep roar would bellow from a gleaming example of exquisite design, superior build quality and space-age technology.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
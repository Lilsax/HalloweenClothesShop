import React from 'react';

import './Slider.scss';

import pic from '../../../Assists/Rectangle 35.png'

export default function Slider() {
    return (
        <div className="Slider-data cc">
            <img src={pic} alt="" />
            <div className="left-cc">
                <h2 className="hallowen-text">Join Our Halloween !</h2>
                <h4 className="paragraph-text">You can have anything you want in life if you dress for it.</h4>
                <a className="button-link" href="#"> SHOP NOW</a>
                </div>
        </div>
    )
}

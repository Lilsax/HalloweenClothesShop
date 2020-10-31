import React from 'react';
import { FaSistrix } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



import './Header.scss';
import SliderData from './SliderData/Slider';
import Cardss from '../Cards/CardHolder';
import Footer from '../Footer/Footer';


export default function Header() {
    const settings = {
        className: "sleman",
        dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
        
        <div className="main-header">
            <div className="first-part cc">
               <div>
               <span className="span active-color">Discover</span>
                <span className="span not-active">Browse</span>
               </div>
               <div className="search-div">
                    <FaSistrix className="icon-search icon"/>
                   <input type="text" placeholder="Search" />
               </div>        
            </div>
            
            <Slider {...settings}>
                    <SliderData />
                    <SliderData />
                    <SliderData />
                    <SliderData />
                    <SliderData />
                </Slider>  

                <span className="hall-span cc">Halloween Sale 2020</span>
            <Cardss />

            <Footer />

        </div>
    )
}

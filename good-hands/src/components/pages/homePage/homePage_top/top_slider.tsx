import React, { Component } from "react";
import Slider from "react-slick";

const TopSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        dots: true,
    };
    return (
        <Slider {...settings}>
            <div className="home-top_slider_items">
                <span className="home-top_slider_tag">1</span>
                <img src="#" alt="" />
            </div>
            <div className="home-top_slider_items">
                <span className="home-top_slider_tag">2</span>
                <img src="#" alt="" />
            </div>
            <div className="home-top_slider_items">
                <span className="home-top_slider_tag">3</span>
                <img src="#" alt="" />
            </div>
            <div className="home-top_slider_items">
                <span className="home-top_slider_tag">4</span>
                <img src="#" alt="" />
            </div>
        </Slider>
    );
};
export default TopSlider;

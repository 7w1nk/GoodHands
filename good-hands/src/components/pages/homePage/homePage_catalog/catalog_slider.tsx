import React, { Component } from "react";
import Slider from "react-slick";

const CatalogSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
    };
    return (
        <Slider {...settings}>
            <div className="home-catalog_slider_items">
                <span className="home-catalog_slider_tag">Кошки</span>
                <img src="#" alt="" />
            </div>
            <div className="home-catalog_slider_items">
                <span className="home-catalog_slider_tag">Собаки</span>
                <img src="#" alt="" />
            </div>
            <div className="home-catalog_slider_items">
                <span className="home-catalog_slider_tag">Грызуны</span>
                <img src="#" alt="" />
            </div>
            <div className="home-catalog_slider_items">
                <span className="home-catalog_slider_tag">Птицы</span>
                <img src="#" alt="" />
            </div>
            <div className="home-catalog_slider_items">
                <span className="home-catalog_slider_tag">Рептилии</span>
                <img src="#" alt="" />
            </div>
            <div className="home-catalog_slider_items">
                <span className="home-catalog_slider_tag">Аквариумные</span>
                <img src="#" alt="" />
            </div>
        </Slider>
    );
};

export default CatalogSlider;

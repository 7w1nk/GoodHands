import React, { Component } from "react";
import Slider from "react-slick";

const CatalogSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            <div className="homePage_catalog-slider-items">
                <span className="homePage_catalog-slider-tag">Кошки</span>
                <img src="#" alt="" />
            </div>
            <div className="homePage_catalog-slider-items">
                <span className="homePage_catalog-slider-tag">Собаки</span>
                <img src="#" alt="" />
            </div>
            <div className="homePage_catalog-slider-items">
                <span className="homePage_catalog-slider-tag">Грызуны</span>
                <img src="#" alt="" />
            </div>
            <div className="homePage_catalog-slider-items">
                <span className="homePage_catalog-slider-tag">Птицы</span>
                <img src="#" alt="" />
            </div>
            <div className="homePage_catalog-slider-items">
                <span className="homePage_catalog-slider-tag">Рептилии</span>
                <img src="#" alt="" />
            </div>
            <div className="homePage_catalog-slider-items">
                <span className="homePage_catalog-slider-tag">Аквариумные</span>
                <img src="#" alt="" />
            </div>
        </Slider>
    );
};

export default CatalogSlider;

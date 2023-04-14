import React, { useRef, CSSProperties } from "react";
import HomePage_nav from "./homePage_nav/homePage_nav";
import HomePage_menu from "./homePage_menu/homePage_menu";
import HomePage_catalog from "./homePage_catalog/homePage_catalog";
import HomePage_top from "./homePage_top/homePage_top";
import HomePage_question from "./homePage_question/homePage_question";
import HomePage_footer from "./homePage_footer/homePage_footer";

const HomePage = () => {
    return (
        <>
            <HomePage_nav />
            <HomePage_menu />
            <HomePage_catalog />
            <HomePage_top />
            <HomePage_question />
            <div
                style={{
                    width: "100 %",
                    height: "500px",
                }}
            ></div>
            <HomePage_footer />
        </>
    );
};

export default HomePage;

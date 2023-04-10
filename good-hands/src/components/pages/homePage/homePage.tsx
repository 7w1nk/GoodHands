import React, { useRef, CSSProperties } from "react";
import HomePage_nav from "./homePage_nav/homePage_nav";
import HomePage_menu from "./homePage_menu/homePage_menu";
import HomePage_catalog from "./homePage_catalog/homePage_catalog";

const HomePage = () => {
    return (
        <>
            <HomePage_nav />
            <HomePage_menu />
            <HomePage_catalog />
        </>
    );
};

export default HomePage;

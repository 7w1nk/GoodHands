import Logo from "../../../logo/logo";
import Navi from "../../../navigation/navi";
import Location from "../../../location/location";
import React from "react";

const HomePage_nav = () => {
    return <nav className="home-navigation">
        <Logo/>
        <Navi/>
        <Location/>
    </nav>
};
export default HomePage_nav;
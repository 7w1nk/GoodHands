import Logo from "../../../logo/logo";
import Location from "../../../location/location";
import React from "react";

const AdsPage_nav = () => {
    return (
        <nav className="ads-navigation">
            <div className={"container"}>
                <Logo />
                <Location />
            </div>
        </nav>
    );
};
export default AdsPage_nav;

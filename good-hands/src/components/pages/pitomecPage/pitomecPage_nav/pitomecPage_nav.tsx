import Logo from "../../../logo/logo";
import Location from "../../../location/location";
import React from "react";

const PitomecPage_nav = () => {
    return (
        <nav className="pitomec-navigation">
            <div className={"container"}>
                <Logo />
                <Location />
            </div>
        </nav>
    );
};
export default PitomecPage_nav;

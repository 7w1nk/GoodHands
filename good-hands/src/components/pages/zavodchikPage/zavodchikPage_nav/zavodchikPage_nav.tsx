import Logo from "../../../logo/logo";
import Location from "../../../location/location";
import React from "react";

const ZavodchikPage_nav = () => {
    return (
        <nav className="zavodchik-navigation">
            <div className={"container"}>
                <Logo />
                <Location />
            </div>
        </nav>
    );
};
export default ZavodchikPage_nav;

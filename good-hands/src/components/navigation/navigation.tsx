import React from "react";
import Logo from "./logo/logo";
import Location from "./location/location";
import Navi from "./navi/navi";

const Navigation = () => {
    return (
        <>
            <nav className={""}>
                <Logo/>
                <Navi/>
                <Location/>
            </nav>
        </>
    )
}
export default Navigation;
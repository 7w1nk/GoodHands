import img from '../../img/Logo.svg';
import {NavLink} from "react-router-dom";

const Logo = () => {
    return (
        <NavLink className="home-navigation_logo" to="/">
            <img src={img} alt={"Logo Good Hands"}/>
            <span>GOODHANDS</span>
        </NavLink>
    )
}

export default Logo
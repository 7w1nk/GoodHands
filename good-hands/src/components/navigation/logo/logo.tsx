import path from "path";
import img from '../../../img/Logo.svg';

const Logo = () =>{
    return(
        <a href={"/"}>
            <img src={img}/>
            <span>GOODHANDS</span>
        </a>
    )
}

export default Logo
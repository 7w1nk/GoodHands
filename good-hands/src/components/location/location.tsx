import locator from "../../img/Location.svg"

const Location = () => {
    return (
        <span className="home-navigation_location">
            <img alt="Point of location" src={locator}/>
            <span>Красноярск</span>
        </span>
    )
}
export default Location
import { useEffect, useState } from "react";
import locator from "../../img/Location.svg";
import ListCities from "./ListCity.json";

const [currentCity, setCurrentCity] = useState("");

useEffect(() => {
  const searchCity = [];
  ListCities.forEach((city, index) => {
    Object.values(city).every((val, valIndex) => {
      if (val.toLowerCase().includes(currentCity.toLowerCase())) {
        searchCity.push(city);
        return;
      }
    });
  });
}, [currentCity]);

const Location = () => {
  return (
    <span className="home-navigation_location">
      <img alt="Point of location" src={locator} />
      <span>
        {ListCities.map((data) => {
          return data.city.match("Красноярск");
        })}
      </span>
    </span>
  );
};
export default Location;

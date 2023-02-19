import React, { useState } from "react";
import mapIcon from "../assets/map.svg";
import searchIcon from "../assets/search.svg";

const SearchBar = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(city !== "") setQuery({ q: city });

    e.target.reset();
  };

  const handleCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      setQuery({ lat, lon });
    });
  };

  const handleChangeUnits = (e) => {
    setUnits(e.target.name);
  };

  return (
    <>
      <div className="mt-16">
        <h2 className="text-center font-semibold text-white drop-shadow-lg">
          Hackther Forecast.
          <br />
          the Weather Forecast App You Need.
        </h2>
        <hr className="h-1 bg-white w-full rounded-full mt-2" />
        <div className="flex mt-6 mx-8">
          <form noValidate className="flex w-full" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter location..."
              className="relative rounded-xl py-1 px-3 w-2/3 bg-gray-300 bg-opacity-60 text-black placeholder-black outline-black"
              required
              onChange={handleChange}
            />
            <button type="submit" className="ml-2">
              <img
                src={searchIcon}
                alt="icon"
                className="transition ease-out hover:scale-125"
              />
            </button>
          </form>
          <img
            src={mapIcon}
            alt="icon"
            className="cursor-pointer transition ease-out hover:scale-125 mx-1"
            onClick={handleCurrentLocation}
          />
          <p className="text-xl mx-1">|</p>
          <button
            name="metric"
            className="text-xl font-semibold transition ease-out hover:scale-125 mx-1"
            onClick={handleChangeUnits}
          >
            °C
          </button>
          <p className="text-xl mx-1">|</p>
          <button
            name="imperial"
            className="text-xl font-semibold transition ease-out hover:scale-125 mx-1"
            onClick={handleChangeUnits}
          >
            °F
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;

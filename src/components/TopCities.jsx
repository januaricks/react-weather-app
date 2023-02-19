import React from "react";
import mapIcon from "../assets/map.svg";

const TopCities = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Sydney",
    },
    {
      id: 3,
      title: "Berlin",
    },
  ];

  return (
    <>
      <div className="flex items-center justify-around my-3">
        {cities.map((city) => (
          <button
            key={city.id}
            className="text-slate-900 font-semibold text-sm flex p-2 text-gray-100 bg-gray-100 bg-opacity-30 rounded-lg"
            onClick={() => setQuery({ q: city.title })}
          >
            <img src={mapIcon} alt="map" width="12" className="pt-1 mr-1" />
            {city.title}
          </button>
        ))}
      </div>
    </>
  );
};

export default TopCities;

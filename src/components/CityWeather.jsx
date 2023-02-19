import React from "react";
import { formatIcon, formatToLocalTime } from "../services";
import { LoadingSearch } from "./Loading";

const CityWeather = ({ weather, loading }) => {
  const { dt, timezone, name, country, details, temp, icon } = weather || {};

  const formatTime = formatToLocalTime(dt, timezone);
  const iconWeather = formatIcon(icon);

  return (
    <>
      {loading ? (
        <LoadingSearch />
      ) : (
        <>
          <div className="text-center mt-8">
            <p className="text-xl">{formatTime}</p>
            <p className="mt-4 text-lg font-semibold">
              {name}, {country}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img src={iconWeather} alt="icon" width="80" />
          </div>
          <div className="flex items-center justify-center">
            <p className="text-lg">
              {details} | {temp?.toFixed()}°
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default CityWeather;

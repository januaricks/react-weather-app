import React from "react";
import tempIcon from "../assets/temprature.ico";
import feelIcon from "../assets/feel.ico";
import humidityIcon from "../assets/humidity.ico";
import windIcon from "../assets/windy.ico";
import upIcon from "../assets/up.svg";
import downIcon from "../assets/down.svg";
import sunriseIcon from "../assets/sunrise.svg";
import sunsetIcon from "../assets/sunset.svg";
import { formatIcon, formatToLocalTime } from "../services";

const DetailWeather = ({ weather, changeBackground }) => {
  const {
    name,
    country,
    icon,
    details,
    temp,
    feels_like,
    humidity,
    speed,
    temp_max,
    temp_min,
    sunrise,
    sunset,
    timezone,
  } = weather || {};

  const iconWeather = formatIcon(icon);
  const sunriseTime = formatToLocalTime(sunrise, timezone, "hh:mm a");
  const sunsetTime = formatToLocalTime(sunset, timezone, "hh:mm a");

  return (
    <>
      <h1 className="text-2xl font-semibold">Weather Details.</h1>
      <div
        className={`w-full h-48 rounded-lg mt-2 drop-shadow-xl bg-gradient-to-br ${changeBackground}`}
      >
        <div className="flex justify-between px-8 py-5 text-white">
          <div>
            <p className="text-lg font-semibold">
              {name}, {country}
            </p>
            <div className="flex items-center justify-center">
              <img src={iconWeather} alt="icon" width="64" />
            </div>
            <p className="text-md text-center">{details}</p>
          </div>
          <div>
            <p className="flex justify-center mb-1 text-sm">
              <img src={tempIcon} alt="icon" width="20" className="mr-2" />
              Temp: {temp?.toFixed()}°
            </p>
            <p className="flex justify-center my-1 text-sm">
              <img src={feelIcon} alt="icon" width="20" className="mr-2" />
              Feel like: {feels_like?.toFixed()}°
            </p>
            <p className="flex justify-center my-1 text-sm">
              <img src={humidityIcon} alt="icon" width="20" className="mr-2" />
              Humidity: {humidity}%
            </p>
            <p className="flex justify-center my-1 text-sm">
              <img src={windIcon} alt="icon" width="20" className="mr-2" />
              Wind: {speed?.toFixed()} km/h
            </p>
          </div>
        </div>
        <div className="flex justify-center text-white text-xs px-8">
          <div className="flex">
            <img src={upIcon} alt="icon" width="20" className="mr-1" />
            High: {temp_max?.toFixed()}°
          </div>
          <p className="px-2">|</p>
          <div className="flex">
            <img src={downIcon} alt="icon" width="20" className="mr-1" />
            Down: {temp_min?.toFixed()}°
          </div>
          <p className="px-2">|</p>
          <div className="flex">
            <img src={sunriseIcon} alt="icon" width="20" className="mr-1" />
            Rise: {sunriseTime}
          </div>
          <p className="px-2">|</p>
          <div className="flex">
            <img src={sunsetIcon} alt="icon" width="20" className="mr-1" />
            Set: {sunsetTime}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailWeather;

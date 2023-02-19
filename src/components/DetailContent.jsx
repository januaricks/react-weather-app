import React from "react";
import DetailWeather from "./DetailWeather";
import Forecast from "./Forecast";

const DetailContent = ({ weather, changeBackground }) => {
  return (
    <>
      <div className="py-5 px-7">
        <DetailWeather weather={weather} changeBackground={changeBackground}/>
        <Forecast title="Hourly Forecast." forecast={weather.hourly} />
        <Forecast title="Daily Forecast." forecast={weather.daily} />
      </div>
    </>
  );
};

export default DetailContent;

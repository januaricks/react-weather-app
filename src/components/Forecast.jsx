import React from "react";
import { formatIcon } from "../services";

const Forecast = ({ title, forecast }) => {
  return (
    <>
      <div className="my-4">
        <h1 className="text-2xl font-semibold mb-2">{title}</h1>
        <div className="flex flex-row gap-4">
          {forecast?.map((item, index) => {
            const { icon, temp, title } = item || {};
            return (
              <div className="w-24 h-28 drop-shadow-lg rounded-md text-white text-center text-sm bg-gradient-to-br from-slate-400 to-gray-600" key={index}>
                <p className="mt-2">{title}</p>
                <div className="flex justify-center mt-1">
                  <img src={formatIcon(icon)} alt="icon" width="48" />
                </div>
                <p className="mt-1">{temp?.toFixed()}°</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Forecast;

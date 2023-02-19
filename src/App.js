import React, { useState, useEffect } from "react";
import { formattedWeatherData } from "./services";
import SearchContent from "./components/SearchContent";
import DetailContent from "./components/DetailContent";
import "./App.css";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  const [weather, setWeather] = useState({});
  const [query, setQuery] = useState({ q: "jakarta" });
  const [units, setUnits] = useState("metric");
  const [loading, setLoading] = useState(false);

  const changeBackground = () => {
    let checked = units === "metric" ? 20 : 60;

    if (weather?.temp <= checked) return "from-cyan-600 to-blue-600";
    return "from-yellow-600 to-orange-600";
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        await formattedWeatherData({ ...query, units }).then((data) =>
          setWeather(data)
        );
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [query, units]);

  return (
    <div
      className={`App w-screen h-screen flex item-center justify-center py-10 bg-gradient-to-br ${changeBackground()}`}
    >
      <div className="flex w-3/4 min-h-full rounded-3xl drop-shadow-2xl m-auto bg-gray-100">
        <div className="img-container contrast-125">
          <SearchContent
            weather={weather}
            loading={loading}
            setQuery={setQuery}
            setUnits={setUnits}
          />
        </div>
        <div className="w-1/2">
          <DetailContent
            weather={weather}
            changeBackground={changeBackground}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import CityWeather from "./CityWeather";
import SearchBar from "./SearchBar";
import TopCities from "./TopCities";

const SearchContent = ({ weather, loading, setQuery, setUnits }) => {
  return (
    <>
      <TopCities setQuery={setQuery} />
      <CityWeather weather={weather} loading={loading} />
      <SearchBar setQuery={setQuery} setUnits={setUnits} />
    </>
  );
};

export default SearchContent;

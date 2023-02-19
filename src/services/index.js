import { DateTime } from "luxon";

const BASE_URL = "https://api.openweathermap.org/data/";
const API_KEY = "bb09e4b0b4d0b4714dcbc61b0acabc24";

const weatherData = async (code, type, searchParams) => {
  const url = new URL(`${BASE_URL}/${code}/${type}`);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return await fetch(url)
    .then((data) => data.json())
    .catch((err) => console.log(err));
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    sys: { country, sunrise, sunset },
    wind: { speed },
    name,
    dt,
    weather,
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    speed,
    details,
    icon,
  };
};

const formatForecastWeather = (data) => {
  let { timezone, daily, hourly } = data;
  daily = daily.slice(1, 6).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "ccc"),
      temp: d.temp.day,
      icon: d.weather[0].icon,
    };
  });

  hourly = hourly.slice(1, 6).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
      temp: d.temp,
      icon: d.weather[0].icon,
    };
  });

  return { timezone, daily, hourly };
};

export const formatToLocalTime = (
  secs = 0,
  zone = "",
  format = "cccc, dd LLL yyyy' | 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

export const formatIcon = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;


export const formattedWeatherData = async (searchParams) => {
  const currentWeather = await weatherData("2.5", "weather", searchParams).then(
    formatCurrentWeather
  );

  const { lat, lon } = currentWeather;

  const forecastWeather = await weatherData("3.0", "onecall", {
    lat,
    lon,
    exclude: "current,minutely,alerts",
    units: searchParams.units,
  }).then(formatForecastWeather);

  return { ...currentWeather, ...forecastWeather };
};

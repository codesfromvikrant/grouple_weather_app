import axios from "axios";

const BASE_URL = "https://api.weatherapi.com/v1";
const API_KEY = "af04f92943bf4b558a8143733231909";


const currentWeather = async (location) => {
  const { data } = await axios.get(
    `${BASE_URL}/current.json?key=${API_KEY}&q=${location}&aqi=yes`
  );
  return data;
}

const forecastWeather = async (location) => {
  const { data } = await axios.get(
    `${BASE_URL}/forecast.json?key=${API_KEY}&q=${location}&days=7&aqi=yes&alerts=yes`
  );
  return data;
}

const searchLocation = async (location) => {
  const { data } = await axios.get(
    `${BASE_URL}/search.json?key=${API_KEY}&q=${location}`
  );
  return data;
}

export { currentWeather, forecastWeather, searchLocation };


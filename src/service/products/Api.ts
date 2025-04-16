import axios from "axios";

import type { ForecastResponse, SearchLocation, WeatherResponse } from "../../types/Types";

const API_KEY = "0ebc7cc296f1448e97a44101251404";
const BASE_URL = "https://api.weatherapi.com/v1";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function fetchCurrentWeather(location: string): Promise<WeatherResponse> {
  const { data } = await axiosInstance.get(`/current.json?key=${API_KEY}&q=${encodeURIComponent(location)}`);
  return data;
}

export async function fetchForecastWeather(location: string, days: number = 7): Promise<ForecastResponse> {
  const { data } = await axiosInstance.get(`/forecast.json?key=${API_KEY}&q=${encodeURIComponent(location)}&days=${days}`);
  return data;
}

export async function searchWeatherLocation(query: string): Promise<SearchLocation[]> {
  const { data } = await axiosInstance.get(`/search.json?key=${API_KEY}&q=${encodeURIComponent(query)}`);
  return data;
}

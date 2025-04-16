import type { FC } from "react";

import type { WeatherCardProps } from "../../../types/Types";

import Card from "../../../component/Card";

export const WeatherCard: FC<WeatherCardProps> = ({ currentWeather }) => {
  return (
    <Card className="flex-col md:flex-row  justify-between">

      <div className="flex flex-col md:flex-row items-center ">
        <img
          src={`https:${currentWeather.current.condition.icon}`}
          alt={currentWeather.current.condition.text}
          className="w-24 h-24"
        />
        <div className="text-start">
          <h2 className="text-5xl font-bold">
            {` ${currentWeather.current.temp_c} °C`}
          </h2>
          <p className="text-xl text-blue-200">{currentWeather.current.condition.text}</p>
          <p className="text-lg text-blue-300">
            {`Feels like : ${currentWeather.current.feelslike_c} °C`}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 md:mt-0">

        <div className="flex items-center">
          <div className="p-2 rounded-full bg-blue-800/50 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-blue-200">Humidity</p>
            <p className="text-lg font-medium">
              {`  ${currentWeather.current.humidity} %`}
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="p-2 rounded-full bg-blue-800/50 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-blue-200">Wind Speed</p>
            <p className="text-lg font-medium">
              {`${currentWeather.current.wind_kph} km/h`}
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="p-2 rounded-full bg-blue-800/50 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-blue-200">UV Index</p>
            <p className="text-lg font-medium">{currentWeather.current.uv}</p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="p-2 rounded-full bg-blue-800/50 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-blue-200">Updated At</p>
            <p className="text-lg font-medium">
              {new Date(currentWeather.current.last_updated).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </p>
          </div>
        </div>
      </div>

    </Card>
  );
};

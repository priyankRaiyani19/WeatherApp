import type { FC } from "react";

import { FaClock } from "react-icons/fa";
import { PiWindBold } from "react-icons/pi";
import { TbUvIndex } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";

import type { WeatherCardProps } from "../../../types/Types";

import Card from "../../../component/Card";

export const WeatherCard: FC<WeatherCardProps> = ({ currentWeather }) => {
  const otherDetails = [
    {
      icon: <WiHumidity size={26} />,
      label: "Humidity",
      value: `${currentWeather.current.humidity} %`,
    },
    {
      icon: <PiWindBold size={26} />,
      label: "Wind Speed",
      value: `${currentWeather.current.wind_kph} km/h`,
    },
    {
      icon: <TbUvIndex size={26} />,
      label: "UV Index",
      value: currentWeather.current.uv,
    },
    {
      icon: <FaClock size={26} />,
      label: "Updated At",
      value: new Date(currentWeather.current.last_updated).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ];

  return (
    <Card className="flex-col md:flex-row  justify-between">
      <div className="flex flex-col md:flex-row items-center ">
        <img
          src={`https:${currentWeather?.current?.condition?.icon}`}
          alt={currentWeather?.current?.condition?.text}
          className="w-24 h-24"
        />
        <div className="text-start">
          <h2 className="text-5xl font-bold">
            {` ${currentWeather?.current?.temp_c} °C`}
          </h2>
          <p className="text-xl text-blue-200">{currentWeather?.current?.condition?.text}</p>
          <p className="text-lg text-blue-300">
            {`Feels like : ${currentWeather?.current?.feelslike_c} °C`}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem] mt-6 md:mt-0">
        {otherDetails.map((detail, index) => (
          <div key={index} className="flex  items-center gap-2  ">

            <div className="p-2 rounded-full bg-blue-800">
              {detail?.icon}
            </div>
            <div className="text-md">
              <p className="font-semibold">{detail?.label}</p>
              <p>{detail?.value}</p>
            </div>
          </div>
        ))}

      </div>

    </Card>
  );
};

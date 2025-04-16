import { useState } from "react";

import type { ForecastProps } from "../../../types/Types";

import { ForecastCard } from "./ForecastCard";

function ForecastPart({ nearbyHours, forecastData }: ForecastProps) {
  const [mode, setMode] = useState<"hour" | "week">("hour");

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { weekday: "short", day: "numeric" });
  };

  const weeklyData = forecastData?.forecast?.forecastday || [];
  // console.log("weeklyData", weeklyData);

  return (
    <div className="backdrop-blur-sm  flex flex-col gap-[2rem] ">
      <div className="flex flex-col md:flex-row justify-between gap-[2rem] items-center">
        <h2 className="text-xl md:text-2xl font-semibold w-full sm:text-left text-center">
          {`${mode === "hour" ? "Hourly" : "Weekly"}  Forecast`}
        </h2>
        <div className="flex items-center bg-white/10 px-2 py-1 rounded-full backdrop-blur-sm shadow-inner">
          <div
            onClick={() => setMode("hour")}
            className={`cursor-pointer px-4 py-1.5 rounded-full text-sm transition-colors ${
              mode === "hour" ? "bg-blue-600 text-white font-semibold" : "text-white hover:bg-blue-600/30"
            }`}
          >
            Hour
          </div>
          <div
            onClick={() => setMode("week")}
            className={`cursor-pointer px-4 py-1.5 rounded-full text-sm transition-colors ${
              mode === "week" ? "bg-blue-600 text-white font-semibold" : "text-white hover:bg-blue-600/30"
            }`}
          >
            Week
          </div>
        </div>
      </div>

      {mode === "hour"
        ? (

            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
              {nearbyHours.length > 0
                ? (
                    nearbyHours.map((hourData, index) => (
                      <ForecastCard
                        key={index}
                        day={hourData.time.split(" ")[1]}
                        src={hourData.condition.icon}
                        temp={hourData.temp_c}
                        i={hourData.time.split(" ")[0]}

                      />
                    ))
                  )
                : (
                    <p className="col-span-full text-center text-blue-200"> hourly data not available</p>
                  )}
            </div>

          )
        : (
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {weeklyData.length > 0
                ? (
                    weeklyData.map((day, index) => (
                      <ForecastCard
                        key={index}
                        day={formatDate(day.date)}
                        src={day.day.condition.icon}
                        temp={day.day.avgtemp_c}
                        i={index}

                      />
                    ))
                  )
                : (
                    <p className="col-span-full text-center text-blue-200">weekly data not available</p>
                  )}
            </div>
          )}
    </div>
  );
}

export default ForecastPart;

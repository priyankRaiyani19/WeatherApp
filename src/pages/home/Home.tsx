import { useQuery } from "@tanstack/react-query";

import { Loader } from "../../component/Loader";
import { useCurrentLocation } from "../../hooks/LocationContext";
import { fetchCurrentWeather, fetchForecastWeather } from "../../service/products/Api";
import AstroInfo from "./components/Astronomy";
import ForecastPart from "./components/ForecastPart";
import { WeatherCard } from "./components/WeatherCard";

function Home() {
  const { currentLocation } = useCurrentLocation();

  const { data: currentWeather, error: currentError, isLoading: isCurrentLoading } = useQuery({
    queryKey: ["currentWeather", currentLocation],
    queryFn: () => fetchCurrentWeather(currentLocation || "Delhi"),
    enabled: !!currentLocation,
  });

  const { data: forecastWeather, error: forecastError, isLoading: isForecastLoading } = useQuery({
    queryKey: ["forecastWeather", currentLocation],
    queryFn: () => fetchForecastWeather(currentLocation || "Delhi"),
    enabled: !!currentLocation,
  });
  const getNearbyHours = () => {
    if (!forecastWeather || !currentWeather)
      return [];
    const todayHours = forecastWeather.forecast.forecastday[0].hour;
    const currentHour = new Date(currentWeather.current.last_updated).getHours();
    const currentIndex = todayHours.findIndex(
      (hour: { time: string | number | Date }) => new Date(hour.time).getHours() === currentHour,
    );
    if (currentIndex === -1)
      return [];
    const start = Math.max(currentIndex - 3, 0);
    const end = Math.min(currentIndex + 3, todayHours.length - 1);
    return todayHours.slice(start, end + 1);
  };
  const nearbyHours = getNearbyHours();
  const astro = forecastWeather?.forecast?.forecastday[0]?.astro;
  // console.warn("forecastWeather", forecastWeather);

  return (
    <div className="min-h-screen w-full max-w-6xl  text-white mx-auto p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="text-2xl font-semibold text-blue-200">
          {currentWeather?.location?.localtime?.split(" ")[0] }
        </div>
        <div className="text-2xl md:text-3xl font-bold tracking-tight mt-2 md:mt-0">
          {currentWeather && `${currentWeather?.location?.name}, ${currentWeather?.location?.country}`}
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {isCurrentLoading
          ? (
              <Loader />
            )
          : currentError
            ? (
                <div className="bg-red-900/50 p-6 rounded-2xl shadow-lg">
                  <p className="text-red-200 text-center">{currentError?.message}</p>
                </div>
              )
            : (
                currentWeather && <WeatherCard currentWeather={currentWeather} />
              )}

        {astro && <AstroInfo astro={astro} />}

        {isForecastLoading
          ? ("")
          : forecastError
            ? (
                <div className="bg-red-900/50 p-6 rounded-2xl shadow-lg">
                  <p className="text-red-200 text-center">{forecastError?.message}</p>
                </div>
              )
            : (
                <ForecastPart
                  nearbyHours={nearbyHours}
                  forecastData={forecastWeather}
                />
              )}
      </div>
    </div>
  );
}

export default Home;

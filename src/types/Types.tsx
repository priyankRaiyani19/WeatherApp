export type WeatherResponse = {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime: string;
  };
  current: {
    last_updated: string;
    temp_c: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_kph: number;
    humidity: number;
    feelslike_c: number;
    uv: number;
  };
};

export type ForecastResponse = {
  location: {
    name: string;
    region: string;
    country: string;
    tz_id: string;
    localtime: string;
  };
  forecast: {
    forecastday: {
      [x: string]: any;
      date: string;
      day: {
        maxtemp_c: number;
        mintemp_c: number;
        avgtemp_c: number;
        condition: {
          text: string;
          icon: string;
          code: number;
        };
      };
    }[];
  };
};

export type SearchLocation = {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
};

export type Location = {
  id: string;
  name: string;
  region: string;
};

export type Props = {
  onSearch: (query: string) => void;
};

export type WeatherCardProps = {
  currentWeather: any;
};

export type HourData = {
  time: string;
  temp_c: number;
  condition: {
    icon: string;
    text: string;
  };
};

export type LocationContextType = {
  currentLocation: string;
  setCurrentLocation: (location: string) => void;
};

export type AstroInfoProps = {

  astro: any;
};

export type ForecastDay = {
  date: string;
  day: {

    avgtemp_c: number;

    condition: {
      text: string;
      icon: string;
    };
  };

};

export type ForecastProps = {
  nearbyHours: HourData[];
  forecastData?: {
    forecast?: {
      forecastday?: ForecastDay[];
    };
  };
};

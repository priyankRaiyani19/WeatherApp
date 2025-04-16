import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { HiLocationMarker, HiSearch } from "react-icons/hi";

import type { Location, Props } from "../../types/Types";

import { searchWeatherLocation } from "../../service/products/Api";

export function SearchBar({ onSearch }: Props) {
  const [query, setQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { data, error, isLoading } = useQuery<Location[], Error>({
    queryKey: ["searchWeatherLocation", query],
    queryFn: () => searchWeatherLocation(query),
    enabled: !!query && query.length >= 2,
    keepPreviousData: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      setIsDropdownOpen(false);
      setQuery("");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (e.target.value.length >= 2) {
      setIsDropdownOpen(true);
    }
    else {
      setIsDropdownOpen(false);
    }
  };

  const handleLocationSelect = (locationName: string, locationRegion: string) => {
    const fullLocation = `${locationName}, ${locationRegion}`;
    setQuery(fullLocation);
    onSearch(fullLocation);
    setIsDropdownOpen(false);
    setQuery("");
  };

  return (
    <div className="relative ">
      <div
        onSubmit={handleSubmit}
        className={`flex items-center backdrop-blur-sm bg-white/10 rounded-full border border-blue-300/30 overflow-hidden focus-within:ring-2 focus-within:ring-blue-400 transition-all duration-300 ${query.length > 0 ? "w-full" : "min-w-[280px] max-w-[500px]"}`}
      >
        <div className="pl-4 text-blue-200">
          <HiLocationMarker size={20} />
        </div>

        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          className="bg-transparent text-white placeholder:text-blue-200 outline-none py-3 px-3 w-full text-sm"
          placeholder="Search for a city..."
          autoFocus
          aria-label="Search for location"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white p-3.5 rounded-r-full transition-colors"
          aria-label="Search"
        >
          <HiSearch size={20} />
        </button>
      </div>

      {isDropdownOpen && (
        <div className="absolute mt-2 w-full bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-lg text-center z-50 p-4">
          {isLoading
            ? (
                <div className="flex gap-0.5 mxd-auto">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-300"></div>
                  <p className="text-blue-200 text-sm">Searching locations...</p>
                </div>
              )
            : error
              ? (
                  <p className="text-red-200 text-sm">
                    {`   Error: ${error?.message}`}
                  </p>
                )
              : data && data?.length > 0
                ? (
                    <ul>
                      {data.map(location => (
                        <li
                          key={location.id}
                        >
                          <button
                            type="submit"
                            onClick={() => handleLocationSelect(location.name, location.region)}
                            className="flex gap-[0.5rem] items-center px-4 py-3 hover:bg-blue-900/50 text-left min-w-full"
                          >
                            <HiLocationMarker className="text-blue-400 " />
                            <div>
                              <p className="text-white font-medium">{location.name}</p>
                              <p className="text-blue-300 text-xs">{location.region}</p>
                            </div>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )
                : (
                    <div className="text-blue-200  ">
                      No locations found.
                    </div>
                  )}
        </div>
      )}

    </div>
  );
}

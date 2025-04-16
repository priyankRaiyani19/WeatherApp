import type { ReactNode } from "react";

import { createContext, use, useEffect, useState } from "react";

import type { LocationContextType } from "../types/Types";

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export function LocationProvider({ children }: { children: ReactNode }) {
  const [currentLocation, setCurrentLocation] = useState<string>(() => {
    return localStorage.getItem?.("currentLocation") || "Delhi";
  });

  useEffect(() => {
    if (currentLocation) {
      localStorage.setItem("currentLocation", currentLocation);
    }
  }, [currentLocation]);

  return (
    <LocationContext value={{ currentLocation, setCurrentLocation }}>
      {children}
    </LocationContext>
  );
}

export function useCurrentLocation(): LocationContextType {
  const context = use(LocationContext);
  if (!context) {
    throw new Error("useCurrentLocation must be used within a LocationProvider");
  }
  return context;
}

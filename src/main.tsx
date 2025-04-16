import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";

import "./index.css";

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import { LocationProvider } from "./hooks/LocationContext.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>

      <QueryClientProvider client={queryClient}>
        <LocationProvider>
          <App />
        </LocationProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
);

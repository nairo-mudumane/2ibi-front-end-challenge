import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FilterQueryContextProvider } from "./contexts";
import App from "./App";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <FilterQueryContextProvider>
          <App />
        </FilterQueryContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);

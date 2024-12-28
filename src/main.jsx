import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./provider/Route.jsx"; // Correct import of the router
import { store } from "./provider/store.js";
import { Provider } from "react-redux";

import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrimeReactProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    </PrimeReactProvider>
  </StrictMode>
);

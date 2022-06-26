import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import "./index.scss";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import { PersistGate } from "redux-persist/integration/react";

import { Elements } from "@stripe/react-stripe-js";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { store, persistor } from "./store/store";
import { stripePromise } from "./utils/stripe/stripe.utils";
const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

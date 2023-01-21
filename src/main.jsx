import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  BackgroundContextProvider,
  BackgroundUrlContextProvider,
} from "./context/BackgroundContext";
import { TimerContextProvider } from "./context/TimerContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BackgroundContextProvider>
      <BackgroundUrlContextProvider>
        <TimerContextProvider>
          <App />
        </TimerContextProvider>
      </BackgroundUrlContextProvider>
    </BackgroundContextProvider>
  </React.StrictMode>
);

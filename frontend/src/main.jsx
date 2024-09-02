import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import PlayerContextProvider from "./context/PlayerConext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <PlayerContextProvider>
          <App />
        </PlayerContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>
);

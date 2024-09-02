import PlayerContextProvider from "./context/PlayerContext";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/signup/SignUp";
import { useAuthContext } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { authUser } = useAuthContext();
  return (
    <PlayerContextProvider>
      <Routes>
        <Route
          path="login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        />
        <Route
          path="*"
          element={authUser ? <Home /> : <Navigate to="login" />}
        />
      </Routes>
      <Toaster />
    </PlayerContextProvider>
  );
};

export default App;

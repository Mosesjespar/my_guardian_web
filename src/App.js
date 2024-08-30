import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import BottomNav from "./components/BottomNav";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-phone-input-2/lib/style.css";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/auth/SignIn";
import { routes } from "./navigation/routes";
import SignUp from "./pages/auth/SignUp";
import Otp from "./pages/auth/Otp";
import DashBoard from "./pages/DashBoard";
import { useSelector } from "react-redux";
import { UserSessionUtils } from "./utils/UserSessionUtils";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getLoginStatus = () => {
    const loggedIn = UserSessionUtils.isLoggedIn();

    console.log(loggedIn);
    setIsLoggedIn(loggedIn);
  };

  useEffect(() => {
    getLoginStatus();
  }, []);

  return (
    <Router>
      <Box sx={{ pb: 7 }}>
        <Routes>
          <Route path={routes.home} element={<LandingPage />} />

          {
            //auth
          }
          <Route path={routes.login} element={<SignIn />} />
          <Route path={routes.signup} element={<SignUp />} />
          <Route path={routes.otp} element={<Otp />} />

          <Route path={routes.dashboard} element={<DashBoard />} />
        </Routes>

        {isLoggedIn === true && ( //not functional
          <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
            elevation={3}
          >
            <BottomNav />
          </Paper>
        )}
      </Box>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-phone-input-2/lib/style.css";
import Box from "@mui/material/Box";
import { CssBaseline, Paper } from "@mui/material";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/auth/SignIn";
import { routes } from "./navigation/routes";
import SignUp from "./pages/auth/SignUp";
import Otp from "./pages/auth/Otp";

function App() {
  return (
    <Router>
      <Box sx={{ pb: 7 }}>
        <CssBaseline />

        <Routes>
          <Route path={routes.home} element={<LandingPage />} />

          {
            //auth
          }
          <Route path={routes.login} element={<SignIn />} />
          <Route path={routes.signup} element={<SignUp />} />
          <Route path={routes.otp} element={<Otp />} />

        </Routes>

        {2 === 3 && ( //not functional
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

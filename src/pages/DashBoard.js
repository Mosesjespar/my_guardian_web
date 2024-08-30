import React, { useEffect } from "react";
import BackGround from "../components/BackGround";
import { UserSessionUtils } from "../utils/UserSessionUtils";
import { useNavigate } from "react-router-dom";
import { routes } from "../navigation/routes";

function DashBoard() {
  const navigate = useNavigate();

  const getLoginStatus = () => {
    const loggedIn = UserSessionUtils.isLoggedIn();

    if (loggedIn === false) {
      navigate(routes.home, { replace: true });
    }
  };

  useEffect(() => {
    getLoginStatus();
  }, []);

  return <BackGround></BackGround>;
}

export default DashBoard;

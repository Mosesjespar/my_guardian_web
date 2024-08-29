import React from "react";
import Text from "../components/Text";
import { Container, Stack } from "@mui/material";
import CustomButton from "../components/CustomButton";
import { Link } from "react-router-dom";
import { routes } from "../navigation/routes";
import { useNavigate } from "react-router-dom";
import { Images } from "../config/images";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        ...styles.container,
        backgroundImage: `url(${Images.slider1})`,
        backgroundPosition: "center",
        backgroundSize: "cover", // Use 'co
        backgroundRepeat: "no-repeat",
      }}
      className="container-fluid"
    >
      <Container
        maxWidth="sm"
        fixed
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        className="pb-5"
      >
        <Stack spacing={2}>
          <Text whiteColor header>
            Welcome!
          </Text>

          <CustomButton rounded onClick={() => navigate(routes.signup)}>
            Get started
          </CustomButton>

          <Stack direction={"row"} spacing={1}>
            <Text whiteColor footnote regular>
              Already have a account
            </Text>

            <Link to={routes.login} className="link">
              <Text primaryColor footnote regular>
                Sign in here
              </Text>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    margin: 0,
    overflow: "hidden",
    position: "fixed",
  },
};

export default LandingPage;

import { Box, Container, Stack } from "@mui/material";
import React, { useState } from "react";
import Text from "../../components/Text";
import PhoneInput from "react-phone-input-2";
import CustomButton from "../../components/CustomButton";
import { Link } from "react-router-dom";
import { routes } from "../../navigation/routes";
import { Images } from "../../config/images";

function SignIn() {
  const [value, setValue] = useState();

  return (
    <div
      style={{
        ...styles.container,
        backgroundImage: `url(${Images.loginbg})`,
        backgroundPosition: "center",
        backgroundSize: "cover", // Use 'co
        backgroundRepeat: "no-repeat",
      }}
      className="container-fluid"
    >
      <Container
        maxWidth={"xl"}
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        className="pt-4 round-container "
      >
        <Stack spacing={3}>
          <Text body1 semibold>
            Hello
          </Text>

          <Text medium>Welcome back, glad to see you</Text>

          <Box>
            <Text medium>Phone number</Text>
            <PhoneInput
              country="ug"
              onlyCountries={["ug", "ke"]}
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
              inputClass="w-100"
            />
          </Box>

          <CustomButton contained rounded>
            Next
          </CustomButton>

          <Stack direction={"row"} spacing={1} className="pb-5">
            <Text regular>Don't have a account?</Text>

            <Link to={routes.signup} className="link">
              <Text primaryColor regular>
                Sign up here
              </Text>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}

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

export default SignIn;

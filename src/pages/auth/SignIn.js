import { Box, Container, Stack } from "@mui/material";
import React, { useState } from "react";
import Text from "../../components/Text";
import CustomButton from "../../components/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../navigation/routes";
import { Images } from "../../config/images";
import PhoneNumberInput from "../../components/PhoneNumberInput";
import { isEmpty } from "../../utils/UtilityMethods";
import { BaseApiService } from "../../api/BaseApiService";
import { PHONE_LOGIN_ENDPOINT_PATH } from "../../api/EndpointRoutes";

function SignIn() {
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const doValidate = () => {
    if (isEmpty(phone)) {
      throw TypeError("Please provide your Phone");
    }

    return true;
  };
  const checkPhoneWithServer = async () => {
    return await new BaseApiService(
      PHONE_LOGIN_ENDPOINT_PATH
    ).postRequestWithJsonResponse({
      phoneNumber: `+${phone}`,
    });
  };

  const doFirebaseLogin = async () => {
    console.log(phone);
    try {
      if (doValidate()) {
        setLoading(true);
        const serverResponse = await checkPhoneWithServer();
        console.log("Server Response " + JSON.stringify(serverResponse));
        setLoading(false);
        if (serverResponse.status == "Success") {
          navigate(routes.otp, {
            state: { formattedNumber: `+${phone}` },
            replace: true,
          });
          console.log("DOne");
        } else {
          console.error("Opps!", serverResponse?.message);
        }
      }
    } catch (error) {
      setLoading(false);
      console.error("Oops!", error?.message);
    }
  };

  return (
    <div
      style={{
        ...styles.container,
        backgroundImage: `url(${Images.loginbg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
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

          <PhoneNumberInput value={phone} onChange={(text) => setPhone(text)} />

          <CustomButton onClick={doFirebaseLogin}>Next</CustomButton>

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

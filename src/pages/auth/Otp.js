import React, { useCallback, useEffect, useState } from "react";
import BackGround from "../../components/BackGround";
import Text from "../../components/Text";
import { Box, Container, Stack } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../navigation/routes";
import { OtpInput } from "reactjs-otp-input";
import CustomButton from "../../components/CustomButton";
import { BaseApiService } from "../../api/BaseApiService";
import { FIREBASE_LOGIN_ENDPOINT_PATH } from "../../api/EndpointRoutes";
import { UserSessionUtils } from "../../utils/UserSessionUtils";
import { auth, signInWithPhoneNumber } from "../../firebaseConfig";
import { RecaptchaVerifier } from "firebase/auth";

function Otp() {
  const navigate = useNavigate();
  
  const location = useLocation();
  const { formattedNumber } = location.state || {};


  
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const [successLogin, setSuccessLogin] = useState(false);

  const timeOutCallback = useCallback(
    () => setTimer((currTimer) => currTimer - 1),
    []
  );

  const [confirmationResult, setConfirmationResult] = useState(null);

  const [loading, setLoading] = useState(false);


  const handleChange = (otp) => setOtp(otp);

  async function sendOtp(phoneNumber) {
    try {
      const recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible", // Invisible reCAPTCHA
          callback: (response) => {
            // reCAPTCHA solved
          },
        },
        auth
      );

      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        recaptchaVerifier
      );

      setConfirmationResult(confirmationResult);

      console.log(confirmationResult);
    } catch (error) {
      console.error("Error sending otp2", error);
    }
  }
  useEffect(() => {
    sendOtp(formattedNumber);
  }, []);

  const verifyFirebaseCode = async () => {
    try {
      await doFirebaseLogin({ user: { phoneNumber: formattedNumber } });
    } catch (error) {
      setLoading(false);
      if (!successLogin) {
        console.error("Oops!", error?.message);
      }
    }
  };

  const resetTimer = function () {
    if (!timer) {
      setTimer(60);
    }
  };

  const doFirebaseLogin = async (data) => {
    setLoading(true);
    await new BaseApiService(FIREBASE_LOGIN_ENDPOINT_PATH)
      .postRequestWithJsonResponseAndHeaders(data)
      .then(async (response) => {
        await UserSessionUtils.setLoggedIn(true);
        await UserSessionUtils.setUserAuthToken(response.body.accessToken);
        await UserSessionUtils.setUserRefreshToken(response.body.refreshToken);
        await UserSessionUtils.setUserDetails(response.body.user);

        setLoading(false);
      });
  };
  const onResendFirebaseOTP = async () => {
    setOtp(null);
    setLoading(true);
    await signInWithPhoneNumber(auth, formattedNumber)
      .then(async (response) => {
        setConfirmationResult(response);
        setLoading(false);
        resetTimer();
      })
      .catch((error) => {
        setLoading(false);
        console.error("Verification Failed!", error?.message);
      });
  };

  const handleClick = () => {};

  useEffect(() => {
    timer > 0 && setTimeout(timeOutCallback, 1000);
  }, [timer, timeOutCallback]);

  return (
    <BackGround>
      <div className="mt-2">
        <Text centered bold subhead>
          OTP Verification
        </Text>
      </div>

      <Container maxWidth={"xl"} className="pt-4 round-container h-100 mt-3">
        <Stack spacing={2}>
          <Text centered semibold>
            We have sent a 4 digit code to your number{" "}
            {formattedNumber.substring(0, 6).concat("XXXXXXXX")}
          </Text>

          <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={6}
            separator={<Text whiteColor>-</Text>}
            className="mt-3"
            inputStyle={{
              borderRadius: 100,
              borderWidth: 1,
              width: "3rem",
              height: "3rem",
              borderColor: "#000",
            }}
            focusStyle={{
              borderColor: "red",
              borderWidth: 1,
            }}
            containerStyle={{
              justifyContent: "center",
            }}
          />
          <CustomButton onClick={handleClick}>Verify</CustomButton>
        </Stack>
      </Container>
    </BackGround>
  );
}

export default Otp;

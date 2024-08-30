import React, { useEffect, useState } from "react";
import BackGround from "../../components/BackGround";
import Text from "../../components/Text";
import { Box, Container, Stack } from "@mui/material";
import InputField from "../../components/InputField";
import { FaRegUser } from "react-icons/fa";
import BaseColor from "../../config/BaseColor";
import PhoneNumberInput from "../../components/PhoneNumberInput";
import CustomDropDown from "../../components/CustomDropDown";
import CustomButton from "../../components/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../navigation/routes";
import { MdOutlineEmail } from "react-icons/md";
import { BaseApiService } from "../../api/BaseApiService";
import {
  REGISTRATION_ENDPOINT_PATH,
  SUPPORTED_LAGUAGES_ENDPOINT_PATH,
} from "../../api/EndpointRoutes";
import { isEmpty, isValidEmail } from "../../utils/UtilityMethods";

function SignUp() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [language, setLanguage] = useState("");
  const [languages, setLanguages] = useState([]);
  const [languageId, setLanguageId] = useState(null);
  const [errors, setErrors] = useState({});

  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchLanguages = async () => {
    try {
      const response = await new BaseApiService(
        SUPPORTED_LAGUAGES_ENDPOINT_PATH
      ).getRequestWithJsonResponse({});
      setLanguages(response.records);
    } catch (error) {
      console.error("Error", "Failed to fetch languages");
    }
  };

  const doValidate = () => {
    setErrors({});
    let isValid = true;
    if (isEmpty(firstName)) {
      setErrors((e) => ({ ...e, firstName: "Please provide your first name" }));
      isValid = false;
    }
    if (isEmpty(lastName)) {
      setErrors((e) => ({ ...e, lastName: "Please provide your last name" }));
      isValid = false;
    }
    if (isEmpty(phone)) {
      setErrors((e) => ({ ...e, phone: "Please provide your phone number" }));

      isValid = false;
    }
    if (!isValidEmail(email)) {
      setErrors((e) => ({
        ...e,
        email: "Please provide a valid email address",
      }));

      isValid = false;
    }
    if (isEmpty(language)) {
      setErrors((e) => ({
        ...e,
        language: "Please select a preferred language",
      }));
      isValid = false;
    }

    if (isValid === true) {
      doRegister();
    }
  };

  const doRegister = async () => {
    try {
      setLoading(true);
      const payload = {
        phoneNumber: "+" + phone,
        lastName,
        firstName,
        languageId: languageId,
        emailAddress: email,
      };

      const response = await new BaseApiService(
        REGISTRATION_ENDPOINT_PATH
      ).postRequestWithJsonResponse(payload);

      console.log("Response: " + JSON.stringify(response));
      setLoading(false);
      if (response.status === "Success") {
        navigate(routes.otp, {
          state: { formattedNumber: `+${phone}` },
          replace: true,
        });
      } else {
        alert("Oops!", response?.message);
      }
    } catch (error) {
      setLoading(false);
      alert("Oops!", error.message);
    }
  };

  useEffect(() => {
    fetchLanguages();
  }, []);

  return (
    <BackGround>
      <div className="mt-2">
        <Text centered bold subhead>
          Sign Up
        </Text>
      </div>

      <Container maxWidth={"xl"} className="pt-4 round-container h-100 mt-3">
        <Stack spacing={2}>
          <InputField
            label="First name"
            iconStart={<FaRegUser color={BaseColor.orangeColor} size={20} />}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            error={errors.firstName}
          />

          <InputField
            label="Last name"
            iconStart={<FaRegUser color={BaseColor.orangeColor} size={20} />}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            error={errors.lastName}
          />

          <InputField
            label="Email"
            iconStart={
              <MdOutlineEmail color={BaseColor.orangeColor} size={20} />
            }
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />

          <PhoneNumberInput
            value={phone}
            onChange={setPhone}
            error={errors.phone}
          />

          <CustomDropDown
            label="Select Language of Use"
            data={languages}
            value={language}
            onChange={(e) => {
              setLanguage(e.target.value);
              setLanguageId(
                languages.find((l) => l?.value === e.target.value)?.id
              );
            }}
            optionLabel={"value"}
            error={errors.language}
          />

          <Box>
            <Text inline>
              By clicking the agree and continue, you've agreed to My Guardians'
              <Text inline primaryColor semibold>
                {" "}
                Terms and services{" "}
              </Text>
              and acknowkedge the
              <Text inline primaryColor semibold>
                {" "}
                Privacy and policy.
              </Text>
            </Text>
          </Box>

          <CustomButton onClick={doValidate} loading={loading}>
            AGREE & CONTINUE
          </CustomButton>

          <Stack direction={"row"} spacing={1} className="pb-5">
            <Text regular>Already have an account?</Text>

            <Link to={routes.login} className="link">
              <Text primaryColor semibold>
                Sign in here
              </Text>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </BackGround>
  );
}

export default SignUp;

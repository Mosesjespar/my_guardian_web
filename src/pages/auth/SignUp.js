import React from "react";
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

function SignUp() {
  const navigate = useNavigate();

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
          />

          <InputField
            label="Last name"
            iconStart={<FaRegUser color={BaseColor.orangeColor} size={20} />}
          />

          <InputField
            label="Email"
            iconStart={
              <MdOutlineEmail color={BaseColor.orangeColor} size={20} />
            }
          />

          <PhoneNumberInput />

          <CustomDropDown label="Select preffered language" />

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

          <CustomButton
            rounded
            onClick={() => navigate(routes.otp, { replace: true })}
          >
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

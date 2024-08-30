import { Box } from "@mui/material";
import React, { useState } from "react";
import Text from "./Text";
import PhoneInput from "react-phone-input-2";

function PhoneNumberInput({ value, onChange, error = "", ...props }) {
  return (
    <Box>
      <Text medium>Phone Number</Text>

      <Box
        sx={{
          background: "linear-gradient(to right, #fff, #9B9B9B)", // Gradient background
          borderRadius: 1.5, // Adjust the border radius as needed
          p: 0.15,
        }}
      >
        <Box
          sx={{
            background: "#fff", // Background color of the TextField itself
            borderRadius: 1.5, // Border radius of the TextField
          }}
        >
          <PhoneInput
            {...props}
            country="ug"
            onlyCountries={["ug", "ke"]}
            placeholder="Enter phone number"
            value={value}
            onChange={onChange}
            inputClass="w-100 h-100"
            containerClass="p-1"
            buttonStyle={{
              borderColor: "transparent",
              backgroundColor: "transparent",
            }}
            inputStyle={{
              borderColor: "transparent",
            }}
          />
        </Box>
      </Box>

      <Text primaryColor caption1>
        {error}
      </Text>
    </Box>
  );
}

export default PhoneNumberInput;

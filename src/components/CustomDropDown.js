import React from "react";
import { Box, TextField } from "@mui/material";
import Text from "./Text";

const CustomDropDown = ({ label = "", placeholder = "", ...props }) => {
  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];
  return (
    <Box>
      <Text medium>{label}</Text>

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
          <TextField
            {...props}
            fullWidth
            select
            placeholder={placeholder}
            slotProps={{
              select: {
                native: true,
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "transparent", // Make the default border transparent
                  padding: "8px 14px", // Modify this to change the padding inside the TextField
                },
                "&:hover fieldset": {
                  borderColor: "transparent", // Keep border transparent on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "transparent", // Keep border transparent when focused
                },
                "& .MuiInputBase-input": {
                  padding: "8px 14px", // Adjust padding inside the input
                },
              },
            }}
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomDropDown;

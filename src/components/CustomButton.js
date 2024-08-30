import React from "react";
import Button from "@mui/material/Button";
import BaseColor from "../config/BaseColor";
import { CircularProgress, Box } from "@mui/material";

const CustomButton = ({
  contained = true,
  outlined = false,
  text = false,
  children,
  rounded = true,
  onClick = () => {},
  loading = false,
  ...rest
}) => {
  const sxStyles = {
    base: {
      padding: "8px 16px",
      fontSize: "14px",
      fontWeight: 500,
      borderRadius: rounded ? "20px" : "4px",
      fontFamily: "Montserrat, sans-serif",
      textTransform: "none",
      display: "flex", // Use flexbox to align content
      alignItems: "center", // Vertically align items in the center
      justifyContent: "center", // Center the content horizontally
    },
    contained: {
      backgroundColor: BaseColor.orangeColor,
      color: "white",
      "&:hover": {
        backgroundColor: BaseColor.orangeColor,
      },
    },
    outlined: {
      backgroundColor: "transparent",
      color: BaseColor.orangeColor,
      border: `2px solid ${BaseColor.orangeColor}`,
      "&:hover": {
        backgroundColor: "rgba(128, 0, 128, 0.1)",
      },
    },
    text: {
      backgroundColor: "transparent",
      color: BaseColor.orangeColor,
      "&:hover": {
        backgroundColor: "rgba(128, 0, 128, 0.1)",
      },
    },
  };

  const appliedStyles = {
    ...sxStyles.base,
    ...(contained && sxStyles.contained),
    ...(outlined && sxStyles.outlined),
    ...(text && sxStyles.text),
  };

  return (
    <Button sx={appliedStyles} {...rest} onClick={onClick}>
      {loading && (
        <CircularProgress
          size={20}
          color={outlined ? BaseColor.orangeColor : "white"}
          sx={{
            marginRight: "8px", // Add space between spinner and text
          }}
        />
      )}
      <Box>{children}</Box>
    </Button>
  );
};

export default CustomButton;

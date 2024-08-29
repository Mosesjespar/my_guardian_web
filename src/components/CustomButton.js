import React from "react";
import Button from "@mui/material/Button";
import BaseColor from "../config/BaseColor";

const CustomButton = ({
  contained = true,
  outlined = false,
  text = false,
  children,
  rounded = false,
  onClick = () => {},
  ...rest
}) => {
  const sxStyles = {
    base: {
      padding: "8px 16px",
      fontSize: "14px",
      fontWeight: 500,
      borderRadius: rounded ? "20px" : "4px", // Rounded or default border radius
      fontFamily: "Montserrat, sans-serif", // Default or custom font family
      textTransform: "none",
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
      {children}
    </Button>
  );
};

export default CustomButton;

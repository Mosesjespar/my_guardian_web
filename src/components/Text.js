import React from "react";
import PropTypes from "prop-types";
import BaseColor from "../config/BaseColor";

const Text = (props) => {
  const {
    header,
    title1,
    title2,
    title3,
    headline,
    body1,
    body2,
    callout,
    subhead,
    footnote,
    caption1,
    caption2,
    overline,
    thin,
    ultraLight,
    light,
    regular,
    medium,
    semibold,
    bold,
    heavy,
    primaryColor,
    darkPrimaryColor,
    lightPrimaryColor,
    accentColor,
    grayColor,
    dividerColor,
    whiteColor,
    fieldColor,
    style,
    children,
    centered,
    leftAligned,
    rightAligned,
    inline,
  } = props;

  // Typography Bootstrap classes
  const typographyClass = header
    ? "display-1"
    : title1
    ? "display-2"
    : title2
    ? "display-3"
    : title3
    ? "display-4"
    : headline
    ? "h1"
    : body1
    ? "h2"
    : body2
    ? "h3"
    : callout
    ? "h4"
    : subhead
    ? "h5"
    : footnote
    ? "h6"
    : caption1
    ? "small"
    : caption2
    ? "text-sm"
    : "";

  // Font weight Bootstrap classes
  const fontWeightClass = thin
    ? "fw-thin"
    : ultraLight
    ? "fw-light"
    : light
    ? "fw-light"
    : regular
    ? "fw-normal"
    : medium
    ? "fw-medium"
    : semibold
    ? "fw-semibold"
    : bold
    ? "fw-bold"
    : heavy
    ? "fw-bolder"
    : "";

  const alignmentClass = centered
    ? "text-center"
    : leftAligned
    ? "text-start"
    : rightAligned
    ? "text-end"
    : "";

  // Color styles using BaseColor
  const colorStyle = primaryColor
    ? { color: BaseColor.orangeColor }
    : darkPrimaryColor
    ? { color: BaseColor.navyBlue }
    : lightPrimaryColor
    ? { color: BaseColor.pinkLightColor }
    : accentColor
    ? { color: BaseColor.accentColor }
    : grayColor
    ? { color: BaseColor.grayColor }
    : dividerColor
    ? { color: BaseColor.dividerColor }
    : whiteColor
    ? { color: BaseColor.whiteColor }
    : fieldColor
    ? { color: BaseColor.fieldColor }
    : "";

  const combinedClass = `${typographyClass} ${fontWeightClass} ${alignmentClass} ${
    inline ? "d-inline" : ""
  } m-0`;
  const combinedStyle = {
    ...colorStyle,
    fontFamily: "Montserrat, sans-serif",
    ...style,
  };

  return (
    <p className={combinedClass} style={combinedStyle}>
      {children}
    </p>
  );
};

Text.propTypes = {
  header: PropTypes.bool,
  inline: PropTypes.bool,
  title1: PropTypes.bool,
  title2: PropTypes.bool,
  title3: PropTypes.bool,
  headline: PropTypes.bool,
  body1: PropTypes.bool,
  body2: PropTypes.bool,
  callout: PropTypes.bool,
  subhead: PropTypes.bool,
  footnote: PropTypes.bool,
  caption1: PropTypes.bool,
  caption2: PropTypes.bool,
  overline: PropTypes.bool,
  thin: PropTypes.bool,
  ultraLight: PropTypes.bool,
  light: PropTypes.bool,
  regular: PropTypes.bool,
  medium: PropTypes.bool,
  semibold: PropTypes.bool,
  bold: PropTypes.bool,
  heavy: PropTypes.bool,
  black: PropTypes.bool,
  primaryColor: PropTypes.bool,
  darkPrimaryColor: PropTypes.bool,
  lightPrimaryColor: PropTypes.bool,
  accentColor: PropTypes.bool,
  grayColor: PropTypes.bool,
  dividerColor: PropTypes.bool,
  whiteColor: PropTypes.bool,
  fieldColor: PropTypes.bool,
  numberOfLines: PropTypes.number,
  textAlign: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  centered: PropTypes.bool,
  leftAligned: PropTypes.bool,
  rightAligned: PropTypes.bool,
};

Text.defaultProps = {
  centered: false,
  leftAligned: true,
  rightAligned: false,
  inline: false,
  header: false,
  title1: false,
  title2: false,
  title3: false,
  headline: false,
  body1: false,
  body2: false,
  callout: false,
  subhead: false,
  footnote: false,
  caption1: false,
  caption2: false,
  overline: false,
  thin: false,
  ultraLight: false,
  light: false,
  regular: false,
  medium: false,
  semibold: false,
  bold: false,
  heavy: false,
  black: false,
  primaryColor: false,
  darkPrimaryColor: false,
  lightPrimaryColor: false,
  accentColor: false,
  grayColor: false,
  dividerColor: false,
  whiteColor: false,
  fieldColor: false,
  numberOfLines: 10,
  textAlign: "left",
  style: {},
  children: "",
};

export default Text;

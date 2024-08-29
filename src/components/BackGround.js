import React from "react";
import { Images } from "../config/images";

const BackGround = ({ children }) => {
  return (
    <div style={styles.safeAreaView}>
      <div
        style={{
          ...styles.imageBackground,
          backgroundImage: `url(${Images.background})`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

const styles = {
  safeAreaView: {
    backgroundColor: "#eb7805", // BaseColor.orangeColor2 equivalent
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

  imageBackground: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%", // Full height
    width: "100%", // Full width
  },
};

export default BackGround;

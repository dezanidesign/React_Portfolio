import Header from "../header";
import Cards from "../cards";
import video from "../assets/landingTest1.mp4";
import stylesheet from "../App.css";
import "../index.css";
// import keyboardImg from "./assets/keyboard.png";
// import carImg from "./assets/car.png";
import star from "../assets/star.png";
import { Routes, Route } from "react-router-dom";
import Contact from "../pages/contact";

function Landing() {
  const styles = {
    videoStyle: {
      left: "0",
      top: "0px",
      minWidth: "100%",
      minHeight: "100%",
      position: "fixed",
      zIndex: "-10",
    },

    mainPage: {
      position: "absolute",
      top: "600px",
    },

    hakim: {
      position: "absolute",
      color: "#D5FF3F",
      margin: "0 80px",
      fontSize: "175px",
      fontWeight: "bold",
      // display: "block",
      fontFamily: "MortendExtraBold",
      top: "100px",
    },

    zani: {
      position: "absolute",
      color: "white",
      margin: "0 80px",
      fontSize: "175px",
      fontWeight: "bold",
      // display: "block",
      top: "240px",
      fontFamily: "MiedingerBold",
    },

    landingVideoText: {
      position: "absolute",
      top: "-400px",
      zIndex: "-1",
    },

    underline: {
      top: "397px",
      left: "90px",
      position: "absolute",
      backgroundColor: "white",
      height: "3px",
      width: "560px",
    },

    landingSubText: {
      fontFamily: "FutoSansMedium !important",
      position: "absolute",
      width: "500px",
      color: "white",
      margin: "0 90px",
      fontWeight: "bold",
      top: "410px",
    },

    // cardContainer: {
    //   backgroundColor: "#D5FF3F",
    //   width: "1000px",
    //   // width: "100%",
    //   position: "relative",
    //   zIndex: "-3",
    //   top: "850px",
    //   minWidth: "720px",
    //   minHeight: "100%",
    //   height: "100%",

    // },

    cardWithinContainer: {
      margin: "40px 40px",
      width: "100%",
    },

    // subHeader: {
    //   fontFamily: "MortendExtraBold",
    //   width: "100%",
    //   backgroundColor: "black",
    //   color: "#D5FF3F",
    //   textAlign: "center",
    //   alignItems: "center",
    //   fontSize: "50px",
    //   padding: "20px 0",
    //   whiteSpace: "nowrap",
    // },
  };

  // const starPos = {
  //   position:"relative",
  //   top:"10px",
  //   margin: "0px 10%"
  // }

  return (
    <>
      <Header />

      

      <div style={styles.mainPage}>
        <div style={styles.landingVideoText}>
          <div style={styles.hakim}>HAKIM</div>
          <div style={styles.zani}>ZANI</div>
          <div style={styles.landingSubText}>
            Front End Developer & Designer
          </div>
          <div style={styles.underline}></div>
        </div>
      </div>

      <video autoPlay preload playsinline  muted loop style={styles.videoStyle}>
        <source src={video} type="video/mp4"></source>
      </video>

      <div className="cardContainer">
        <div className="subHeader">
          <img className="starPos" src={star}></img> AREAS I SPECIALISE IN{" "}
          <img className="starPos" src={star}></img>
        </div>
        <div style={styles.cardWithinContainer}>
          <Cards />
        </div>
      </div>
    </>
  );
}

export default Landing;

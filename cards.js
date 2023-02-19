import keyboardImg from "./assets/keyboard.png";
import carImg from "./assets/car.png";
import arrow from "./assets/arrow.png"
import bluesky from "./assets/blue.png"
import romancarter1 from "./assets/rc.png"
import gdicon from "./assets/gdicon.png"
import "./App.css";


function Cards() {
//   const card = {
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     width: "95%",
//     height: "368px",
//     backgroundColor: "black",
//     zIndex: "1",
//     marginBottom:"30px"
//     // marginLeft: "5%",
//   };

//   const cardImage = {
//     // width: "40%",
//   };

//   const cardText = {
//     color: "#D5FF3F",
//     width: "90%",
//     padding: "0px 20px 130px 20px",
//     position: "relative",
//     marginTop: "90px"
//   };

//   const selectionBox = {
//     backgroundColor: "#D5FF3F",
//     color: "black",
//     position: "relative",
//     // top: "400px",
//     // left: "430px",
//     width: "96%",
//     height: "70px",
//     fontFamily: "MortendExtraBold",
//     fontSize: "50px",
//     paddingTop: "20px",
//     paddingLeft: "45px",
//     display: "flex",
//     flexDirection: "row",
//     whiteSpace: "nowrap",
//     justifyContent: "space-between",
//     top: "60px"
//   };

//   const clickBox = {
//     backgroundColor: "black",
//     width: "20px",
//     height: "20px",
//     padding: "25px",
//     margin: "0px 10px 30px 0px",
//     position: "relative",
//     top: "-10px"
//     // flexBasis: "100px"
//     // marginLeft: "65%",
//     // position: "absolute",
//     // top: "410px",
//     // right: "77px"
//   };

//   const FED = {
//     fontSize: "40px",
//     paddingBottom: "30px",
//     whiteSpace: "nowrap",
//   };

//   const text = {
//     position: "relative",
//     paddingBottom: "40px"
//   };

//   const arrowIcon = {
// position:"relative",
// right: "12.5px",
// bottom: "11px"
//   }

  // Media Queries
  
  

  return (
    <>
    <div className="card">
      <img src={keyboardImg} alt={carImg} className="cardImage"></img>
      <div className="cardText">
        <h2 className="FED">Front End Development</h2>
        <p className ="text">
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque
          non tellus orci ac auctor augue mauris. Magna etiam tempor orci eu
          lobortis. Condimentum id venenatis a condimentum.
          
            
          
        </p>
        <div className="selectionBox">
              LET ME SEE <div className="clickBox"> <img className ="arrowIcon" src={arrow}></img> </div>
            </div>
      </div>

      {/* <div className={clickBox}> </div>  */}
    </div>

    <div className="card">
      <img src={carImg} alt={carImg} className="cardImage"></img>
      <div className="cardText">
        <h2 className="FED">Motion Design</h2>
        <p className = "text">
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque
          non tellus orci ac auctor augue mauris. Magna etiam tempor orci eu
          lobortis. Condimentum id venenatis a condimentum.
          
            
          
        </p>
        <div className="selectionBox">
              LET ME SEE <div className="clickBox"> <img className ="arrowIcon" src={arrow}></img> </div>
            </div>
      </div>

      {/* <div className={clickBox}> </div>  */}
    </div>

    <div className="card">
      <img src={gdicon} alt={carImg} className="cardImage"></img>
      <div className="cardText">
        <h2 className="FED">Graphic Design</h2>
        <p className = "text">
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque
          non tellus orci ac auctor augue mauris. Magna etiam tempor orci eu
          lobortis. Condimentum id venenatis a condimentum.
          
            
          
        </p>
        <div className="selectionBox">
              LET ME SEE <div className="clickBox"> <img className ="arrowIcon" src={arrow}></img> </div>
            </div>
      </div>

      {/* <div style={clickBox}> </div>  */}
    </div>

    </>
  );
}

export default Cards;

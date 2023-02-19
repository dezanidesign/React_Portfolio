import keyboardImg from "./assets/keyboard.png";
import carImg from "./assets/car.png";

function Cards() {
  
  const landingBox = {
    backgroundColor: "grey",
    color: "white",
    width: "50%",
    // marginTop: "600px"
    // display: "flex",
    // flexDirection: "row",
    
  };

  return (
    <div style={landingBox}>
    <img src={keyboardImg} alt={carImg}></img>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Quisque non tellus
    orci ac auctor augue mauris. Magna etiam tempor orci eu lobortis.
    Condimentum id venenatis a condimentum.
  </div>
  );
}

export default Cards;

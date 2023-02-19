import Header from "../header";
import Cards from "../cards";
import { useState } from "react";

function Contact() {
  const [userName, setuserName] = useState("");
  const handleChange = event => setuserName(event.target.value)

  return (
    <div className="contactBackground">
      <Header />
      <div className="contactTitle">
        <div className="contactText">CONTACT</div> <br></br>
        <div className="usText">US</div>
      </div>

      <p>{userName}</p>

      <form className="contactForm">
        <label>
          <div className="contactFlex">
            <div className="contactName">Name</div>
            <input onChange={handleChange} type="text" name="name"  className="nameEmailInputs"/>
            <div className="contactEmail">Email</div>
            <input type="text" name="email" className="nameEmailInputs" />
          </div>
          <div className="inputText">
            <input className="inputBox" type="text" name="inputText" />
          </div>
        </label>
        <div className="submitFlex">
          <input className="contactSubmit" type="submit" value="Submit Now" />
        </div>
      </form>
    </div>
  );
}

export default Contact;

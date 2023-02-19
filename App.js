import Header from "./header";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Contact from "./pages/contact";

function App() {
  

  return (
    <>

      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>



      
    </>
  );
}

export default App;

import { NavLink } from 'react-router-dom';
import Contact from "./pages/contact";

function Header() {
  const headerStyle = {
    
    header:{
    // backgroundColor: "black",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    height: '80px',
    alignItems:'center',
    padding:'0 80px',
    position: "absolute",
    width: "100%",
    minWidth: "720px"
  },
    
     navItems : {
        display: "flex",
        margin: '0 100px',
        
      },
    
       navItem : {
        margin: '0 20px',
        textDecoration: "none",
        color: "white"
      },
      logo : {
        textDecoration: "none",
        color: "white"
      },
  };

  

  return (
    <header style={headerStyle.header}>
      <NavLink style ={headerStyle.logo}to="/">Logo</NavLink>

      <nav style={headerStyle.navItems}>
        <NavLink style={headerStyle.navItem}>Work</NavLink>
        <NavLink style={headerStyle.navItem}>About</NavLink>
        <NavLink to="/Contact" style={headerStyle.navItem}>Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;

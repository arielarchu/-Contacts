import { Link } from "react-router-dom";
import Fecha from "../pages/fecha";
import Hora from "../pages/hora";




export default function NavBar() {


  const linkStyle = {
    padding: "10px",
    display: "block",
    fontSize: "40px",
    color: "green",
    textDecoration: "none",
    hover: "white",
    fontFamily: "promorius",
    fontStyle: "italic",
    fontWeight: "bold",
  
  };

  const navContainerStyle = {
    backgroundColor: "black",
    padding: "10px",
    display: "flex",
    gap: "20px",
    justifyContent: "center",
     };
  

  

  return (
    <div style={navContainerStyle}>
      <Link to="/" style={linkStyle}>
        Contacts
      </Link>

      <Link to="/create" style={linkStyle}>
        Add
      </Link>

      <Fecha/>
      <Hora/>


    </div>
  );
}
import { Link } from "react-router-dom";

export default function People({ item, defaultImage }) {
  const peopleContainerStyle = {
    display: "flex",
    flexDirection: "column",
    width: "300px",
  };

  const peopleInfoStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    color: "green",
    textDecoration: "none",
    fontFamily: "promorius",
    fontStyle: "italic",
    fontWeight: "bold",
  };

  return (
    <div style={peopleContainerStyle}>
      <Link to={`/view/${item.id}`} style={peopleInfoStyle}>
        <img src={item.cover || defaultImage} width="200" borderRadius="20px" />
        <div>{item.title}</div>
      </Link>
    </div>
  );
}

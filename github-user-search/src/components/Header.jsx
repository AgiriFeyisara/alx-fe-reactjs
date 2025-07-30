import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          textDecoration: "none",
          color: "black",
        }}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          textDecoration: "none",
          color: "black",
        }}
      >
        About
      </Link>
    </nav>
  );
}
export default Header;

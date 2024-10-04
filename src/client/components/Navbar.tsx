import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    // <div className="search">
    //   <input type="text" placeholder="Search" />
    //   <button>Search</button>
    // </div>

    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
}

export default Navbar;

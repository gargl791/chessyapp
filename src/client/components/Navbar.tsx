import "./Navbar.css";
import { Link } from "react-router-dom"

function Navbar() {
  return (

      // <div className="search">
      //   <input type="text" placeholder="Search" />
      //   <button>Search</button>
      // </div>

    <nav>
      <Link to='/'>Home</Link>
      <Link to='/login'>Home</Link>
      <Link to='/register'>Home</Link>
    </nav>
  );
}

export default Navbar;


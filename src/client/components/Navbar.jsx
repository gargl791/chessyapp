import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h1>Navbar</h1>
      <ul>
        <li>Home</li>
        <li>Login</li>
        <li>Contact</li>
      </ul>

      <div className="search">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
    </div>
  );
}

export default Navbar;

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h1>Navbar</h1>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/signup">Signup</a>
        </li>
      </ul>

      <div className="search">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
    </div>
  );
}

export default Navbar;

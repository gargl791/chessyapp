import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h1>Navbar</h1>
      <ul>
        <li>
          <a
            href="#"
            className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-700"
          >
            Home
          </a>
        </li>
        <li>Login</li>
        <li>Contact</li>
      </ul>

      <div className="search">
        <input type="text" placeholder="Search" />
        <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-700">
          Search
        </button>
      </div>
    </div>
  );
}

export default Navbar;

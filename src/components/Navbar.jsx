import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <header>
      <nav className="navbar">

        <div className="logo">
          <img src={logo} alt="Brew Haven Logo" />
          <span>Brew Haven Cafe</span>
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

      </nav>
    </header>
  );
}

export default Navbar;
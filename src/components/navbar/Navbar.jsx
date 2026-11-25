import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <nav>
      <Link className="a" to={"/"}>
        <h1>
          ThreeSixty <span>360 Gym</span>
        </h1>
      </Link>

      <i
        className={`fa-solid ${openMenu ? "fa-xmark" : "fa-bars"} fa-xl icon`}
        onClick={toggleMenu}
      ></i>

      <ul className={openMenu ? "opened" : ""}>
        <Link className="a" to="/" onClick={() => setOpenMenu(false)}>
          <li>Classes</li>
        </Link>

        <Link className="a" to="/" onClick={() => setOpenMenu(false)}>
          <li>Services</li>
        </Link>

        <Link className="a" to="/" onClick={() => setOpenMenu(false)}>
          <li>Memberships</li>
        </Link>

        <Link className="a" to="/" onClick={() => setOpenMenu(false)}>
          <li>Recovery</li>
        </Link>

      </ul>
       <Link className="a" to="/contact" onClick={() => setOpenMenu(false)}>
          <h3 className="cta1">Join</h3>
        </Link>
    </nav>
  );
};

export default Navbar;

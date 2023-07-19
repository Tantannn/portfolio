import { useState } from "react";
import "./Nav.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import NavDropdown from "./NavDropdown";
const Nav = () => {
  const [isActive, setisActive] = useState(false);
  const handleToggle = () => {
    setisActive(!isActive);
  }
  return (
    <div>
      <nav id="navbar" className="nav">
        <ul className="nav-list">
          <li>
            <a href="#welcome-section">About</a>
          </li>
          <li>
            <a href="#projects">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <button className="" onClick={handleToggle}>
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </li>
        </ul>
      </nav>
      { isActive ? <NavDropdown/> : null}
    </div>
  );
};

export default Nav;

import "./NavBar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav__container">
        <Link to="/" style={{color:'inherit', textDecoration:'none'}}>
          <span className="nav__logo">BobaBooking</span>
        </Link>

        <div className="nav__items">
          <button className="nav__button">Register</button>
          <button className="nav__button">Login</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

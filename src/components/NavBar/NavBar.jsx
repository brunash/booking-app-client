import "./NavBar.scss";

const NavBar = () => {
    return (
      <div className="nav">
        <div className="nav__container">
          <span className="nav__logo">BobaBooking</span>
          <div className="nav__items">
            <button className="nav__button">Register</button>
            <button className="nav__button">Login</button>
          </div>
        </div>
      </div>
    );
}

export default NavBar;
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faTaxi, faCar, faPlane } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__list">
          <div className="header__list--item active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="header__list--item">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="header__list--item">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="header__list--item">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="header__list--item">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        <h1 className="header__title">A lifetime of discounts? It's Genius.</h1>
        <p className="header__desc">
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free BobaBooking account
        </p>
        <button className="header__button">Sign in / Register</button>
      </div>
    </div>
  );
};

export default Header;

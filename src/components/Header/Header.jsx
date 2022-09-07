import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faTaxi,
  faCar,
  faPlane,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  // Handling the calendar

  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // handling the number of people component
  const [openOption, setOpenOptions] = useState(false);
  const [options, setOption] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  // increment/decrement number of options on click
  const handleOption = (name, operation) => {
    setOption(prev=>{return {
      ...prev,
      [name]: operation === "increase" ? options[name] + 1 : options[name] - 1,
    };})
  }

  const handleSearch = () => {
    navigate("/hotels", {state : { destination, date, options }});
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "header__container listMode" : "header__container"
        }
      >
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
        {type !== "list" && (
          <>
            <h1 className="header__title">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="header__desc">
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free BobaBooking account
            </p>
            <button className="header__button">Sign in / Register</button>
            <div className="header__search">
              <div className="header__search--item">
                <FontAwesomeIcon icon={faBed} className="header__icon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="header__search--input"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="header__search--item">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="header__icon"
                />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="header__search--text"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="header__calendar"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="header__search--item">
                <FontAwesomeIcon icon={faPerson} className="header__icon" />
                <span
                  onClick={() => setOpenOptions(!openOption)}
                  className="header__search--text"
                >
                  {`${options.adult} adult · ${options.children} children · ${options.room} room`}
                </span>
                {openOption && (
                  <div className="option">
                    <div className="option__item">
                      <span className="option__text">Adult</span>
                      <div className="option__counter--container">
                        <button
                          disabled={options.adult <= 1}
                          className="option__counter"
                          onClick={() => handleOption("adult", "decrease")}
                        >
                          -
                        </button>
                        <span className="option__number">{options.adult}</span>
                        <button
                          className="option__counter"
                          onClick={() => handleOption("adult", "increase")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="option__item">
                      <span className="option__text">Children</span>
                      <div className="option__counter--container">
                        <button
                          disabled={options.children <= 0}
                          className="option__counter"
                          onClick={() => handleOption("children", "decrease")}
                        >
                          -
                        </button>
                        <span className="option__number">
                          {options.children}
                        </span>
                        <button
                          className="option__counter"
                          onClick={() => handleOption("children", "increase")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="option__item">
                      <span className="option__text">Room</span>
                      <div className="option__counter--container">
                        <button
                          disabled={options.room <= 1}
                          className="option__counter"
                          onClick={() => handleOption("room", "decrease")}
                        >
                          -
                        </button>
                        <span className="option__number">{options.room}</span>
                        <button
                          className="option__counter"
                          onClick={() => handleOption("room", "increase")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="header__search--item">
                <button className="header__button" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;

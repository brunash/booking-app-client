import React from 'react';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import './List.scss';
import { format } from "date-fns";
import { DateRange } from 'react-date-range';
import { useState} from 'react';
import { useLocation } from 'react-router-dom';
import SearchItem from '../../components/SearchItem/SearchItem';

const List = () => {

    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state.options);

    return (
      <div>
        <NavBar />
        {/* type list modifies the header component for this particular page  */}
        <Header type="list" />
        <div className="list">
          <div className="list__wrapper">
            <div className="list__search">
              <h1 className="list__search--title">Search</h1>
              <div className="list__search--item">
                <label htmlFor="">Destination</label>
                <input placeholder={destination} type="text" />
              </div>
              <div className="list__search--item">
                <label htmlFor="">Check-in date</label>
                <span onClick={() => setOpenDate(!openDate)}>{`${format(
                  date[0].startDate,
                  "MM/dd/yyyy"
                )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                {openDate && (
                  <DateRange
                    onChange={(item) => setDate([item.selection])}
                    minDate={new Date()}
                    ranges={date}
                  />
                )}
              </div>
              <div className="list__search--item">
                <label htmlFor="">Options</label>
                <div className="list__container">
                  <div className="list__search--option">
                    <span className="list__search--option-text">
                      Min price <small>per night</small>
                    </span>
                    <input
                      type="number"
                      className="list__search--option-input"
                    />
                  </div>
                  <div className="list__search--option">
                    <span className="list__search--option-text">
                      Max price <small>per night</small>
                    </span>
                    <input
                      type="number"
                      className="list__search--option-input"
                    />
                  </div>
                  <div className="list__search--option">
                    <span className="list__search--option-text">Adult</span>
                    <input
                      type="number"
                      className="list__search--option-input"
                      min={1}
                      placeholder={options.adult}
                    />
                  </div>
                  <div className="list__search--option">
                    <span className="list__search--option-text">Children</span>
                    <input
                      type="number"
                      className="list__search--option-input"
                      min={0}
                      placeholder={options.children}
                    />
                  </div>
                  <div className="list__search--option">
                    <span className="list__search--option-text">Room</span>
                    <input
                      type="number"
                      className="list__search--option-input"
                      min={1}
                      placeholder={options.room}
                    />
                  </div>
                </div>
              </div>
              <button>Search</button>
            </div>
            <div className="list__result">
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
            </div>
          </div>
        </div>
      </div>
    );
}

export default List;
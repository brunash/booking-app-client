import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import './List.scss';
import { format } from "date-fns";
import { DateRange } from 'react-date-range';

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
                <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (<DateRange 
                onChange={ (item) => setDate ([item.selection]) }
                minDate={new Date()}
                ranges={date}
                />)}
              </div>
            </div>
            <div className="list__result"></div>
          </div>
        </div>
      </div>
    );
}

export default List;
import React from 'react';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import './List.scss';

const List = () => {
    return (
      <div>
        <NavBar />
        {/* type list modifies the header component for this particular page  */}
        <Header type="list" />
        <div className="list">
          <div className="list__wrapper">
            <div className="list__search">
                <h1 className='list__search--title'>Search</h1>
            </div>
            <div className="list__result"></div>
          </div>
        </div>
      </div>
    );
}

export default List;
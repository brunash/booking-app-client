import React from 'react';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';

const List = () => {
    return (
        <div>
            <NavBar/>
            {/* type list modifies the header component for this particular page  */}
            <Header type="list"/>
        </div>
    )
}

export default List;
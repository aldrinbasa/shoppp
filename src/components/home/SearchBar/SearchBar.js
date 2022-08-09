import React from 'react';
import searchBarStyles from './SearchBar.module.css';

const SearchBar = () => {
    return (
        <div>
            <input className={searchBarStyles.searchBar} type='text' placeholder='Search'/>
        </div>
    );
};

export default SearchBar;
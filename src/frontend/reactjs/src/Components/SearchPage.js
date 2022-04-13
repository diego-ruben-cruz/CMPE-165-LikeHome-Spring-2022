import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';

import './SearchPage.css';

function SearchPage(){

    return (
        <>
        <Header/>
        <br/>
        <SearchBar/>
        <h1 class = "Header"> City, State </h1>
        
        </>
    );
}

export default SearchPage;
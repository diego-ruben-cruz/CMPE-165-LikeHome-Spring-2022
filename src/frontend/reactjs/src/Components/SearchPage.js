import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import TotalLocations from './TotalLocations';
import Footer from './Footer';
import Filter from './Filter';
import './SearchPage.css';

function area(){
    var location = document.getElementsByClassName();
}

function SearchPage(){ 
    return (
        <>
        <Header/>
        <br/>
        <SearchBar location="City, State" numberOfPeople="Number of Guests"/>
        <h2 id = "location" class = "location">City, State</h2> 
        <div class ="searchPage">
            <div class ="leftSide">
                <Filter/>
            </div>
            <div class ="rightSide">
                <TotalLocations/>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default SearchPage;
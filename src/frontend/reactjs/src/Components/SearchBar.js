import './SearchBar.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function SearchBar({location, numberOfPeople, data}){
    return (
        <div class = "searchBar">
            <div class = "header">
                <h6 class ="top">Where To?</h6>
            </div>
           <div class = "searchInputs">
                <form action="/searchpage" method = "get">
                    <input type = "text" placeholder ={location} class = "text1" name = "location"/>
                    <input type = "date" class = "text2" name = "check-in"/>
                    <input type = "date" class = "text3"  name = "check-out"/>
                    <input type = "number" placeholder ={numberOfPeople} class = "text4"  name = "guests"/>
                    <button type = "submit" value ="search" class="button1">Search</button>
               </form>
           </div>
        </div>
    );
}

export default SearchBar;

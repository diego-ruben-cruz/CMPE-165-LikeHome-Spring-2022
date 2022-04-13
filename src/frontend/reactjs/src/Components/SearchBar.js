import './SearchBar.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function SearchBar(){
    return (
        <div class = "searchbar">
            <div class = "header">
                <h6 class ="top">Where To?</h6>
            </div>
            <div class="bar">
                <input type = "text" placeholder = "Location" class = "text1" name = "location"/>
                <input type = "date" placeholder = "Check In" class = "text2" name = "check-in"/>
                <input type = "date" placeholder = "Check Out" class = "text3"  name = "check-out"/>
                <input type = "text" placeholder = "Guests" class = "text4"  name = "guests"/>
                <a href = '/searchpage'>
                    <button type = "submit" class = "button1" >Search</button>
                </a>
                
            </div>
        </div>
    );
}

export default SearchBar;


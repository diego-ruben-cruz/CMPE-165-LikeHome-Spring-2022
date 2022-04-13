import React, { Component } from "react";
import './Filter.css';

function Filter(){
    return(
        <div class="sidenav">
            <h3>Filters</h3>
            <a href="#">Price</a>
            <a href="#">Ratings</a>
            <a href="#">Amenities</a>
            <a href="#">Rooms</a>
        </div>

    );
}
export default Filter;
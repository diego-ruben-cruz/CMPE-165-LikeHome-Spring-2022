import React, { Component } from "react";
import './Filter.css';

function Filter(){
    return(
        <div class="sidenav">
            <h3>Filters</h3><br/>
            <h4>Price</h4>
            <form>
                <input type = "radio" id ="" value = ""></input>
                <label>$50 - $100</label><br/>
                <input type = "radio" id =""></input>
                <label>$100 - $200</label><br/>
                <input type = "radio" id =""></input>
                <label>$200 - $300</label><br/>
                <input type = "radio" id =""></input>
                <label>$300 - $400</label><br/>
                <input type = "radio" id =""></input>
                <label>$400 - $500</label><br/>
            </form><br/>
            <h4>Rooms</h4>
            <form>
                <input type = "radio" id ="" value = ""></input>
                <label>1</label><br/>
                <input type = "radio" id =""></input>
                <label>2</label><br/>
                <input type = "radio" id =""></input>
                <label>3</label><br/>
                <input type = "radio" id =""></input>
                <label>4</label><br/>
                <input type = "radio" id =""></input>
                <label>5</label><br/>
            </form><br/>
            <h4>Amenities</h4>
            <form>
                <input type = "checkbox" id ="" value = ""></input>
                <label>Wifi</label><br/>
                <input type = "checkbox" id =""></input>
                <label>Swimming Pool</label><br/>
                <input type = "checkbox" id =""></input>
                <label>Free Breakfast</label><br/>
                <input type = "checkbox" id =""></input>
                <label>Pet Friendly</label><br/>
                <input type = "checkbox" id =""></input>
                <label>Valet</label><br/>
            </form><br/>
            <h4>Ratings</h4>
            <form>
                <input type = "checkbox" id ="" value = ""></input>
                <label>10</label><br/>
                <input type = "checkbox" id =""></input>
                <label>9</label><br/>
                <input type = "checkbox" id =""></input>
                <label>8</label><br/>
                <input type = "checkbox" id =""></input>
                <label>7</label><br/>
                <input type = "checkbox" id =""></input>
                <label>6</label>
                <input type = "checkbox" id ="" value = ""></input>
                <label>5</label><br/>
                <input type = "checkbox" id =""></input>
                <label>4</label><br/>
                <input type = "checkbox" id =""></input>
                <label>3</label><br/>
                <input type = "checkbox" id =""></input>
                <label>2</label><br/>
                <input type = "checkbox" id =""></input>
                <label>1</label><br/>
            </form><br/>
        </div>

    );
}
export default Filter;
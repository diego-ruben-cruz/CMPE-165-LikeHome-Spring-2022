import './Header.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LoginModal from '../Authentication/LoginModal';
import { NavigationState } from "../NavigationContext";
import { auth } from '../firebase';
import SideDrawer from '../MUI components/SideDrawer';

function Header() {

    const { user} = NavigationState();
    

    return (
        <>
        <nav className="navHeader">
            <label className = "label">LikeHome</label>
            {/* <label className = "label"><Link to="/">LikeHome</Link></label> */}
            {/* Above line is being worked on to have LikeHome title link to home page */}
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="#">About Us</a></li>
                <li>{user ? <SideDrawer/> : <LoginModal/> }</li>
                
            </ul>
            
        </nav>
        
        </>
    );
}

export default Header;
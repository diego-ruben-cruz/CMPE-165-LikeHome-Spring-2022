import './Header.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LoginModal from '../Authentication/LoginModal';
import RegisterModal from '../Authentication/RegisterModal';
import { NavigationState } from "../NavigationContext";
import { auth } from '../firebase';
import SideDrawer from '../MUI components/SideDrawer';
import {Typography, AppBar, CssBaseline, Toolbar, Tabs, Box, Tab, Button} from '@material-ui/core'
import { withTheme } from '@emotion/react';
import Logout from '../Authentication/Logout';
import ProfileButton from '../Authentication/ProfileButton';

const Header = () => {

    const { user} = NavigationState();
    // const classes = useStyles();
    return (
        <>
        <br/>
        <br/>
        <CssBaseline/>
            <AppBar style={{ background: 'linear-gradient(#1b59b8, #2B6FD4)'}}>
                <Toolbar>
                    <Typography variant="h5">LikeHome</Typography>
                    <Tabs style={{marginLeft: 'auto'}} color = 'white'>
                        <Tab label="Search"/>
                        <Tab label="About us"/>
                        {user? <Logout/>: <LoginModal/>}
                        {user? <ProfileButton/>: <RegisterModal/>}   
                        
                        
                    </Tabs>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;

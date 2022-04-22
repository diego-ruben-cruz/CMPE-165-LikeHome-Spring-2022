import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { NavigationState } from '../NavigationContext';
import Avatar from '@material-ui/core/Avatar';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';


const useStyles = makeStyles({
  container: {
    width: 200,
    padding: 25,
    height: "100%",
    display: "flex",
    flexDirection: "column",

  },

  logout: {
    height: 50,
    width: "100%",
    backgroundColor: "#0055A2",
    objectFit: "contain",
    marginBottom: 10,
  }

});



export default function SideDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const {user, setAlert} = NavigationState();

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const logOut = () => {
    signOut(auth)
      
    setAlert({
      open: true,
      type: "success",
      message: "Come back soon!"
    })
  };
  return (
    <div>
      {['right',].map((anchor) => (
        <React.Fragment key={anchor}>
          <Avatar
          onClick={toggleDrawer(anchor, true)}
          style={{
            height: 25,
            width: 25,
            cursor: "pointer",
            display:'center',
            
          }}
          src = {user.photoURL}
          alt={user.displayName || user.email}
          />
          
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            <div className={classes.container}>
              <Button> Reservations </Button>
              <Button> Profile </Button>
              <Button> Account Settings </Button>
            </div>
            <div>
              <Button
                variant='contained'
                className={classes.logout}
                onClick={logOut}
              >
                Log Out
              </Button>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
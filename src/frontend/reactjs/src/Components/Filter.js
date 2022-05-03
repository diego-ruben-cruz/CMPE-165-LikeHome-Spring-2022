import React, {useState, useEffect } from "react";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HotelIcon from '@mui/icons-material/Hotel';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import Button from "@mui/material/Button";
import SearchIcon from '@mui/icons-material/Search';


export default function Filter() {
    {/*Opens/Closes the category menu*/}
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);

    
    {/*Sets the filter for each object*/}
    const [filterHotelName, setFilterHotelName] = useState(() =>{
      const saved = localStorage.getItem("filterHotelName");
      const initialValue = saved;
      return initialValue || "";
    });
    useEffect(() => {
      localStorage.setItem("filterHotelName", filterHotelName);
      
    }, [filterHotelName]);

    const [filterStars,setFilterStars]= useState(() =>{
      const saved = localStorage.getItem("filterStars");
      const initialValue = saved;
      return initialValue || "";
    });
    useEffect(() => {
      localStorage.setItem("filterStars", filterStars);
    }, [filterStars]);

    const [filterPrice, setFilterPrice] = useState(() =>{
      const saved = localStorage.getItem("filterPrice");
      const initialValue = saved;
      return initialValue || "";
    });
    useEffect(() => {
      localStorage.setItem("filterPrice", filterPrice);

    }, [filterPrice]);

      {/*Sets the filter for each object*/}
      const handleClick = () => {
        setOpen1(!open1);
      };
    
      const handleClick2 = () => {
        setOpen2(!open2);
      };
      
      const handleClick3 = () => {
        setOpen3(!open3);
      };
        
      return (
        <List
          sx={{ width: '500px' }}
          component="nav"
          subheader={
            <ListSubheader component="div" id="filterList" color="white">
              Filter 
            </ListSubheader>
          }
        >
          {/*Lists the location*/}
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <HotelIcon />
            </ListItemIcon>
            <ListItemText primary="Name" />
            {open1 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <TextField 
                id="hotelName" 
                label="Hotel Name" 
                variant="standard"
                value = {filterHotelName}
                onChange={(e) => setFilterHotelName(e.target.value)} 
                />
              </ListItemButton>
              <Button
                sx={{ height: 30, whiteSpace: "nowrap", position: 'absolute', top: '25px', right: '20px'}}
                variant="contained"
                color="primary"
                size="small"
                onClick={(x) => {
                  window.location.reload();
                 } }
              >
                Search
              </Button>
            </List>
          </Collapse>
          
          {/*Dropdown menu for Ratings*/}
          <ListItemButton onClick={handleClick2}>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Star Rating" />
            {open2 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="star-buttons-group-label"
                    name="stars-group"
                    value = {filterStars}
                    onChange={(y) => {
                      setFilterStars(y.target.value);
                      window.location.reload();
                    }}
                  >
                    <FormControlLabel value={-1} control={<Radio />} label="Default" />
                    <FormControlLabel value={5} control={<Radio />} label="5 Stars" />
                    <FormControlLabel value={4} control={<Radio />} label="4 Stars" />
                    <FormControlLabel value={3} control={<Radio />} label="3 Stars" />
                    <FormControlLabel value={2} control={<Radio />} label="2 Stars" />
                    <FormControlLabel value={1} control={<Radio />} label="1 Star" />
                  </RadioGroup>
                </FormControl>
              </ListItemButton>
            </List>
          </Collapse>
          
          {/*Dropdown menu for Prices*/}
          <ListItemButton onClick={handleClick3}>
            <ListItemIcon>
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary="Price" />
            {open3 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="price-buttons-group-label"
                    name="price-group"
                    value = {filterPrice}
                    onChange={(z) => {
                      setFilterPrice(z.target.value);
                      window.location.reload();
                    } }
                  >
                    <FormControlLabel value="" control={<Radio />} label="Default" />
                    <FormControlLabel value="50<" control={<Radio />} label="Less than $50" />
                    <FormControlLabel value="50-60" control={<Radio />} label="$50 - $60" />
                    <FormControlLabel value="60-70" control={<Radio />} label="$60 - $70" />
                    <FormControlLabel value="70-80" control={<Radio />} label="$70 - $80" />
                    <FormControlLabel value="80-90" control={<Radio />} label="$80 - $90" />
                    <FormControlLabel value="90-100" control={<Radio />} label="$90 - $100" />
                    <FormControlLabel value="100-200" control={<Radio />} label="$100 - $200" />
                    <FormControlLabel value="200-300" control={<Radio />} label="$200 - $300" />
                    <FormControlLabel value="300-400" control={<Radio />} label="$300 - $400" />
                    <FormControlLabel value="400-500" control={<Radio />} label="$400 - $500" />
                    <FormControlLabel value=">500" control={<Radio />} label="More Than $500" />
                  </RadioGroup>
                </FormControl>
              
              </ListItemButton>
            </List>
          </Collapse>  
          
        </List>
      );
}
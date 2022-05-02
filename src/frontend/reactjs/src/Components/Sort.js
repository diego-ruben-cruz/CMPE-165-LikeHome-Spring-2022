
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, {useState, useEffect } from "react";

{/*
The variable 'order' holds the value, between 0 - 5 of what to user wants to order the list.
0 - Order by High Price
1 - Order by Lower Price
2 - Order by Highest Rating
3 - Order by Lowest Rating
4 - Order by Name Starting at A - Z
5 - Order by Name Starting at Z - A
*/}
export default function Sort() {
    const [sortOrder, setSortOrder] = useState(() =>{
        const saved = localStorage.getItem("sortOrder");
        const initialValue = saved;
        return initialValue || "";
      });
      useEffect(() => {
        localStorage.setItem("sortOrder", sortOrder);
      }, [sortOrder]);
    
    return ( 
      <Box sx={{ minWidth: 150 }}>
        <FormControl fullWidth>
          <InputLabel id="sorting">Sort:</InputLabel>
          <Select
            labelId="SortByOrderLabel"
            id="SortbyOrder"
            value={sortOrder}
            label="Order"
            onChange={(r) => {
              setSortOrder(r.target.value);
              window.location.reload();
            } }
          >
    
            <MenuItem value={1}>
                High Price 
            </MenuItem>
            <MenuItem value={2}>
                Low Price 
            </MenuItem>
            <MenuItem value={3}>
                High Rating 
            </MenuItem>
            <MenuItem value={4}>
                Low Rating
            </MenuItem>
            <MenuItem value={5}>
                High Hotel Name 
            </MenuItem>
            <MenuItem value={6}>
               Low Hotel Name
            </MenuItem>
            
          </Select>
        </FormControl>
      </Box>
    );
  }

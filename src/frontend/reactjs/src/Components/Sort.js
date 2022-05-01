import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



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
    const [checked, setChecked] = React.useState(false);
  
    const handleChange = (event) => {
      setChecked(event.target.value);
      switch(checked){
        case 0:
            
            break;
        case 1:
            break;
        case 2:
              break;
        case 3:
              break;
        case 4:
              break;
        case 5:
              break;

      }
    };
  
    return (
      <Box sx={{ minWidth: 150 }}>
        <FormControl fullWidth>
          <InputLabel id="sorting">Sort by:</InputLabel>
          <Select
            labelId="SortByOrderLabel"
            id="SortbyOrder"
            value={checked}
            label="Order"
            onChange={handleChange}
          >
            
            <MenuItem value={0}>
                High Price 
            </MenuItem>
            <MenuItem value={1}>
                Low Price 
            </MenuItem>
            <MenuItem value={2}>
                High Rating 
            </MenuItem>
            <MenuItem value={3}>
                Low Rating
            </MenuItem>
            <MenuItem value={4}>
                High Hotel Name 
            </MenuItem>
            <MenuItem value={5}>
               Low Hotel Name
            </MenuItem>
            
          </Select>
        </FormControl>
      </Box>
    );
  }
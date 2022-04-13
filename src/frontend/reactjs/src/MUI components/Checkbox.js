import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function FormControlLabelPosition() {
  return (
    <FormControl component="fieldset">
     
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="accept"
          control={<Checkbox color="primary" />}
          label="I accept these terms and conditions"
          labelPlacement="accept"
        />
      </FormGroup>
    </FormControl>
  );
}

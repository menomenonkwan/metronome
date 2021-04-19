import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
    backgroundColor: 'var(--grey)',
    fontSize: '2.5rem',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  label: {
    color: 'black',
    padding: '0.1rem 1rem',
    borderRadius: '1rem',
    backgroundColor: 'var(--light-red)'
  }
}));

export default function PerMeasure({ beatsPerMeasure, setBeatsPerMeasure }) {
  const classes = useStyles();

  const handleChange = (event) => {
    setBeatsPerMeasure(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel className={classes.label} color="secondary" id="bpm-label">Beats Per Measure</InputLabel>
        <Select
          labelId="bpm-label"
          value={beatsPerMeasure}
          onChange={handleChange}
          color="secondary"
        >
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
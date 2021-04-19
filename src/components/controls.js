import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import PerMeasure from './measures';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    textAlign: 'center',
  },
  btn: {
    fontSize: '1.2rem',
    backgroundColor: 'var(--light-red)',
    margin: '0 1rem',
    '&:hover': {
      backgroundColor: 'var(--dark-red)',
      color: 'black'
    }
  }
}));

export default function Controls({ isPlaying, setIsPlaying, beatsPerMeasure, setBeatsPerMeasure }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PerMeasure 
        beatsPerMeasure={beatsPerMeasure} 
        setBeatsPerMeasure={setBeatsPerMeasure}        
      />
      {isPlaying
        ? <Button
            className={classes.btn}
            onClick={() => setIsPlaying(false)}
            variant="outlined"
            endIcon={<StopIcon />}
          >
            Stop
          </Button>      
        : <Button
            className={classes.btn}
            onClick={() => setIsPlaying(true)}
            variant="outlined"
            endIcon={<PlayArrowIcon />}
          >
            Start
          </Button>

      }
    </div>
  );
}
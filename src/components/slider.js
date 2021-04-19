import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles({
  root: {
    width: 800,
    margin: 'auto',
    padding: '5rem',
    borderColor: 'red',
  },
  input: {
    width: 100,
    fontSize: '2rem',
    padding: '0.5rem',
    color: 'var(--black)',
    background: 'var(--grey)'
  },
  slyde: {
    color: 'var(--light-red)'
  }
});


export default function InputSlider({ bpm, setBPM }) {
  const classes = useStyles();

  const handleSliderChange = (event, newValue) => {
    setBPM(newValue);
  };

  const handleInputChange = (event) => {
    setBPM(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (bpm < 40) {
      setBPM(40);
    } else if (bpm > 180) {
      setBPM(180);
    }
  };

  return (
    <div className={classes.root}>
      <Typography id="input-slider" gutterBottom>
        Beats Per Minute (BPM)
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            className={classes.slyde}
            value={typeof bpm === 'number' ? bpm : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            min={40}
            max={180}
          />
        </Grid>
        <Grid item>
          <Input
            className={classes.input}
            value={bpm}
            color="secondary"
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 40,
              max: 180,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
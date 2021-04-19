import { useEffect, useState } from 'react';
import useColorChange from 'use-color-change';
import Header from './components/header';
import InputSlider from './components/slider';
import Controls from './components/controls';
import './App.css';
import click1 from './audio/click1.wav';
import click2 from './audio/click2.wav';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBPM] = useState(60);
  const [beatsPerMeasure, setBeatsPerMeasure] = useState(4);
  const [value, setValue] = useState(1);

  const colorStyle = useColorChange(value, {
    higher: "#c3073f",
    lower: "#c3073f",
    duration: 1000
  });
  
  useEffect(() => {
    const clicks = new Audio(click1);
    const upbeat = new Audio(click2);
    let metronome;
    let beat = 1;
    
    const playTempo = () => {
      setValue(beat);
      if(beat % beatsPerMeasure === 0) {
        upbeat.play();
        beat = 1;
      } else {
        clicks.play()
        beat++;
      }
    }

    if (isPlaying) {
      metronome = setInterval( playTempo, (60 / bpm) * 1000);
    };

    return () => clearInterval(metronome);
  },[isPlaying, bpm, beatsPerMeasure]);

  return (
    <div className="App">
      <div className="visual" style={colorStyle}>{value}</div>
      <Header />
      <InputSlider 
        isPlaying={isPlaying} 
        bpm={bpm}
        setBPM={setBPM}
      />
      <Controls 
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying} 
        beatsPerMeasure={beatsPerMeasure} 
        setBeatsPerMeasure={setBeatsPerMeasure}
      />
    </div>
  );
}

export default App;
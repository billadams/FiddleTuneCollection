import {default as Rh5AudioPlayer} from 'react-h5-audio-player';


function AudioPlayer() {
  return (
    <Rh5AudioPlayer
      src="path/to/your/audio/file.mp3"
      onPlay={e => console.log("onPlay")}
    />
  );
}

export default AudioPlayer;
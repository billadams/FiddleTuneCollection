import {default as Rh5AudioPlayer} from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export interface AudioPlayerProps {
  src: string;
}

function AudioPlayer({ src }: AudioPlayerProps) {
  return (
    <Rh5AudioPlayer
      src={src}
      onPlay={e => console.log("onPlay")}
    />
  );
}

export default AudioPlayer;
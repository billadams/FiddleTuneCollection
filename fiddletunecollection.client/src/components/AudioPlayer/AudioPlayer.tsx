import {default as Rh5AudioPlayer} from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export interface AudioPlayerProps {
  fileName: string;
}

function AudioPlayer({ fileName }: AudioPlayerProps) {
  const audioUrl = `${import.meta.env.VITE_API_BASE_URL}/api/audio/${fileName}`;

  return (
    <Rh5AudioPlayer
      src={audioUrl}
      onPlay={e => console.log("onPlay")}
    />
  );
}

export default AudioPlayer;
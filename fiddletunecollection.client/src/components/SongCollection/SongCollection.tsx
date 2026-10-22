import SongCard, { type Song } from '../SongCard/SongCard';
import styles from './SongCollection.module.css';

export interface SongCollectionProps {
  headingLevel: 1 | 2 | 3 | 4 | 5 | 6;
  songs: Song[];
}

function SongCollection({ headingLevel, songs }: SongCollectionProps) {

  return (
    <div className={styles.songs}>
      {songs.map((song, index) => (
        <SongCard key={`${song.title}-${song.key}-${index}`} headingLevel={headingLevel} song={song} />
      ))}
    </div>
  );
}

export default SongCollection;
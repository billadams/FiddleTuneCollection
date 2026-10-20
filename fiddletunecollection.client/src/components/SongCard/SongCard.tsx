import AudioPlayer from '../AudioPlayer/AudioPlayer';
import Heading from '../Heading';
import styles from './SongCard.module.css';

interface Url {
  href: string;
  target: '_blank';
}

export interface Song {
  audioPath: string
  genre: string;
  coverArtPath: string;
  key: string;
  time: string;
  title: string;
  videoUrl?: string;
}

interface SheetMusic {
  filePath: string;
}

export interface SongCardProps {
  headingLevel: 1 | 2 | 3 | 4 | 5 | 6;
  songs: Song[];
  sheetMusics?: SheetMusic[];
}

function SongCard({ headingLevel, songs, sheetMusics }: SongCardProps) {

  return (
    <>
    {songs.map((song, index) => (
      <div className={styles.card} key={index}>
        <img src={song.coverArtPath} alt={`${song.title} cover art`} className={styles.coverArt} width='300' height='300' />
        <Heading text={song.title} headingLevel={headingLevel} classNames={styles.heading} />
        <div className={styles.body}>
          <div className={styles.metadata}>
            <span className={styles.key}>Key of {song.key}</span>
            <span className={styles.genre}>{song.genre}</span>
            <span className={styles.time}>{song.time}</span>
          </div>
          <div className={styles.audioPlayer}>
            <AudioPlayer src={song.audioPath} />
          </div>
          <div className={styles.sheetMusicDownload}>
            {sheetMusics && sheetMusics.length > 0 ? (
              sheetMusics.map((sheetMusic, index) => (
                <a key={index} href={sheetMusic.filePath} download>
                  Download Sheet Music {index + 1}
                </a>
              ))
            ) : null}
          </div>
        </div>
      </div>
    ))}
    </>
  );
}

export default SongCard;
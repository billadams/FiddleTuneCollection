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
  sheetMusics?: SheetMusic[];
  time: string;
  title: string;
  videoUrl?: string;
}

interface SheetMusic {
  filePath: string;
  url?: Url;
}

export interface SongCardProps {
  headingLevel: 1 | 2 | 3 | 4 | 5 | 6;
  song: Song;
}

function SongCard({ headingLevel, song }: SongCardProps) {

  return (
      <div className={styles.card} key={`${song.title}-${song.key}`}>
        <img src={song.coverArtPath} alt={`${song.title} cover art`} className={styles.coverArt} width='275' height='275' />
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
            {song.sheetMusics && song.sheetMusics.length > 0 ? (
              song.sheetMusics.map((sheetMusic, index) => (
                <a key={index} href={sheetMusic.filePath} download>
                  Download Sheet Music {index + 1}
                </a>
              ))
            ) : null}
          </div>
        </div>
      </div>
  );
}

export default SongCard;
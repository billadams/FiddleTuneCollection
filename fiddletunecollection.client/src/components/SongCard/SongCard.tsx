import AudioPlayer from '../AudioPlayer/AudioPlayer';
import Heading from '../Heading';
import styles from './SongCard.module.css';

interface Url {
  href: string;
  target: '_blank';
}

interface IFile {
  id: number;
  path: string;
}

interface AudioFile extends IFile {}
interface CoverArtFile extends IFile {}
interface SheetMusicFile extends IFile {}
interface VideoFile extends IFile {}

interface Filter {
  name: string;
  value: string;
}

export interface Song {
  id: number;
  audioFiles?: AudioFile[];
  coverArtFile?: CoverArtFile;
  filters?: Filter[];
  sheetMusicFiles?: SheetMusicFile[];
  title: string;
  videoFiles?: VideoFile[];
}

export interface SongCardProps {
  headingLevel: 1 | 2 | 3 | 4 | 5 | 6;
  song: Song;
}

function SongCard({ headingLevel, song }: SongCardProps) {

  return (
      <div className={styles.card} key={`${song.title}-${song.id}`}>
        <img src={song.coverArtFile?.path} alt={`${song.title} cover art`} className={styles.coverArt} width='275' height='275' />
        <Heading text={song.title} headingLevel={headingLevel} classNames={styles.heading} />
        <div className={styles.body}>
        {song.filters && song.filters.length > 0 ? (
          <div className={styles.metadata}>
            {song.filters.map((filter) => (
              <span key={`${filter.name}-${filter.value}`}>
                {filter.name}: {filter.value}
              </span>
            ))}
          </div>
        )
          : 
          null}
          {song.audioFiles && song.audioFiles.length > 0 ? (
            <div className={styles.audioPlayer}>
              <AudioPlayer src={song.audioFiles?.[0]?.path} />
            </div>
          ) 
          :
          null}
          {song.sheetMusicFiles && song.sheetMusicFiles.length > 0 ? (
            <div className={styles.sheetMusicDownload}>        
                {song.sheetMusicFiles.map((sheetMusic, index) => (
                  <a key={`${sheetMusic.id}-${sheetMusic.path}`} href={sheetMusic.path} download>
                    Download Sheet Music {index + 1}
                  </a>
                ))}
            </div>
          )
          : null}
        </div>
      </div>
  );
}

export default SongCard;
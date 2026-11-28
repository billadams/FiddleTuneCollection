import AudioPlayer from '../AudioPlayer/AudioPlayer';
import Heading from '../Heading';
import FileDownloadDropdown from '../FileDownloadDropdown/FileDownloadDropdown';
import styles from './SongCard.module.css';

interface Url {
  href: string;
  target: '_blank';
}

interface IFile {
  id: number;
  fileName: string;
}

interface IFileDownload extends IFile {
  label: string;
  downloadTypeID: number;
  downloadType: string;
}

interface AudioFile extends IFileDownload {}
interface CoverArtFile extends IFileDownload {}
interface SheetMusicFile extends IFileDownload {}
interface VideoFile extends IFileDownload {}

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
        <div className={styles.imageWrapper}>
          <img src={'https://placehold.co/275x275'} alt={`${song.title} cover art`} className={styles.coverArt} width='275' height='275' />
        </div>
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
            {/* TODO: Temporary single file implementation for simplicity. */}
              <AudioPlayer fileName={song.audioFiles?.[0]?.fileName} />
            </div>
          ) 
          :
          null}
          {song.sheetMusicFiles && song.sheetMusicFiles.length > 0 ? (
                <FileDownloadDropdown options={song.sheetMusicFiles.map((sheetMusic) => ({
                  filename: sheetMusic.fileName,
                  label: sheetMusic.label,
                  url: `api/file/download/${sheetMusic.fileName}`,
                }))} />
          )
          : null}
        </div>
      </div>
  );
}

export default SongCard;
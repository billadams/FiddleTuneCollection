import Heading from '../components/Heading';
import SongCard, { type Song, type SongCardProps } from '../components/SongCard/SongCard';

const song: Song = {
  audioPath: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
  genre: 'Jazz',
  coverArtPath: 'https://placeholdit.com/300x300/dddddd/999999',
  key: 'C',
  time: '4 / 4',
  title: 'Sample Song',
  videoUrl: 'https://www.example.com/video.mp4'
};

const songs: Song[] = [song];

const songCardProps: SongCardProps = {
  headingLevel: 4,
  songs: songs,
  sheetMusics: undefined
}

function Home() {
  return (
    <>  
      <Heading text="Fiddle Tunes" headingLevel={2} />
      <SongCard
        headingLevel={songCardProps.headingLevel}
        songs={songCardProps.songs}
        sheetMusics={songCardProps.sheetMusics}
        />
    </>
  );
}

export default Home;
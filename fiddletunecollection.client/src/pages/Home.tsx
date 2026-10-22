import Heading from '../components/Heading';
import { type Song, type SongCardProps } from '../components/SongCard/SongCard';
import SongCollection, { type SongCollectionProps } from '../components/SongCollection/SongCollection';

const song: Song = {
  audioPath: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
  genre: 'Reel',
  coverArtPath: 'https://placeholdit.com/275x275/dddddd/999999',
  key: 'D',
  sheetMusics: undefined,
  time: '4 / 4',
  title: 'Flop Eared Mule',
  videoUrl: 'https://www.example.com/video.mp4'
};

const song1: Song = {
  audioPath: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
  genre: 'Jig',
  coverArtPath: 'https://placeholdit.com/275x275/dddddd/999999',
  key: 'Em',
  sheetMusics: undefined,
  time: '6 / 8',
  title: 'Swallow Tail',
  videoUrl: 'https://www.example.com/video.mp4'
};

const song2: Song = {
  audioPath: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
  genre: 'Polka',
  coverArtPath: 'https://placeholdit.com/275x275/dddddd/999999',
  key: 'D',
  sheetMusics: undefined,
  time: '4 / 4',
  title: "John Ryan's Polka",
  videoUrl: 'https://www.example.com/video.mp4'
};

const song3: Song = {
  audioPath: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
  genre: 'Waltz',
  coverArtPath: 'https://placeholdit.com/275x275/dddddd/999999',
  key: 'D',
  sheetMusics: undefined,
  time: '4 / 4',
  title: 'Tennessee Waltz',
  videoUrl: 'https://www.example.com/video.mp4'
};

const song4: Song = {
  audioPath: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
  genre: 'Reel',
  coverArtPath: 'https://placeholdit.com/275x275/dddddd/999999',
  key: 'A',
  sheetMusics: undefined,
  time: '4 / 4',
  title: 'Old Joe Clark',
  videoUrl: 'https://www.example.com/video.mp4'
};

const song5: Song = {
  audioPath: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
  genre: 'Reel',
  coverArtPath: 'https://placeholdit.com/275x275/dddddd/999999',
  key: 'G',
  sheetMusics: undefined,
  time: '4 / 4',
  title: 'Puncheon Floor',
  videoUrl: 'https://www.example.com/video.mp4'
};

const songs: Song[] = [song, song1, song2, song3, song4, song5];

const songCollectionProps: SongCollectionProps = {
  headingLevel: 3,
  songs: songs,
};

function Home() {
  return (
    <>  
      <Heading text="Fiddle Tunes" headingLevel={2} />
      <SongCollection
        headingLevel={songCollectionProps.headingLevel}
        songs={songCollectionProps.songs}
        />
    </>
  );
}

export default Home;
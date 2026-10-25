import Heading from '../components/Heading';
import { type Song } from '../components/SongCard/SongCard';
import SongCollection, { type SongCollectionProps } from '../components/SongCollection/SongCollection';

const song: Song = {
  id: 1,
  audioFiles: [{ id: 1, path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' }],
  coverArtFile: { id: 1, path: 'https://placeholdit.com/275x275/dddddd/999999' },
  filters: [{name: 'Genre', value: 'Reel'}, {name: 'Key', value: 'D'}, {name: 'Time', value: '4 / 4'}],
  sheetMusicFiles: undefined,
  title: 'Flop Eared Mule',
  videoFiles: [{ id: 1, path: 'https://www.example.com/video.mp4' }]
};

const song1: Song = {
  id: 2,
  audioFiles: [{ id: 1, path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' }], 
  coverArtFile: { id: 1, path: 'https://placeholdit.com/275x275/dddddd/999999' },
  filters: [{name: 'Genre', value: 'Jig'}, {name: 'Key', value: 'Em'}, {name: 'Time', value: '6 / 8'}],
  sheetMusicFiles: undefined,
  title: 'Swallow Tail',
  videoFiles: [{ id: 1, path: 'https://www.example.com/video.mp4' }]
};

const song2: Song = {
  id: 3,
  audioFiles: [{ id: 1, path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' }],
  coverArtFile: { id: 1, path: 'https://placeholdit.com/275x275/dddddd/999999' },
  filters: [{name: 'Genre', value: 'Polka'}, {name: 'Key', value: 'D'}, {name: 'Time', value: '4 / 4'}],
  sheetMusicFiles: undefined,
  title: "John Ryan's Polka",
  videoFiles: [{ id: 1, path: 'https://www.example.com/video.mp4' }]
};

const song3: Song = {
  id: 4,
  audioFiles: [{ id: 1, path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' }],
  filters: [{name: 'Genre', value: 'Waltz'}, {name: 'Key', value: 'D'}, {name: 'Time', value: '4 / 4'}],
  coverArtFile: { id: 1, path: 'https://placeholdit.com/275x275/dddddd/999999' },
  sheetMusicFiles: undefined,
  title: 'Tennessee Waltz',
  videoFiles: [{ id: 1, path: 'https://www.example.com/video.mp4' }]
};

const song4: Song = {
  id: 5,
  audioFiles: [{ id: 1, path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' }],
  filters: [{name: 'Genre', value: 'Reel'}, {name: 'Key', value: 'A'}, {name: 'Time', value: '4 / 4'}],
  coverArtFile: { id: 1, path: 'https://placeholdit.com/275x275/dddddd/999999' },
  sheetMusicFiles: undefined,
  title: 'Old Joe Clark',
  videoFiles: [{ id: 1, path: 'https://www.example.com/video.mp4' }]
};

const song5: Song = {
  id: 6,
  audioFiles: [{ id: 1, path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' }],
  filters: [{name: 'Genre', value: 'Reel'}, {name: 'Key', value: 'G'}, {name: 'Time', value: '4 / 4'}],
  coverArtFile: { id: 1, path: 'https://placeholdit.com/275x275/dddddd/999999' },
  sheetMusicFiles: undefined,
  title: 'Puncheon Floor',
  videoFiles: [{ id: 1, path: 'https://www.example.com/video.mp4' }]
};

const songs: Song[] = [song, song1, song2, song3, song4, song5];

const songCollectionProps: SongCollectionProps = {
  headingLevel: 3,
  songs: songs,
};

function Index() {
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

export default Index;
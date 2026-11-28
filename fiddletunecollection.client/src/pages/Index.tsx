import { type LoaderFunctionArgs, useLoaderData } from 'react-router';
import { GetSongs } from '../services/Database';
import Heading from '../components/Heading/Heading';
import { type Song } from '../components/SongCard/SongCard';
import SongCollection from '../components/SongCollection/SongCollection';

export async function loader(req: LoaderFunctionArgs) {
  const songs: Array<Song> = await GetSongs();

  return songs;
}

function Index() {
  const songs = useLoaderData<typeof loader>();

  return (
    <>  
      <Heading text="Fiddle Tunes" headingLevel={2} />
      <SongCollection
        headingLevel={3}
        songs={songs}
        />
    </>
  );
}

export default Index;

import Heading from '../components/Heading';
import { type Song } from '../components/SongCard/SongCard';
import SongCollection, { type SongCollectionProps } from '../components/SongCollection/SongCollection';
import { type LoaderFunctionArgs, useLoaderData } from 'react-router';
import { GetSongs } from '../services/Database';

export function loader( req: LoaderFunctionArgs) {
  return GetSongs();
}

function Index() {
  const songs = useLoaderData() as Song[];

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

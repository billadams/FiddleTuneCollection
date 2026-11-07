import { type Song } from '../components/SongCard/SongCard';

async function GetSongs(): Promise<Array<Song>> {
  var response = await fetch('/api/FiddleTuneCollection', { method: 'GET' })
  if (response.ok) {
    const data: Array<Song> = await response.json();

    return data;
  }

  throw new Error(`Error fetching songs: ${response.status} ${response.statusText}`);
}

export { GetSongs };
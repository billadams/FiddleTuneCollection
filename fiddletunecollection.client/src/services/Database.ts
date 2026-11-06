import { type Song } from '../components/SongCard/SongCard';

async function GetSongs(): Promise<any> {
  var response = await fetch('/api/FiddleTuneCollection', { method: 'GET' })
        if (response.ok) {
            const data: Song[] = await response.json();

            return data;
        }

  console.log('Error fetching songs:', response.statusText);
}

export { GetSongs };
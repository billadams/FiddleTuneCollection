import { type Song } from '../components/SongCard/SongCard';

async function GetSongs(): Promise<any> {
  fetch('/api/FiddleTuneCollection/GetSongs', { method: 'GET' })
  .then(res => res.json())
  .then(data => console.log(data.message));

  // return response.json();
}

export { GetSongs };
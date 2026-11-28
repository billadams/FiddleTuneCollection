using FiddleTuneCollection.Server.Models.File;

namespace FiddleTuneCollection.Server.Models;

public class Song
{
  const short AudioDownloadTypeID = 1;
  const short SheetMusicDownloadTypeID = 2;
  const short VideoDownloadTypeID = 3;

  public int ID { get; set; }
  public List<AudioFile>? AudioFiles { get; set; }
  public CoverArtFile? CoverArtFile { get; set; }
  public List<Filter>? Filters { get; set; }
  public List<SheetMusicFile>? SheetMusicFiles { get; set; }
  public required string Title { get; set; }
  public List<VideoFile>? VideoFiles { get; set; }

  public Song() { }

  public Song(int id, List<AudioFile>? audioFiles, CoverArtFile? coverArtFile, List<Filter>? filters, List<SheetMusicFile>? sheetMusicFiles, string title, List<VideoFile>? videoFiles)
  {
    ID = id;
    AudioFiles = audioFiles;
    CoverArtFile = coverArtFile;
    Filters = filters;
    SheetMusicFiles = sheetMusicFiles;
    Title = title;
    VideoFiles = videoFiles;
  }

  public static List<Song> GetSongs()
  {
    var database = new Database.Database(new ConfigurationBuilder().AddJsonFile("appsettings.json").Build());
    var songDataModels = database.GetAllSongs();
    var songs = new List<Song>();

    var groupedSongDataModels = songDataModels.GroupBy(s => s.SongID);

    songs = [.. groupedSongDataModels.Select(group =>
    {
      var firstSongDataModel = group.First();
      var song = new Song()
      {
        ID = firstSongDataModel.SongID,
        Title = firstSongDataModel.Title
      };

      foreach (var songDataModel in group)
      {
        if (songDataModel.DownloadTypeID == AudioDownloadTypeID && !string.IsNullOrWhiteSpace(songDataModel.Filename))
        {
          song.AudioFiles ??= new List<AudioFile>();
          song.AudioFiles.Add(new AudioFile(songDataModel.Filename, songDataModel.Label, songDataModel.DownloadTypeID.Value, songDataModel.DownloadType));
        }
        else if (songDataModel.DownloadTypeID == VideoDownloadTypeID && !string.IsNullOrWhiteSpace(songDataModel.Filename))
        {
          song.VideoFiles ??= new List<VideoFile>();
          song.VideoFiles.Add(new VideoFile(songDataModel.Filename, songDataModel.Label, songDataModel.DownloadTypeID.Value, songDataModel.DownloadType));
        }
        else if (songDataModel.DownloadTypeID == SheetMusicDownloadTypeID && !string.IsNullOrWhiteSpace(songDataModel.Filename))
        {
          song.SheetMusicFiles ??= new List<SheetMusicFile>();
          song.SheetMusicFiles.Add(new SheetMusicFile(songDataModel.Filename, songDataModel.Label, songDataModel.DownloadTypeID.Value, songDataModel.DownloadType));
        }
      }

      return song;
    })];

    return songs;
  }
}

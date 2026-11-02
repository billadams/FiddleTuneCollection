using FiddleTuneCollection.Server.Models.File;

namespace FiddleTuneCollection.Server.Models;

public class Song
{
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
        if (songDataModel.DownloadType == "Audio" && !string.IsNullOrWhiteSpace(songDataModel.DownloadPath))
        {
          if (song.AudioFiles != null)
          {
            song.AudioFiles.Add(new AudioFile(songDataModel.DownloadPath));
          }
          else
          {
            song.AudioFiles = new List<AudioFile>
              {
                new AudioFile(songDataModel.DownloadPath)
              };
          }
        }
        else if (songDataModel.DownloadType == "Video" && !string.IsNullOrWhiteSpace(songDataModel.DownloadPath))
        {
          if (song.VideoFiles != null)
          {
            song.VideoFiles.Add(new VideoFile(songDataModel.DownloadPath));
          }
          else
          {
            song.VideoFiles = new List<VideoFile>
              {
                new VideoFile(songDataModel.DownloadPath)
              };
          }
        }
        else if (songDataModel.DownloadType == "SheetMusic" && !string.IsNullOrWhiteSpace(songDataModel.DownloadPath))
        {
          if (song.SheetMusicFiles != null)
          {
            song.SheetMusicFiles.Add(new SheetMusicFile(songDataModel.DownloadPath));
          }
          else
          {
            song.SheetMusicFiles = new List<SheetMusicFile>
              {
                new SheetMusicFile(songDataModel.DownloadPath)
              };
          }
        }
      }

      return song;
    })];

    return songs;
  }
}

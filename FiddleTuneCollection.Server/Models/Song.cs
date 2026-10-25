using FiddleTuneCollection.Server.Models.File;

namespace FiddleTuneCollection.Server.Models;

public class Song
{
  public int ID { get; set; }
  public List<AudioFile>? AudioFiles { get; set;}
  public CoverArtFile? CoverArtFile { get; set; }
  public List<Filter>? Filters { get; set; }
  public List<SheetMusicFile>? SheetMusicFiles { get; set; }
  public string Title { get; set; }
  public List<VideoFile>? VideoFiles { get; set; }

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
}

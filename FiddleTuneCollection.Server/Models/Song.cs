namespace FiddleTuneCollection.Server.Models;

public class Song
{
  public string AudioPath { get; set; }
  public string Genre { get; set; }
  public string CoverArtPath { get; set; }
  public string Key { get; set; }
  public List<SheetMusic>? SheetMusics { get; set; }
  public string Time { get; set; }
  public string Title { get; set; }
  public string? VideoUrl { get; set; }

  public Song(string audioPath, string genre, string coverArtPath, string key, List<SheetMusic>? sheetMusics, string time, string title, string? videoUrl)
  {
    AudioPath = audioPath;
    Genre = genre;
    CoverArtPath = coverArtPath;
    Key = key;
    SheetMusics = sheetMusics;
    Time = time;
    Title = title;
    VideoUrl = videoUrl;
  }
}

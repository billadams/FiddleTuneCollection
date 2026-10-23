namespace FiddleTuneCollection.Server.Models;

public class SheetMusic
{
  public string FilePath { get; set; }
  public string? Url { get; set; }
  public SheetMusic(string filePath, string? url)
  {
    FilePath = filePath;
    Url = url;
  }
}

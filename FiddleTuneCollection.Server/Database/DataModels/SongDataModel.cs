namespace FiddleTuneCollection.Server.Database.DataModels;

public class SongDataModel
{
  public int SongID { get; set; }
  public required string Title { get; set; }
  public string? DownloadPath { get; set; }
  public string? DownloadType { get; set; }
}

